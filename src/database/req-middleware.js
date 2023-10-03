import { connection } from './index.js';

export const reqMiddleware = async (func) => {
   //  await connection().promise().connect();

   try {
      const data = await func();

      return data;
   } catch (e) {
      console.log('REQUSET ERROR: ', e);
   }
};
