import { bot } from '../../settings.js';
import { btnMiddleware } from '../common/index.js';
import { sochineniyeBtn } from './btn.js';

bot.action('sochineniye', (ctx) => btnMiddleware(ctx, sochineniyeBtn));
