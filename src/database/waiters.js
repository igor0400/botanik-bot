import { connection } from './index.js';

export const createWaiter = async ({ type, userId, chatId, messageId }) => {
   const data = await connection
      .promise()
      .query(
         `INSERT INTO waiters (type, user_id, chat_id, message_id) VALUES ('${type}', '${userId}', '${chatId}', '${messageId}')`
      );

   return data;
};

export const deleteWaiterByUserId = async (userId) => {
   const data = await connection
      .promise()
      .query(`DELETE FROM waiters WHERE user_id = '${userId}'`);

   return data;
};

export const getWaiterByUserId = async (userId) => {
   const data = await connection
      .promise()
      .query(`SELECT * FROM waiters WHERE user_id = '${userId}'`);

   return data[0][0];
};
