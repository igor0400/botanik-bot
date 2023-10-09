import { customRequest } from './custom-request.js';

export const getAllUsers = async () => {
   const data = await customRequest(`SELECT * from users`);

   return data;
};

export const getUserById = async (userId) => {
   const data = await customRequest(
      `SELECT * from users WHERE id = '${userId}'`
   );

   return data[0];
};

export const getUserByUserName = async (userName) => {
   const data = await customRequest(
      `SELECT * from users WHERE user_name = '${userName}'`
   );

   return data[0];
};

export const createUser = async ({
   userId,
   userName,
   firstName,
   lastName = '',
   chatId,
}) => {
   const data = await customRequest(
      `INSERT INTO users (id, user_name, first_name, last_name, chat_id) VALUES ('${userId}', "${userName}", \'${firstName}\', \'${lastName}\', '${chatId}')`
   );

   return data;
};

export const getUsersCount = async () => {
   const data = await customRequest(`SELECT COUNT(*) FROM users`);

   return data[0]['COUNT(*)'];
};

export const transferUserById = async ({
   userId,
   friendUsername,
   friendId,
   amount,
}) => {
   const data = await customRequest(
      `UPDATE users SET balance = balance - ${amount} WHERE id = '${userId}'`
   );

   if (friendUsername) {
      await customRequest(
         `UPDATE users SET balance = balance + ${amount} WHERE user_name = '${friendUsername}'`
      );
      return data;
   }

   if (friendId) {
      await customRequest(
         `UPDATE users SET balance = balance + ${amount} WHERE id = '${friendId}'`
      );
   }

   return data;
};

export const changeUserNameById = async (userId, userName) => {
   const data = await customRequest(
      `UPDATE users SET user_name = \"${userName}\" WHERE id = '${userId}'`
   );

   return data;
};

export const incUserBalanceById = async (userId, sum) => {
   const data = await customRequest(
      `UPDATE users SET balance = balance + ${sum} WHERE id = '${userId}'`
   );

   return data;
};

export const decUserBalanceById = async (userId, sum) => {
   const data = await customRequest(
      `UPDATE users SET balance = balance - ${sum} WHERE id = '${userId}'`
   );

   return data;
};

export const changeUserRankById = async (userId, rank) => {
   const data = await customRequest(
      `UPDATE users SET user_rank = \"${rank}\" WHERE id = '${userId}'`
   );

   return data;
};
