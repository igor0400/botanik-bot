import { recogniteSolutionByPhoto } from '../../recognite-solution/index.js';

export const onPhoto = async (ctx) => {
   await recogniteSolutionByPhoto(ctx);
};
