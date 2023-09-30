import messages from '../messages/index.js';
import { bot, gpt4 } from '../../../settings.js';
import {
   sendLoading,
   replyMessages,
   backMarkup,
   gptResponseProcessing,
   sendBackMarkup,
} from '../../common/index.js';

export const generateSolutionByText = async (ctx, text) => {
   const { getSolutionMessage } = messages.gpt;
   const { successSolution, errorSolution } = messages.responses;

   const loading = await sendLoading(ctx);
   const { chatId, messageId } = loading;

   try {
      const res = await gpt4.sendMessage(getSolutionMessage(text));

      console.log(text, res);

      loading.stop();

      if (res?.text?.toLowerCase() !== 'no') {
         await bot.telegram.editMessageText(
            chatId,
            messageId,
            undefined,
            successSolution(gptResponseProcessing(res.text)),
            {
               parse_mode: 'HTML',
               reply_markup: sendBackMarkup,
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
      console.log(e);
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
