import { createRequest } from '../../database/index.js';
import { getCtxData } from '../assets/index.js';

export const sendParent = async ({ ctx, type, func, isInit = false, kind }) => {
   const { user, message } = getCtxData(ctx);
   const userId = user.id;

   if (isInit) {
      await createRequest({
         type,
         userId,
         chatId: message.chat.id,
         messageId: message.message_id,
      });
   }

   await func(ctx, kind);
};
