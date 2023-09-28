import { connection } from './index.js';

export const createRequest = async ({ type, userId, chatId, messageId }) => {
   await deleteRequestByUserId(userId);

   const data = await connection
      .promise()
      .query(
         `INSERT INTO text_waiters (type, user_id, chat_id, message_id) VALUES ('${type}', '${userId}', '${chatId}', '${messageId}')`
      );

   return data;
};

export const deleteRequestByUserId = async (userId) => {
   const data = await connection
      .promise()
      .query(`DELETE FROM text_waiters WHERE user_id = '${userId}'`);

   return data;
};

export const getRequestByUserId = async (userId) => {
   const data = await connection
      .promise()
      .query(`SELECT * FROM text_waiters WHERE user_id = '${userId}'`);

   return data[0][0];
};
