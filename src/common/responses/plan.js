export const planMessage = (kind) => {
   return `<b>План</b>
➖➖➖➖➖➖➖
При желании отправьте план ${kind}, это улучшит качество моей работы:
➖➖➖➖➖➖➖`;
};

export const planMarkup = {
   inline_keyboard: [
      [{ text: '✖️ Без плана', callback_data: 'without_plan' }],
      [{ text: '❌ Отменить', callback_data: 'cancel_request' }],
   ],
};
