import { connection } from './index.js';
import { reqMiddleware } from './req-middleware.js';

export const createTextWaiter = async ({ type, userId, chatId, messageId }) => {
    await deleteTextWaiterByUserId(userId);

    return await reqMiddleware(async () => {
        const data = await connection
            .promise()
            .query(
                `INSERT INTO text_waiters (type, user_id, chat_id, message_id) VALUES ('${type}', '${userId}', '${chatId}', '${messageId}')`
            );

        return data;
    });
};

export const deleteTextWaiterByUserId = async (userId) => {
    return await reqMiddleware(async () => {
        const data = await connection
            .promise()
            .query(`DELETE FROM text_waiters WHERE user_id = '${userId}'`);

        return data;
    });
};

export const getTextWaiterByUserId = async (userId) => {
    return await reqMiddleware(async () => {
        const data = await connection
            .promise()
            .query(`SELECT * FROM text_waiters WHERE user_id = '${userId}'`);

        return data[0][0];
    });
};
