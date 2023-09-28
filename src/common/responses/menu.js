export const menuMessage = (name) =>
   `<b>🌱 Привет ${name}!</b>
Я Ботаник 📚, твой умный помощник в любых заданиях.
Я создан специально, чтобы помочь тебе справиться с учебными вызовами.
Выбери ниже с чем тебе нужна помощь, и я всё порешаю 😎
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
