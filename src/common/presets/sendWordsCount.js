import { bot } from '../../../settings.js';
import { createTextWaiter, getRequestByUserId } from '../../database/index.js';
import { getCtxData } from '../assets/index.js';
import { wordsCountMarkup, wordsCountMessage } from '../responses/index.js';

export const sendWordsCount = async (ctx) => {
   const { user } = getCtxData(ctx);
   const userId = user.id;

   const request = await getRequestByUserId(userId);

   if (request) {
      const { chat_id, message_id } = request;

      await createTextWaiter({
         type: 'words-count',
         userId,
         chatId: chat_id,
         messageId: message_id,
      });

      await bot.telegram.editMessageText(
         chat_id,
         message_id,
         undefined,
         wordsCountMessage(),
         {
            parse_mode: 'HTML',
            reply_markup: wordsCountMarkup,
         }
      );
   }
};
