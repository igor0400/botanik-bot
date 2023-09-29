import { bot } from '../../../settings.js';
import {
   addRequestWordsCountByUserId,
   getTextWaiterByUserId,
} from '../../database/index.js';
import { recogniteSolutionByText } from '../../recognite-solution/index.js';
import { generateTextValidation, getCtxUserData } from '../assets/index.js';
import { wordsCountValidations } from '../configs/index.js';

export const onText = async (ctx) => {
   const user = getCtxUserData(ctx);
   const userId = user.id;
   const text = ctx.message.text;
   const waiter = await getTextWaiterByUserId(userId);

   if (waiter) {
      const { type, chat_id, message_id } = waiter;

      await ctx.deleteMessage();

      if (type === 'words-count') {
         const count = +text;

         const isValid = await generateTextValidation(
            ctx,
            wordsCountValidations(count)
         );
         if (!isValid) return;

         await addRequestWordsCountByUserId(userId, count);

         // отправлять на план сочинения
         bot.telegram.editMessageText(
            chat_id,
            message_id,
            undefined,
            'Все гуд!'
         );
         return;
      }
   }

   await recogniteSolutionByText(ctx);
};
