export async function fetchShips() {
  const response = await fetch('/ships')
  return response.json()
}

export async function fetchShipsByTeu(minTeu: number, maxTeu: number) {
  const response = await fetch(`/ships/search?minTeu=${minTeu}&maxTeu=${maxTeu}`)
  return response.json()
}
