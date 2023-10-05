import { createUser, getUserById } from '../database/index.js';
import { bot } from '../../settings.js';
import { getCtxData, sendMenu } from '../common/index.js';

bot.start(async (ctx) => {
    const { user } = getCtxData(ctx);
    const userId = user.id;
    const userName = user.username;
    const firstName = user.first_name;
    const lastName = user?.last_name;
    const chatId = ctx.message.chat.id;

    const userData = await getUserById(userId);

    if (!userData) {
        createUser({ userId, userName, firstName, lastName, chatId });
    }

    await sendMenu(ctx, firstName);
});
