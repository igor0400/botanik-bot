import { connection } from './index.js';

export const createMailing = async ({ userId, text }) => {
   const data = await connection
      .promise()
      .query(
         `INSERT INTO mailings (user_id, text) VALUES ('${userId}', \"${text}\")`
      );

   return data;
};

export const getMailingByUserId = async (userId) => {
   const data = await connection
      .promise()
      .query(`SELECT * FROM mailings WHERE user_id = '${userId}'`);

   return data[0][0];
};

export const deleteMailingByUserId = async (userId) => {
   const data = await connection
      .promise()
      .query(`DELETE FROM mailings WHERE user_id = '${userId}'`);

   return data;
};
