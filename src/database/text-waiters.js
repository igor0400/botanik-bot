import { customRequest } from './custom-request.js';

export const createTextWaiter = async ({ type, userId, chatId, messageId }) => {
   await deleteTextWaiterByUserId(userId);

   const data = await customRequest(
      `INSERT INTO text_waiters (type, user_id, chat_id, message_id) VALUES ('${type}', '${userId}', '${chatId}', '${messageId}')`
   );

   return data;
};

export const deleteTextWaiterByUserId = async (userId) => {
   const data = await customRequest(
      `DELETE FROM text_waiters WHERE user_id = '${userId}'`
   );

   return data;
};

export const getTextWaiterByUserId = async (userId) => {
   const data = await customRequest(
      `SELECT * FROM text_waiters WHERE user_id = '${userId}'`
   );

   return data[0];
};
