import ships from "../data/ships.json"
import { Ship } from "../types/Ship"
import { Request, Response } from "express"

const shipInfo: Ship[] = ships

export default function getShips(_req: Request, res: Response) {
    res.json(shipInfo)
}

