import prisma from "../prisma";


export async function getAllPorts() {
    return await prisma.port.findMany()
}

export async function findPortByName(name: string) {
    return await prisma.port.findMany({
        where: {
            name: {
                contains: name,
                mode: "insensitive"
            }
        }
    })
}