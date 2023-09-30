import {
   deleteTextWaiterByUserId,
   getRequestByUserId,
} from '../../database/index.js';
import { wordsCountActions } from '../actions.js';
import { getCtxData } from '../assets/index.js';

export const wordsCountDsntMatterBtn = async (ctx) => {
   const { user } = getCtxData(ctx);
   const userId = user.id;
   const request = await getRequestByUserId(userId);
   const type = request?.type;
   const actions = wordsCountActions(ctx);

   await deleteTextWaiterByUserId(userId);

   if (request && actions[type]) {
      await actions[type]();
   }
};
