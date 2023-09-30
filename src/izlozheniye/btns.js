import {
   alreadyRequestedMessage,
   backMarkup,
   getCtxData,
} from '../common/index.js';
import { getRequestByUserId } from '../database/requests.js';
import { sendIzlozheniyeTopic } from './presets.js';

export const izlozheniyeBtn = async (ctx) => {
   const { user: ctxUser } = getCtxData(ctx);
   const userId = ctxUser?.id;
   const request = await getRequestByUserId(userId);

   if (request) {
      await ctx.editMessageText(alreadyRequestedMessage(), {
         parse_mode: 'html',
         reply_markup: backMarkup,
      });
   } else {
      await sendIzlozheniyeTopic(ctx);
   }
};
