import {
   changeUserNameById,
   getBanUserByUserId,
} from '../../database/index.js';
import { getCtxData } from '../assets/index.js';
import { banMessage } from '../responses/index.js';

export const btnMiddleware = async (ctx, func) => {
   const { user } = getCtxData(ctx);
   const userId = user.id;
   const userName = user.username;
   const banUser = await getBanUserByUserId(userId);

   await changeUserNameById(userId, userName);

   if (banUser) {
      await ctx.editMessageCaption(banMessage(banUser.reason), {
         parse_mode: 'html',
      });
      return;
   }

   try {
      const data = await func(ctx);
      return data;
   } catch (e) {
      console.error('ERROR: ', e);
   }
};
