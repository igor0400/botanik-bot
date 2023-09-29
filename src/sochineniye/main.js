import { bot } from '../../settings.js';
import { btnMiddleware } from '../common/index.js';
import { sochineniyeBtn } from './btns.js';

bot.action('sochineniye', (ctx) => btnMiddleware(ctx, sochineniyeBtn));
