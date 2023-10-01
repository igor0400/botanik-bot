import Tesseract from 'tesseract.js';
import { bot } from '../../../settings.js';
import { isValidText } from './isValidText.js';

export const getTextFromPhotoByPhotoId = async (photoId) => {
   try {
      const downloadUrl = await bot.telegram.getFileLink(photoId);
      const photoUrl = downloadUrl.href;

      // сделать распознование рукописного текста

      const {
         data: { text },
      } = await Tesseract.recognize(photoUrl, 'rus');

      const isValid = await isValidText(text);

      if (text && isValid) return text;

      const {
         data: { text: newText },
      } = await Tesseract.recognize(photoUrl, 'eng');

      if (newText) return newText;
   } catch (e) {
      console.log(e);
   }
};
