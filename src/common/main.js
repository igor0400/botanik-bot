import { bot } from '../../settings.js';
import {
   backBtn,
   cancelRequestBtn,
   sendBackBtn,
   wordsCountDsntMatterBtn,
} from './btns/index.js';
import { withoutPlanBtn } from './btns/without-plan.js';
import { btnMiddleware } from './middlewares/index.js';

bot.action('back', (ctx) => btnMiddleware(ctx, backBtn));
bot.action('send_back', (ctx) => btnMiddleware(ctx, sendBackBtn));
bot.action('cancel_request', (ctx) => btnMiddleware(ctx, cancelRequestBtn));
bot.action('words_count_dsnt_matter', (ctx) =>
   btnMiddleware(ctx, wordsCountDsntMatterBtn)
);
bot.action('without_plan', (ctx) => btnMiddleware(ctx, withoutPlanBtn));
