import { generateSolutionByText } from './assets/index.js';
import { getTextFromPhotoByPhotoId } from '../common/index.js';

export const recogniteSolutionByPhoto = async (ctx) => {
   const message = ctx.update.message;
   const photo = message.photo[message.photo.length - 1];

   try {
      const text = await getTextFromPhotoByPhotoId(photo.file_id);

      if (text) {
         await generateSolutionByText(ctx, text);
      }
   } catch (e) {
      console.log(e);
   }
};
