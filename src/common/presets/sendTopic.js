import { bot } from '../../../settings.js';
import { createTextWaiter, getRequestByUserId } from '../../database/index.js';
import { getCtxData } from '../assets/index.js';
import { topicMarkup, topicMessage } from '../responses/index.js';

export const sendTopic = async (ctx, kind) => {
   const { user } = getCtxData(ctx);
   const userId = user.id;

   const request = await getRequestByUserId(userId);

   if (request) {
      const { chat_id, message_id } = request;

      await createTextWaiter({
         type: 'topic',
         userId,
         chatId: chat_id,
         messageId: message_id,
      });

      await bot.telegram.editMessageText(
         chat_id,
         message_id,
         undefined,
         topicMessage(kind),
         {
            parse_mode: 'HTML',
            reply_markup: topicMarkup,
         }
      );
   }
};
