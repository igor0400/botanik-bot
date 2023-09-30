export default {
   getSolutionMessage: (topic, length, plan) => {
      const addLendth = length ? ` оно должно содержать ${length} слов` : '';
      const addPlan = plan
         ? `. При написании следуй этому плану:\n${plan}`
         : '';
      return `Напиши сочинение на тему "${topic}"${addLendth}${addPlan}.
В сочинении не должно быть фактических, грамматических, лексических и каких либо ошибок, если они есть - исправь, но не пиши об этом в ответе.`;
   },
};
