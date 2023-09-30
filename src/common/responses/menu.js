export const menuMessage = (name) =>
   `<b>👋 Привет ${name}!</b>
➖➖➖➖➖➖➖
Я Ботаник 📚, твой умный помощник в любых заданиях.
Выбери ниже с чем тебе нужна помощь или просто <b>отправь мне задание в формате фото или текста</b>, и я всё порешаю 😎
➖➖➖➖➖➖➖
Приобрети ежемесячную подписку в разделе <b>профиль</b> за <code>299 руб.</code> - это сильно увеличит скорость моих ответов.
`;

export const menuMarkup = {
   inline_keyboard: [
      [{ text: 'Гдз', callback_data: 'gdz' }],
      [
         { text: 'Сочинение', callback_data: 'sochineniye' },
         { text: 'Изложение', callback_data: 'izlozheniye' },
      ],
      [
         { text: 'Конспект', callback_data: 'konspekt' },
         { text: 'Реферат', callback_data: 'referat' },
      ],
      [
         { text: 'Курсовая', callback_data: 'kursach' },
         { text: 'Презентация', callback_data: 'presentation' },
      ],
      [
         { text: '🎓 Профиль', callback_data: 'profile' },
         { text: 'ℹ️ Инфо', callback_data: 'info' },
         { text: '🆘 Поддержка', callback_data: 'support' },
      ],
   ],
};
