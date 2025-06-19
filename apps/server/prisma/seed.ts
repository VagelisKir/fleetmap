import prisma from '../src/prisma'
import ports from '../src/data/ports.json'
import ships from '../src/data/ships.json'

async function main() {
  for (const port of ports) {
    await prisma.port.create({
      data: {
        name: port.name,
        country: port.country,
        max_draught_m: port.max_draught_m,
        max_length_m: port.max_length_m,
        berths: port.berths,
        photo_url: port.photo_url,
        position_lat: port.position.lat,
        position_lon: port.position.lon,
        lastVisitedShips: port.last_visited_ships,
      },
    })
  }
  for (const ship of ships) {
    await prisma.ship.create({
      data: {
        name: ship.name,
        min_teu: ship.min_teu,
        loa_m: ship.loa_m,
        draft_m: ship.draft_m,
        geared: ship.geared,
        gear_info: ship.gear_info ?? null,
        year_built: ship.year_built ?? null,
        shipyard: ship.shipyard ?? null,
        last_ports: ship.last_ports || [],
        photo_url: ship.photo_url,
        latitude: ship.current_position.lat,
        longitude: ship.current_position.lon,
        timestamp: new Date(ship.current_position.timestamp),
      },
    })
  }
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
