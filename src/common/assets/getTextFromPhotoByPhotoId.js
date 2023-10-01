import Tesseract from 'tesseract.js';
import { bot } from '../../../settings.js';

export const getTextFromPhotoByPhotoId = async (photoId) => {
   try {
      const downloadUrl = await bot.telegram.getFileLink(photoId);
      const photoUrl = downloadUrl.href;

      const {
         data: { text },
      } = await Tesseract.recognize(photoUrl, 'rus+eng');

      return text;
   } catch (e) {
      console.log(e);
   }
};
