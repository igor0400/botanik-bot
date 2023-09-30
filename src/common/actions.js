import {
   sendIzlozheniyePlan,
   sendIzlozheniyeWordsCount,
} from '../izlozheniye/index.js';
import {
   sendSochineniyePlan,
   sendSochineniyeWordsCount,
} from '../sochineniye/index.js';
import { generateSochineniye } from '../sochineniye/index.js';
import { generateIzlozheniye } from '../izlozheniye/index.js';

export const topicActions = (ctx) => ({
   sochineniye: async () => await sendSochineniyeWordsCount(ctx),
   izlozheniye: async () => await sendIzlozheniyeWordsCount(ctx),
});

export const wordsCountActions = (ctx) => ({
   sochineniye: async () => await sendSochineniyePlan(ctx),
   izlozheniye: async () => await sendIzlozheniyePlan(ctx),
});

export const planActions = (ctx) => ({
   sochineniye: async () => await generateSochineniye(ctx),
   izlozheniye: async () => await generateIzlozheniye(ctx),
});
