import { menuMarkup, menuMessage } from '../../common/index.js';

export const sendMenu = async (ctx) => {
   const firstName = ctx.message.from.first_name;

   await ctx.reply(menuMessage(firstName), {
      parse_mode: 'html',
      reply_markup: menuMarkup,
   });
};
