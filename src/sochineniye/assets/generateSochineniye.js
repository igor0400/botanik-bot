import messages from '../messages/index.js';
import { bot, gpt4 } from '../../../settings.js';
import {
   sendLoading,
   replyMessages,
   backMarkup,
   getCtxData,
} from '../../common/index.js';
import { getRequestByUserId } from '../../database/index.js';

// выводить сообщение о том что уже есть запрос и надо его дождаться
// сделать генерацию сочинения
// мб сделать несколько запросов

export const generateSochineniye = async (ctx) => {
   const { getSolutionMessage } = messages.gpt;
   const { successSolution, errorSolution } = messages.responses;
   const { user } = getCtxData(ctx);
   const userId = user.id;

   const loading = await sendLoading(ctx);
   const { chatId, messageId } = loading;

   const request = await getRequestByUserId(userId, 'sochineniye');

   try {
      const res = await gpt4.sendMessage(getSolutionMessage(text));

      console.log(text, res);

      loading.stop();

      if (res?.text) {
         await bot.telegram.editMessageText(
            chatId,
            messageId,
            undefined,
            successSolution(res.text),
            {
               parse_mode: 'HTML',
               reply_markup: backMarkup,
            }
         );
      } else {
         await bot.telegram.editMessageText(
            chatId,
            messageId,
            undefined,
            errorSolution(),
            {
               parse_mode: 'HTML',
               reply_markup: backMarkup,
            }
         );
      }
   } catch (e) {
      loading.stop();

      await bot.telegram.editMessageText(
         chatId,
         messageId,
         undefined,
         replyMessages.error,
         {
            parse_mode: 'HTML',
            reply_markup: backMarkup,
         }
      );
   }
};
