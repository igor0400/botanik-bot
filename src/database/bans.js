import { customRequest } from './custom-request.js';

export const createBan = async ({ userId, reason }) => {
   const data = await customRequest(
      `INSERT INTO bans (user_id, reason) VALUES ('${userId}', \"${reason}\")`
   );

   return data;
};

export const deleteBanByUserId = async (userId) => {
   const data = await customRequest(
      `DELETE FROM bans WHERE user_id = '${userId}'`
   );

   return data;
};

export const getBanUserByUserId = async (userId) => {
   const data = await customRequest(
      `SELECT * FROM bans WHERE user_id = '${userId}'`
   );

   return data[0];
};
