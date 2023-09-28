import { generateSolutionByText } from './assets/index.js';

export const recogniteSolutionByText = async (ctx) => {
   const message = ctx.update.message;
   const text = message.text;

   try {
      if (text) {
         await generateSolutionByText(ctx, text);
      }
   } catch (e) {
      console.log(e);
   }
};
