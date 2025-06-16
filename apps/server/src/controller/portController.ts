import { Request, Response } from "express";
import { findPortByName, getAllPorts } from "../model/portModel";

//Get All
export async function getPorts(_req: Request, res: Response)  {
    try {
        const ports = await getAllPorts()
       return res.status(200).json(ports)
        
    }
    catch(err) {
     return res.status(500).json({error: "Server error"})
     
    }
}

// Get by name
export async function getPortByName(req: Request, res: Response) {
    const name = req.params.name
    if(!name) {
     return res.status(400).json({error: "Port name is required"})
     
    }
    try {
        const port = await findPortByName(name)
        if(!port) {
         return res.status(404).json({error: "Port not found!"})
         
        }
        res.status(200).json(port)
    }
    catch (err) {
     return res.status(500).json({error: "Server error"})
    }
}