
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectToDB from './db/db.js';
import Home from './Routes/Home.js';
import UserRouter from './Routes/UserRouter.js';


connectToDB();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(express.urlencoded({ extended: true }));


app.use('/api', UserRouter);
app.use('/api', Home);

export default app;
