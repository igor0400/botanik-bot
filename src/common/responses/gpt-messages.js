const langs = {
   rus: 'русском',
   eng: 'английском',
};

export default {
   checkValidTextMessage: (text, lang = 'rus') =>
      `Если данный текст является вылидным текстом на ${langs[lang]} языке, отправь только одно слово из двух "yes" или "no". Вот текст:\n${text}`,
};
