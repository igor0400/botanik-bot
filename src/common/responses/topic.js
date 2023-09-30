export const topicMessage = (kind) => {
   return `<b>Тема</b>
➖➖➖➖➖➖➖
Отправьте тему ${kind}:
➖➖➖➖➖➖➖`;
};

export const topicMarkup = {
   inline_keyboard: [
      [{ text: '❌ Отменить', callback_data: 'cancel_request' }],
   ],
};
