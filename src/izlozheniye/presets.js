import {
   sendParent,
   sendPlan,
   sendTopic,
   sendWordsCount,
} from '../common/index.js';

export const sendIzlozheniyeTopic = async (ctx) => {
   const data = await sendParent({
      ctx,
      type: 'izlozheniye',
      func: sendTopic,
      kind: 'изложения',
      isInit: true,
   });
   return data;
};

export const sendIzlozheniyeWordsCount = async (ctx) => {
   const data = await sendParent({
      ctx,
      type: 'izlozheniye',
      func: sendWordsCount,
      kind: 'изложения',
   });
   return data;
};

export const sendIzlozheniyePlan = async (ctx) => {
   const data = await sendParent({
      ctx,
      type: 'izlozheniye',
      func: sendPlan,
      kind: 'изложения',
   });
   return data;
};
