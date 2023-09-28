export default {
   getSolutionMessage: (text, length) => {
      const addLendth = length ? ` на ${length} слов` : '';
      return `Напиши сочинение на тему "${text}"` + addLendth;
   },
};
