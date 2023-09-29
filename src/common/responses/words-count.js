export const wordsCountMessage = () => {
   return `<b>Количество слов</b>
➖➖➖➖➖➖➖
Отправьте примерное количество слов:
➖➖➖➖➖➖➖`;
};

export const wordsCountMarkup = {
   inline_keyboard: [
      [{ text: '🤷‍♂️ Неважно', callback_data: 'words_count_dsnt_matter' }],
      [{ text: '❌ Отменить', callback_data: 'cancel_request' }],
   ],
};
