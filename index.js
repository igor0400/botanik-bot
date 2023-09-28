import { bot, isBackups } from './settings.js';
import {
   connection,
   recogniteSolutionByPhoto,
   recogniteSolutionByText,
   start as startDb,
} from './src/index.js';
import { startBackups } from './backups.js';
import './src/index.js';

bot.on('photo', recogniteSolutionByPhoto);
bot.on('text', recogniteSolutionByText);

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
