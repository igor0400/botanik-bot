import { getRequestByUserId } from '../../database/requests.js';
import { getCtxData } from '../assets/index.js';
import { generateSochineniye } from '../../sochineniye/index.js';
import { bot } from '../../../settings.js';

export const withoutPlanBtn = async (ctx) => {
   const { user, message } = getCtxData(ctx);
   const userId = user.id;
   const actions = {
      sochineniye: async () => {
         await bot.telegram.editMessageText(
            message.chat.id,
            message.message_id,
            undefined,
            'Генерация сочинения...'
         );
      },
   };

   const request = await getRequestByUserId(userId);
   const type = request?.type;

   if (request && actions[type]) {
      await actions[type](ctx);
   }
};
