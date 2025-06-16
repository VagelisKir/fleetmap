import { Request, Response } from "express";
import ports from "../data/ports.json"
import { Port } from "../types/Port";

const portInfo: Port[] = ports

export default function getPorts(_req: Request, res: Response) {
    res.json(portInfo)
}