import dotenv from 'dotenv';
import Server from './src/server';

dotenv.config();

export const server = new Server();

server.listen();
