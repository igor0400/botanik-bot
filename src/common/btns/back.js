import { menuMarkup, menuMessage } from '../responses/index.js';

export const backBtn = async (ctx) => {
   const firstName = ctx.update.callback_query.from.first_name;

   await ctx.editMessageText(menuMessage(firstName), {
      parse_mode: 'html',
      reply_markup: menuMarkup,
   });
};
