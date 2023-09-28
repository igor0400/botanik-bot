import { bot, isBackups } from './settings.js';
import {
   backBtn,
   btnMiddleware,
   connection,
   onPhoto,
   onText,
   start as startDb,
} from './src/index.js';
import { startBackups } from './backups.js';
import './src/index.js';

// сделать прогон через анти ии

// btns
bot.action('back', (ctx) => btnMiddleware(ctx, backBtn));

// listeners
bot.on('photo', onPhoto);
bot.on('text', onText);

// db
connection.connect();
startDb();

bot.launch().catch((error) => {
   console.error('Error when launching the bot:', error);
});

console.log('Bot started!!!');

if (isBackups) {
   startBackups();
}
