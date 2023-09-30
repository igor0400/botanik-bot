import {
   deleteRequestByUserId,
   deleteTextWaiterByUserId,
} from '../../database/index.js';
import { getCtxData } from '../assets/index.js';
import { changeToMenu } from '../presets/index.js';

export const cancelRequestBtn = async (ctx) => {
   const { user } = getCtxData(ctx);
   const userId = user.id;
   const firstName = user.first_name;

   await deleteRequestByUserId(userId);
   await deleteTextWaiterByUserId(userId);
   await changeToMenu(ctx, firstName);
};
