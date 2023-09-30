export default {
   getSolutionMessage: (topic, length, plan) => {
      const addLendth = length ? ` оно должно содержать ${length} слов` : '';
      const addPlan = plan
         ? `. При написании следуй этому плану:\n${plan}`
         : '';
      return `Напиши изложение по произведению "${topic}"${addLendth}${addPlan}.
В изложении не должно быть фактических, грамматических, лексических и каких либо ошибок, если они есть - исправь, но не пиши об этом в ответе.`;
   },
};
