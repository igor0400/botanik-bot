import { connection } from './index.js';
import { reqMiddleware } from './req-middleware.js';

export const createBan = async ({ userId, reason }) => {
    return await reqMiddleware(async () => {
        const data = await connection
            .promise()
            .query(
                `INSERT INTO bans (user_id, reason) VALUES ('${userId}', \"${reason}\")`
            );

        return data;
    });
};

export const deleteBanByUserId = async (userId) => {
    return await reqMiddleware(async () => {
        const data = await connection
            .promise()
            .query(`DELETE FROM bans WHERE user_id = '${userId}'`);

        return data;
    });
};

export const getBanUserByUserId = async (userId) => {
    return await reqMiddleware(async () => {
        const data = await connection
            .promise()
            .query(`SELECT * FROM bans WHERE user_id = '${userId}'`);

        return data[0][0];
    });
};
