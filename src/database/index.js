import mysql from 'mysql2';
import 'dotenv/config';

export const dbConfig = {
   host: process.env.DATABASE_HOST ?? 'localhost',
   port: process.env.DATABASE_PORT ?? 3306,
   user: process.env.DATABASE_USER ?? 'MainUser',
   password:
      process.env.DATABASE_PASSWORD ??
      'dkfjsdofnsofnmno5j84584nknvkIDJFIDOFJODS&&&***&(hjhdfkldf',
   database: process.env.DATABASE_NAME ?? 'main_database',
};

export const connection = mysql.createConnection(dbConfig);

export * from './start.js';
export * from './users.js';
export * from './bans.js';
export * from './waiters.js';
export * from './mailings.js';
