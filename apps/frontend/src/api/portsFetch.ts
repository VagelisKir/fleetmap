export async function fetchPorts() {
    const response = await fetch("/ports")
    return response.json()
}

export async function fetchPortsByName(name: string) {
    const response = await fetch(`/ports/${name}`);
    const data = await response.json();
    return data;
}