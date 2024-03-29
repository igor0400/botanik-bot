export const textValidations = (text) => [
   {
      stipulation: text.trim() === '',
      text: '🚫 <b>Введите валидный текст</b>',
   },
];

export const wordsCountValidations = (count) => [
   {
      stipulation: !count && count !== 0,
      text: '🚫 <b>Введите число</b>',
   },
   {
      stipulation: count < 1,
      text: '🚫 <b>Минимальная длинна 1 слово</b>',
   },
   {
      stipulation: count > 300,
      text: '🚫 <b>Максимальная длинна 300 слов</b>',
   },
];
