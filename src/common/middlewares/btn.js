import {
   changeUserNameById,
   getBanUserByUserId,
} from '../../database/index.js';
import { banMessage } from '../responses/index.js';

export const btnMiddleware = async (ctx, func) => {
   const query = ctx.update.callback_query;
   const userId = query.from.id;
   const userName = query.from.username;
   const banUser = await getBanUserByUserId(userId);

   await changeUserNameById(userId, userName);

   if (banUser) {
      await ctx.editMessageCaption(banMessage(banUser.reason), {
         parse_mode: 'html',
      });
      return;
   }

   return func(ctx);
};
