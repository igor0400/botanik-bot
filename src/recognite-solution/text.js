import { generateSolutionByText } from './assets/index.js';

export const recogniteSolutionByText = async (ctx) => {
   const message = ctx.update.message;
   const text = message.text;

   // выдает ошибку при запросе после генерации сочинения

   try {
      if (text) {
         await generateSolutionByText(ctx, text);
      }
   } catch (e) {
      console.log(e);
   }
};
