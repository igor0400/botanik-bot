import { bot } from '../../../settings.js';

export const sendLoading = async (ctx, initText = '🤔 Формирую ответ') => {
   let isWork = true;
   let count = 2;
   let type = 'dec';

   const message = await ctx.sendMessage(`${initText}...`);

   const internalId = setInterval(async () => {
      let text = initText;
      for (let i = 0; i < count; i++) {
         text += '.';
      }

      if (type === 'inc') {
         count++;
      } else {
         count--;
      }

      if (count === 0) {
         type = 'inc';
      }

      if (count === 3) {
         type = 'dec';
      }

      await bot.telegram.editMessageText(
         message.chat.id,
         message.message_id,
         undefined,
         text
      );
   }, 300);

   return {
      messageId: message.message_id,
      chatId: message.chat.id,
      isWork,
      stop: () => {
         isWork = false;
         clearInterval(internalId);
      },
   };
};
