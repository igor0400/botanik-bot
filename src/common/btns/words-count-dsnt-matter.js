import { getRequestByUserId } from '../../database/requests.js';
import { sendSochineniyePlan } from '../../sochineniye/index.js';
import { getCtxData } from '../assets/index.js';

export const wordsCountDsntMatterBtn = async (ctx) => {
   const { user } = getCtxData(ctx);
   const userId = user.id;
   const actions = {
      sochineniye: async () => await sendSochineniyePlan(ctx),
   };

   const request = await getRequestByUserId(userId);
   const type = request?.type;

   if (request && actions[type]) {
      await actions[type](ctx);
   }
};
