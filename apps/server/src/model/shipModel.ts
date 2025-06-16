import prisma from "../prisma"


export async function getAllShips() {
    return await prisma.ship.findMany()
}


export async function findShipByTeu(minTeu: number, maxTeu: number) {
    return await prisma.ship.findMany({
        where: {
            min_teu: {
                gte: minTeu,
                lte: maxTeu,
            }
        }
    })
}