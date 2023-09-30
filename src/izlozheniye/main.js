import { bot } from '../../settings.js';
import { btnMiddleware } from '../common/index.js';
import { izlozheniyeBtn } from './btns.js';

bot.action('izlozheniye', (ctx) => btnMiddleware(ctx, izlozheniyeBtn));
