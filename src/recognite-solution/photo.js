import { bot } from '../../settings.js';
import Tesseract from 'tesseract.js';
import { generateSolutionByText } from './assets/index.js';

export const recogniteSolutionByPhoto = async (ctx) => {
   const message = ctx.update.message;
   const photo = message.photo[message.photo.length - 1];
   const language = 'rus';

   // поменять оформление
   // сделать кнопки русский или английский

   try {
      const downloadUrl = await bot.telegram.getFileLink(photo.file_id);
      const photoUrl = downloadUrl.href;

      const {
         data: { text },
      } = await Tesseract.recognize(photoUrl, language);

      if (text) {
         await generateSolutionByText(ctx, text);
      }
   } catch (e) {
      console.log(e);
   }
};
