import {
   getCtxUserData,
   wordsCountMarkup,
   wordsCountMessage,
} from '../common/index.js';
import { createRequest } from '../database/index.js';

export const sochineniyeBtn = async (ctx) => {
   const user = getCtxUserData(ctx);
   const userId = user.id;

   const mess = await ctx.editMessageText(wordsCountMessage(), {
      parse_mode: 'HTML',
      reply_markup: wordsCountMarkup,
   });

   await createRequest({
      type: 'sochineniye',
      userId,
      chatId: mess.chat.id,
      messageId: mess.message_id,
   });
};
