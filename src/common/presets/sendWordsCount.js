import { createTextWaiter } from '../../database/index.js';
import { getCtxUserData } from '../assets/index.js';
import { wordsCountMarkup, wordsCountMessage } from '../responses/index.js';

export const sendWordsCount = async (ctx) => {
   const user = getCtxUserData(ctx);
   const userId = user.id;

   const mess = await ctx.editMessageText(wordsCountMessage(), {
      parse_mode: 'HTML',
      reply_markup: wordsCountMarkup,
   });

   await createTextWaiter({
      type: 'words-count',
      userId,
      chatId: mess.chat.id,
      messageId: mess.message_id,
   });

   return { message: mess };
};
