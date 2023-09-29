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
      stipulation: count > 1000,
      text: '🚫 <b>Максимальная длинна 1000 слов</b>',
   },
];
