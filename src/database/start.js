import { ranks } from '../../settings.js';
import { connection } from './index.js';

export const start = () => {
   connection.query(`USE main_database`);

   connection.query(`CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(250) PRIMARY KEY,
    first_name VARCHAR(250),
    last_name VARCHAR(250),
    user_name VARCHAR(250),
    balance INT DEFAULT 0,
    user_rank VARCHAR(250) DEFAULT '${ranks[0].title ?? 'ШКОЛЯР'}',
    chat_id VARCHAR(250),
    is_admin BOOLEAN DEFAULT 0
)`);

   connection.query(`CREATE TABLE IF NOT EXISTS bans (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id VARCHAR(250),
    reason VARCHAR(250)
)`);

   connection.query(`CREATE TABLE IF NOT EXISTS text_waiters (
    id INT PRIMARY KEY AUTO_INCREMENT,
    type VARCHAR(250),
    user_id VARCHAR(250),
    message_id VARCHAR(250),
    chat_id VARCHAR(250)
)`);

   connection.query(`CREATE TABLE IF NOT EXISTS requests (
    id INT PRIMARY KEY AUTO_INCREMENT,
    type VARCHAR(250),
    words_count VARCHAR(250),
    language VARCHAR(250),
    user_id VARCHAR(250),
    message_id VARCHAR(250),
    chat_id VARCHAR(250)
)`);

   connection.query(`CREATE TABLE IF NOT EXISTS mailings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id VARCHAR(250),
    text TEXT
)`);
};
