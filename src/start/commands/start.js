import { createUser, getUserById } from '../../database/index.js';
import { bot } from '../../../settings.js';
import { sendMenu } from '../../common/index.js';

bot.start(async (ctx) => {
   const userId = ctx.message.from.id;
   const userName = ctx.message.from.username;
   const firstName = ctx.message.from.first_name;
   const lastName = ctx.message.from?.last_name;
   const chatId = ctx.message.chat.id;

   const userData = await getUserById(userId);

   if (!userData) {
      createUser({ userId, userName, firstName, lastName, chatId });
   }

   await sendMenu(ctx);
});
