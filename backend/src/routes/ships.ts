import express, { RequestHandler } from 'express';
import { Ship, ShipInput } from '../types/ship';
import { ships } from '../data/ships';

const router = express.Router();

// Get all ships
export const getAllShips: RequestHandler = async (_req, res) => {
    res.json(ships);
};

// Get ship by id
export const getShipById: RequestHandler = async (req, res) => {
    const ship = ships.find(s => s.id === req.params.id);
    if (!ship) {
        res.status(404).json({ message: 'Ship not found' });
        return;
    }
    res.json(ship);
};

// Create new ship
export const createShip: RequestHandler = async (req, res) => {
    const newShip: Ship = {
        id: Date.now().toString(),
        ...req.body,
        gear_info: req.body.gear_info || {}
    };
    ships.push(newShip);
    res.status(201).json(newShip);
};

// Update ship
export const updateShip: RequestHandler = async (req, res) => {
    const index = ships.findIndex(s => s.id === req.params.id);
    if (index === -1) {
        res.status(404).json({ message: 'Ship not found' });
        return;
    }
    ships[index] = { ...ships[index], ...req.body };
    res.json(ships[index]);
};

// Delete ship
export const deleteShip: RequestHandler = async (req, res) => {
    const index = ships.findIndex(s => s.id === req.params.id);
    if (index === -1) {
        res.status(404).json({ message: 'Ship not found' });
        return;
    }
    ships.splice(index, 1);
    res.status(204).send();
};

router.get('/', getAllShips);
router.get('/:id', getShipById);
router.post('/', createShip);
router.put('/:id', updateShip);
router.delete('/:id', deleteShip);

export default router; 