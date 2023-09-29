export const getCtxUserData = (ctx) => {
   if (ctx?.message?.from) {
      return ctx?.message?.from;
   } else {
      return ctx?.update?.callback_query.from;
   }
};
