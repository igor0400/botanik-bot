import { bot } from '../../../settings.js';
import { createTextWaiter, getRequestByUserId } from '../../database/index.js';
import { getCtxData } from '../assets/index.js';
import { planMarkup, planMessage } from '../responses/index.js';

export const sendPlan = async (ctx, kind) => {
   const { user } = getCtxData(ctx);
   const userId = user.id;

   const request = await getRequestByUserId(userId);

   if (request) {
      const { chat_id, message_id } = request;

      await createTextWaiter({
         type: 'plan',
         userId,
         chatId: chat_id,
         messageId: message_id,
      });

      await bot.telegram.editMessageText(
         chat_id,
         message_id,
         undefined,
         planMessage(kind),
         {
            parse_mode: 'HTML',
            reply_markup: planMarkup,
         }
      );
   }
};
