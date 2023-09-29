import { deleteRequestByUserId } from '../../database/index.js';
import { changeToMenu, getCtxUserData } from '../assets/index.js';

export const cancelRequestBtn = async (ctx) => {
   const user = getCtxUserData(ctx);
   const userId = user.id;
   const firstName = user.first_name;

   await deleteRequestByUserId(userId, firstName);
   await changeToMenu(ctx, firstName);
};
