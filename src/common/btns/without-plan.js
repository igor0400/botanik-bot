import { getRequestByUserId } from '../../database/requests.js';
import { getCtxData } from '../assets/index.js';
import { generateSochineniye } from '../../sochineniye/index.js';

export const withoutPlanBtn = async (ctx) => {
   const { user } = getCtxData(ctx);
   const userId = user.id;
   const actions = {
      sochineniye: async () => {
         await generateSochineniye(ctx);
      },
   };

   const request = await getRequestByUserId(userId);
   const type = request?.type;

   if (request && actions[type]) {
      await actions[type](ctx);
   }
};
