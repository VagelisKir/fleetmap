import { findShipByTeu, getAllShips } from "../model/shipModel"
import { Request, Response } from "express"

// get all ships

export async function getShips(_req: Request, res: Response): Promise<void> {
    try {
        const ships = await getAllShips()
        res.status(200).json(ships)
    }
    catch (err) {
        res.status(500).json({error: "failed to fetch ships"})
    }
}

// get ships by teu

export async function getShipsByTeu(req: Request, res: Response): Promise<void> {
    const minTeu = Number(req.query.minTeu)
    const maxTeu = Number(req.query.maxTeu)

    if(isNaN(minTeu) || isNaN(maxTeu)) {
     res.status(400).json({error: "Both fields must be numbers"})
    return
    }
    try {
        const results = await findShipByTeu(minTeu, maxTeu) 
         res.status(200).json(results)
}   catch (err) {
     res.status(500).json({error: "Server error"})
    }
}