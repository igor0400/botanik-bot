import { getCtxData } from '../assets/index.js';
import {
   deleteTextWaiterByUserId,
   getRequestByUserId,
} from '../../database/index.js';
import { planActions } from '../actions.js';

export const withoutPlanBtn = async (ctx) => {
   const { user } = getCtxData(ctx);
   const userId = user.id;
   const request = await getRequestByUserId(userId);
   const type = request?.type;
   const actions = planActions(ctx);

   await deleteTextWaiterByUserId(userId);

   if (request && actions[type]) {
      await actions[type]();
   }
};
