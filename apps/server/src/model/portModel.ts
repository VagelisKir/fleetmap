import prisma from "../prisma";
import { Port } from "../types/Port";

export async function getAllPorts(): Promise<Port[]> {
    const ports = await prisma.port.findMany();
    return ports.map(port => ({
        ...port,
        position: {
            lat: port.position_lat,
            lon: port.position_lon
        },
        last_visited_ships: port.lastVisitedShips as Port['last_visited_ships']
    }));
}

export async function findPortByName(name: string): Promise<Port[]> {
    const port = await prisma.port.findFirst({
        where: {
            name: {
                contains: name,
                mode: "insensitive"
            }
        }
    });
    
    if (!port) return [];
    
    return [{
        ...port,
        position: {
            lat: port.position_lat,
            lon: port.position_lon
        },
        last_visited_ships: port.lastVisitedShips as Port['last_visited_ships']
    }];
}
