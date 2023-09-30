import { getCtxData } from '../assets/index.js';
import { menuMarkup, menuMessage } from '../responses/index.js';

export const backBtn = async (ctx) => {
   const { user } = getCtxData(ctx);

   await ctx.editMessageText(menuMessage(user.first_name), {
      parse_mode: 'html',
      reply_markup: menuMarkup,
   });
};

export const sendBackBtn = async (ctx) => {
   const { user } = getCtxData(ctx);

   await ctx.sendMessage(menuMessage(user.first_name), {
      parse_mode: 'html',
      reply_markup: menuMarkup,
   });
};
