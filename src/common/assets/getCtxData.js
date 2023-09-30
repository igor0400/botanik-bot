export const getCtxData = (ctx) => {
   if (ctx?.message?.from) {
      return { user: ctx?.message?.from, message: ctx?.message };
   } else {
      return {
         user: ctx?.update?.callback_query?.from,
         message: ctx?.update?.callback_query?.message,
      };
   }
};
