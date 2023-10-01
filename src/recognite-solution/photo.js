import { generateSolutionByText } from './assets/index.js';
import { getTextFromPhotoByPhotoId, sendLoading } from '../common/index.js';
import { bot } from '../../settings.js';

export const recogniteSolutionByPhoto = async (ctx) => {
   const message = ctx.update.message;
   const photo = message.photo[message.photo.length - 1];

   const loading = await sendLoading(ctx, undefined, '🖼 Распознаю фото');

   try {
      const text = await getTextFromPhotoByPhotoId(photo.file_id);

      const { chatId, messageId } = loading;
      loading.stop();
      await bot.telegram.deleteMessage(chatId, messageId);

      if (text) {
         await generateSolutionByText(ctx, text);
      }
   } catch (e) {
      console.log(e);
   }
};
