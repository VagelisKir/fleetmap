import { Request, Response } from 'express'
import { findPortByName, getAllPorts } from '../model/portModel'

//Get All ports
export async function getPorts(_req: Request, res: Response): Promise<void> {
  try {
    const ports = await getAllPorts()
    res.status(200).json(ports)
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
}

// Get by ports name

export async function getPortByName(req: Request, res: Response): Promise<void> {
  const name = req.params.name
  if (!name) {
    res.status(400).json({ error: 'Port name is required' })
    return
  }
  try {
    const port = await findPortByName(name)
    if (!port) {
      res.status(404).json({ error: 'Port not found!' })
      return
    }
    res.status(200).json(port)
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
}
 