import { connection } from './index.js';

export const createRequest = async ({ type, userId, chatId, messageId }) => {
   await deleteRequestByUserId(userId);

   const data = await connection
      .promise()
      .query(
         `INSERT INTO requests (type, user_id, chat_id, message_id) VALUES ('${type}', '${userId}', '${chatId}', '${messageId}')`
      );

   return data;
};

export const deleteRequestByUserId = async (userId, type) => {
   const addType = type ? ` AND type = '${type}'` : '';

   const data = await connection
      .promise()
      .query(`DELETE FROM requests WHERE user_id = '${userId}'` + addType);

   return data;
};

export const getRequestByUserId = async (userId) => {
   const data = await connection
      .promise()
      .query(`SELECT * FROM requests WHERE user_id = '${userId}'`);

   return data[0][0];
};

export const addRequestTopicByUserId = async (userId, topic) => {
   const data = await connection
      .promise()
      .query(`UPDATE requests SET topic = "${topic}" WHERE user_id = '${userId}'`);

   return data;
};

export const addRequestWordsCountByUserId = async (userId, wordsCount) => {
   const data = await connection
      .promise()
      .query(
         `UPDATE requests SET words_count = "${wordsCount}" WHERE user_id = '${userId}'`
      );

   return data;
};
