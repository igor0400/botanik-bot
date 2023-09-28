import { connection } from './index.js';

export const createBan = async ({ userId, reason }) => {
   const data = await connection
      .promise()
      .query(
         `INSERT INTO bans (user_id, reason) VALUES ('${userId}', \"${reason}\")`
      );

   return data;
};

export const deleteBanByUserId = async (userId) => {
   const data = await connection
      .promise()
      .query(`DELETE FROM bans WHERE user_id = '${userId}'`);

   return data;
};

export const getBanUserByUserId = async (userId) => {
   const data = await connection
      .promise()
      .query(`SELECT * FROM bans WHERE user_id = '${userId}'`);

   return data[0][0];
};
