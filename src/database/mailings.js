import { customRequest } from './custom-request.js';

export const createMailing = async ({ userId, text }) => {
   const data = await customRequest(
      `INSERT INTO mailings (user_id, text) VALUES ('${userId}', \"${text}\")`
   );

   return data;
};

export const getMailingByUserId = async (userId) => {
   const data = await customRequest(
      `SELECT * FROM mailings WHERE user_id = '${userId}'`
   );

   return data[0];
};

export const deleteMailingByUserId = async (userId) => {
   const data = await customRequest(
      `DELETE FROM mailings WHERE user_id = '${userId}'`
   );

   return data;
};
