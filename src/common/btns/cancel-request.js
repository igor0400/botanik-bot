import { deleteRequestByUserId } from '../../database/index.js';
import { getCtxUserData } from '../assets/index.js';
import { changeToMenu } from '../presets/index.js';

export const cancelRequestBtn = async (ctx) => {
   const user = getCtxUserData(ctx);
   const userId = user.id;
   const firstName = user.first_name;

   await deleteRequestByUserId(userId, firstName);
   await changeToMenu(ctx, firstName);
};
