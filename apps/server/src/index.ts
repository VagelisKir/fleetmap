import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import getShips from './controller/shipController';
dotenv.config();

const app: Express = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000;

app.get('/ships', getShips)

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});