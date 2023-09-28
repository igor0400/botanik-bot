import {
   changeUserNameById,
   getBanUserByUserId,
} from '../../database/index.js';
import { banMessage } from '../responses/index.js';

export const commandMiddleware = async (ctx, func) => {
   const userId = ctx.message.from.id;
   const userName = ctx.message.from.username;
   const banUser = await getBanUserByUserId(userId);

   await changeUserNameById(userId, userName);

   if (banUser) {
      await ctx.reply(banMessage(banUser.reason), {
         parse_mode: 'html',
      });
      return;
   }

   return func(ctx);
};
