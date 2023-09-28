import mysqldump from 'mysqldump';
import {
   backupsChannelId,
   bot,
   backupsIntervalTimeHourse,
} from './settings.js';
import { dbConfig } from './src/database/index.js';
import moment from 'moment';
import zipLocal from 'zip-local';

const intervalTime = 1000 * 60 * 60 * backupsIntervalTimeHourse;

export const startBackups = () => {
   console.log('Backups have been start');

   setInterval(async () => {
      try {
         const dirName = `${dbConfig.database}_${moment().format(
            'DD_MM_YYYY_hh-mm'
         )}`;
         const sqlFileName = `${dirName}.sql`;
         const zipFileName = `${dirName}.zip`;

         await mysqldump({
            connection: dbConfig,
            dumpToFile: `./${sqlFileName}`,
         });

         zipLocal.sync.zip(sqlFileName).compress().save(zipFileName);

         await bot.telegram.sendDocument(backupsChannelId, {
            source: zipFileName,
         });
      } catch (error) {
         console.error('Error during database backup:', error);
      }
   }, intervalTime);
};
