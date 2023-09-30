import {
   addRequestPlanByUserId,
   addRequestTopicByUserId,
   addRequestWordsCountByUserId,
   deleteTextWaiterByUserId,
   getRequestByUserId,
   getTextWaiterByUserId,
} from '../../database/index.js';
import { recogniteSolutionByText } from '../../recognite-solution/index.js';
import { topicActions, wordsCountActions } from '../actions.js';
import { generateTextValidation, getCtxData } from '../assets/index.js';
import { textValidations, wordsCountValidations } from '../configs/index.js';

export const onText = async (ctx) => {
   const { user } = getCtxData(ctx);
   const userId = user.id;
   const text = ctx.message.text;
   const waiter = await getTextWaiterByUserId(userId);

   if (waiter) {
      const { type } = waiter;
      const request = await getRequestByUserId(userId);

      await ctx.deleteMessage();

      if (type === 'topic') {
         const isValid = await generateTextValidation(
            ctx,
            textValidations(text)
         );
         if (!isValid) return;

         const actions = topicActions(ctx);

         await addRequestTopicByUserId(userId, text);
         await deleteTextWaiterByUserId(userId);

         if (request && actions[request.type]) {
            await actions[request.type]();
         }
         return;
      }

      if (type === 'words-count') {
         const count = +text;

         const isValid = await generateTextValidation(
            ctx,
            wordsCountValidations(count)
         );
         if (!isValid) return;

         const actions = wordsCountActions(ctx);

         await addRequestWordsCountByUserId(userId, count);
         await deleteTextWaiterByUserId(userId);

         if (request && actions[request.type]) {
            await actions[request.type]();
         }
         return;
      }

      if (type === 'plan') {
         const isValid = await generateTextValidation(
            ctx,
            textValidations(text)
         );
         if (!isValid) return;

         const actions = planActions(ctx);

         await addRequestPlanByUserId(userId, text);
         await deleteTextWaiterByUserId(userId);

         if (request && actions[type]) {
            await actions[type]();
         }

         return;
      }
   }

   await recogniteSolutionByText(ctx);
};
