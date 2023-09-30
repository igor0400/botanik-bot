import { getCtxData } from '../assets/index.js';
import { menuMarkup, menuMessage } from '../responses/index.js';

export const backBtn = async (ctx) => {
   const firstName = getCtxData(ctx).first_name;

   await ctx.editMessageText(menuMessage(firstName), {
      parse_mode: 'html',
      reply_markup: menuMarkup,
   });
};
