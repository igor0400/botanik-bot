import { recogniteSolutionByText } from '../../recognite-solution/index.js';

export const onText = async (ctx) => {
   await recogniteSolutionByText(ctx);
};
