import { gpt4 } from '../../../settings.js';
import gptMessages from '../responses/gpt-messages.js';

export const isValidText = async (text, lang = 'rus') => {
   const res = await gpt4.sendMessage(
      gptMessages.checkValidTextMessage(text, lang)
   );

   if (res?.text?.toLowerCase() === 'yes') {
      return true;
   } else {
      return false;
   }
};
