import { bot } from '../../../settings.js';

export async function generateTextValidation(ctx, validations) {
   for (let { stipulation, text } of validations) {
      if (stipulation) {
         const mess = await ctx.reply(text, { parse_mode: 'html' });

         setTimeout(() => {
            bot.telegram.deleteMessage(mess.chat.id, mess.message_id);
         }, 2000);
         return false;
      }
   }

   return true;
}
