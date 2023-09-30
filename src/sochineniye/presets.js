import {
   sendParent,
   sendPlan,
   sendTopic,
   sendWordsCount,
} from '../common/index.js';

export const sendSochineniyeTopic = async (ctx) => {
   const data = await sendParent({
      ctx,
      type: 'sochineniye',
      func: sendTopic,
      kind: 'сочинения',
      isInit: true,
   });
   return data;
};

export const sendSochineniyeWordsCount = async (ctx) => {
   const data = await sendParent({
      ctx,
      type: 'sochineniye',
      func: sendWordsCount,
      kind: 'сочинения',
   });
   return data;
};

export const sendSochineniyePlan = async (ctx) => {
   const data = await sendParent({
      ctx,
      type: 'sochineniye',
      func: sendPlan,
      kind: 'сочинения',
   });
   return data;
};
