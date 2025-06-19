import express, { Express } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { getShips, getShipsByTeu } from './controller/shipController'
import { getPorts, getPortByName } from './controller/portController'
dotenv.config()

const app: Express = express()

app.use(cors())
app.use(express.json())
app.use('/portImg', express.static('public/portImg'))
app.use('/dataImg', express.static('public/shipImg'))

const port = process.env.PORT || 3000

app.get('/ships', getShips)
app.get('/ships/search', getShipsByTeu)
app.get('/ports', getPorts)
app.get('/ports/:name', getPortByName)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
