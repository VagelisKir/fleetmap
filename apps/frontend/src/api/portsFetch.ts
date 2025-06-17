export async function fetchPorts() {
    const response = await fetch("api/ports")
    return response.json()
}



export async function fetchPortsByName(name: string) {
    const response = await fetch(`/api/ports/${encodeURIComponent(name)}`)
    return response.json()
}