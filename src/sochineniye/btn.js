import { wordsCountMarkup, wordsCountMessage } from '../common/index.js';

export const sochineniyeBtn = async (ctx) => {
   await ctx.editMessageText(wordsCountMessage(), {
      parse_mode: 'HTML',
      reply_markup: wordsCountMarkup,
   });
};
