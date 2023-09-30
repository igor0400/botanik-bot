import { bot } from '../../../settings.js';
import {
   addRequestPlanByUserId,
   addRequestTopicByUserId,
   addRequestWordsCountByUserId,
   getTextWaiterByUserId,
} from '../../database/index.js';
import { recogniteSolutionByText } from '../../recognite-solution/index.js';
import {
   sendSochineniyePlan,
   sendSochineniyeWordsCount,
} from '../../sochineniye/index.js';
import { generateTextValidation, getCtxData } from '../assets/index.js';
import { textValidations, wordsCountValidations } from '../configs/index.js';

export const onText = async (ctx) => {
   const { user } = getCtxData(ctx);
   const userId = user.id;
   const text = ctx.message.text;
   const waiter = await getTextWaiterByUserId(userId);

   if (waiter) {
      const { type, chat_id, message_id } = waiter;

      await ctx.deleteMessage();

      if (type === 'topic') {
         const isValid = await generateTextValidation(
            ctx,
            textValidations(text)
         );
         if (!isValid) return;

         await addRequestTopicByUserId(userId, text);

         await sendSochineniyeWordsCount(ctx);
         return;
      }

      if (type === 'words-count') {
         const count = +text;

         const isValid = await generateTextValidation(
            ctx,
            wordsCountValidations(count)
         );
         if (!isValid) return;

         await addRequestWordsCountByUserId(userId, count);

         await sendSochineniyePlan(ctx);
         return;
      }

      if (type === 'plan') {
         const isValid = await generateTextValidation(
            ctx,
            textValidations(text)
         );
         if (!isValid) return;

         await addRequestPlanByUserId(userId, text);

         await bot.telegram.editMessageText(
            chat_id,
            message_id,
            undefined,
            'Генерация сочинения...'
         );
         return;
      }
   }

   await recogniteSolutionByText(ctx);
};
