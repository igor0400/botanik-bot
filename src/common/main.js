import { bot } from '../../settings.js';
import {
   backBtn,
   cancelRequestBtn,
   wordsCountDsntMatterBtn,
} from './btns/index.js';
import { btnMiddleware } from './middlewares/index.js';

bot.action('back', (ctx) => btnMiddleware(ctx, backBtn));
bot.action('cancel_request', (ctx) => btnMiddleware(ctx, cancelRequestBtn));
bot.action('words_count_dsnt_matter', (ctx) =>
   btnMiddleware(ctx, wordsCountDsntMatterBtn)
);
