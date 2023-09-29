import { getRequestByUserId } from '../../database/requests.js';
import { generateSochineniye } from '../../sochineniye/index.js';
import { getCtxUserData } from '../assets/index.js';

export const wordsCountDsntMatterBtn = async (ctx) => {
   const user = getCtxUserData(ctx);
   const userId = user.id;
   const actions = {
      sochineniye: generateSochineniye,
   };

   const request = await getRequestByUserId(userId);
   const type = request?.type;

   if (request && actions[type]) {
      await actions[type](ctx);
   }
};
