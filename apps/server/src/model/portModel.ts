import ports from '../data/ports.json';

export async function getAllPorts() {
    return ports;
}

export async function findPortByName(name: string) {
    return ports.filter(port =>
        port.name.toLowerCase().includes(name.toLowerCase())
    );
}