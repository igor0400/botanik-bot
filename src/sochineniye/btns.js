import { sendSochineniyeTopic } from './presets.js';

export const sochineniyeBtn = async (ctx) => {
   await sendSochineniyeTopic(ctx);
};
