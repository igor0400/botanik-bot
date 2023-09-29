import { getCtxUserData, sendWordsCount } from '../common/index.js';
import { createRequest } from '../database/index.js';

export const sochineniyeBtn = async (ctx) => {
   const user = getCtxUserData(ctx);
   const userId = user.id;

   const { message } = await sendWordsCount(ctx, 'sochineniye');

   await createRequest({
      type: 'sochineniye',
      userId,
      chatId: message.chat.id,
      messageId: message.message_id,
   });
};
