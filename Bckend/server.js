import http from 'http';
import dotenv from 'dotenv';
import app from './App.js';
dotenv.config();

const server = http.createServer(app);

server.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});