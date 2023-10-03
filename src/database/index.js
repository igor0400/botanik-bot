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
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 50,
    idleTimeout: 60000,
    queueLimit: 10,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
};

export const connection = mysql.createPool(dbConfig);

export * from './start.js';
export * from './users.js';
export * from './bans.js';
export * from './text-waiters.js';
export * from './mailings.js';
export * from './requests.js';
