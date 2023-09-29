import { menuMarkup, menuMessage } from '../index.js';

export const sendMenu = async (ctx, firstName) => {
   await ctx.reply(menuMessage(firstName), {
      parse_mode: 'html',
      reply_markup: menuMarkup,
   });
};

export const changeToMenu = async (ctx, firstName) => {
   await ctx.editMessageText(menuMessage(firstName), {
      parse_mode: 'html',
      reply_markup: menuMarkup,
   });
};
