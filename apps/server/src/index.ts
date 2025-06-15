import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import { PrismaClient } from '@prisma/client';
dotenv.config();

const prisma = new PrismaClient()
const app: Express = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000;

app.get('/', (_: Request, res: Response) => {
  res.send('FleetMap');
});

app.get('/ships', async (_: Request, res: Response) => {
  const ships = await prisma.ship.findMany();
  res.json(ships);
});
app.listen(port, () => {
console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});