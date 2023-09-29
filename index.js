import { bot, isBackups } from './settings.js';
import { connection, onPhoto, onText, start as startDb } from './src/index.js';
import { startBackups } from './backups.js';
import './src/index.js';
import './src/common/main.js';
import './src/sochineniye/main.js';

// сделать сочинения
//// сделать получение темы
//// сделать получение кол-ва слов (поменять импорты функции в кнопке кол-во слов)
//// сделать получение плана
//// сделать генерацию сочинения
// сделать обход AI детектера

// listeners
bot.on('photo', onPhoto);
bot.on('text', onText);

try {
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
} catch (e) {
   console.error('MAIN ERROR: ', e);
}
