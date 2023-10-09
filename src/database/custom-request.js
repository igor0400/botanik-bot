import { connection } from './index.js';

export const customRequest = async (reqStr) => {
   try {
      const [result] = await connection.query(reqStr);

      return result;
   } catch (e) {
      console.log('REQUSET ERROR: ', e);
   }
};
