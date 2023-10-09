import { customRequest } from './custom-request.js';

export const createRequest = async ({ type, userId, chatId, messageId }) => {
   await deleteRequestByUserId(userId);

   const data = await customRequest(
      `INSERT INTO requests (type, user_id, chat_id, message_id) VALUES ('${type}', '${userId}', '${chatId}', '${messageId}')`
   );

   return data;
};

export const deleteRequestByUserId = async (userId, type) => {
   const addType = type ? ` AND type = '${type}'` : '';

   const data = await customRequest(
      `DELETE FROM requests WHERE user_id = '${userId}'` + addType
   );

   return data;
};

export const getRequestByUserId = async (userId, type) => {
   const addType = type ? ` AND type = '${type}'` : '';

   const data = await customRequest(
      `SELECT * FROM requests WHERE user_id = '${userId}'` + addType
   );

   return data[0];
};

export const addRequestTopicByUserId = async (userId, topic) => {
   const data = await customRequest(
      `UPDATE requests SET topic = "${topic}" WHERE user_id = '${userId}'`
   );

   return data;
};

export const addRequestWordsCountByUserId = async (userId, wordsCount) => {
   const data = await customRequest(
      `UPDATE requests SET words_count = "${wordsCount}" WHERE user_id = '${userId}'`
   );

   return data;
};

export const addRequestPlanByUserId = async (userId, plan) => {
   const data = await customRequest(
      `UPDATE requests SET plan = "${plan}" WHERE user_id = '${userId}'`
   );

   return data;
};

export const changeRequestStatusByUserId = async (userId, status) => {
   const data = await customRequest(
      `UPDATE requests SET status = "${status}" WHERE user_id = '${userId}'`
   );

   return data;
};
