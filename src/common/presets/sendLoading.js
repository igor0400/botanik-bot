import { bot } from '../../../settings.js';

export const sendLoading = async (
   ctx,
   changeData,
   initText = '🤔 Формирую ответ'
) => {
   let isWork = true;
   let count = 2;
   let type = 'dec';

   const message = changeData
      ? await bot.telegram.editMessageText(
           changeData.chat_id,
           changeData.message_id,
           undefined,
           initText
        )
      : await ctx.sendMessage(`${initText}...`);

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
         clearInterval(internalId);
         isWork = false;
      },
   };
};
