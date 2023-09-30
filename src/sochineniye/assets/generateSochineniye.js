import messages from '../messages/index.js';
import { bot, gpt4 } from '../../../settings.js';
import {
   replyMessages,
   backMarkup,
   getCtxData,
   sendLoading,
   gptResponseProcessing,
   sendBackMarkup,
} from '../../common/index.js';
import {
   changeRequestStatusByUserId,
   deleteRequestByUserId,
   getRequestByUserId,
} from '../../database/index.js';

export const generateSochineniye = async (ctx) => {
   const { getSolutionMessage } = messages.gpt;
   const { successSolution } = messages.responses;
   const { user } = getCtxData(ctx);
   const userId = user.id;

   const request = await getRequestByUserId(userId, 'sochineniye');

   if (request) {
      const { chat_id, message_id, topic, words_count, plan } = request;

      const loading = await sendLoading(ctx, {
         chat_id,
         message_id,
      });

      await changeRequestStatusByUserId(userId, 'PROCESSING');

      try {
         const res = await gpt4.sendMessage(
            getSolutionMessage(topic, words_count, plan)
         );

         await deleteRequestByUserId(userId);
         loading.stop();

         if (res?.text) {
            await bot.telegram.editMessageText(
               chat_id,
               message_id,
               undefined,
               successSolution(gptResponseProcessing(res.text)),
               {
                  parse_mode: 'HTML',
                  reply_markup: sendBackMarkup,
               }
            );
         } else {
            await sendError();
         }
      } catch (e) {
         await sendError();
         console.log(e);
      }

      async function sendError() {
         if (loading.isWork) loading.stop();
         await bot.telegram.editMessageText(
            chat_id,
            message_id,
            undefined,
            replyMessages.error,
            {
               parse_mode: 'HTML',
               reply_markup: backMarkup,
            }
         );
      }
   } else {
      await bot.telegram.sendMessage(userId, replyMessages.error, {
         parse_mode: 'HTML',
         reply_markup: backMarkup,
      });
   }
};
