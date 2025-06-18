import type { Ship } from '../../../server/src/types/Ship'
import { Sailboat } from "lucide-react"

interface ShipCardProps {
  ship: Ship
}

export default function ShipCard({ ship }: ShipCardProps) {

  return (
    <div className="w-full bg-white rounded-lg shadow-sm text-sm p-4 items-start">
      <figure className="h-32 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={ship.photo_url}
          alt={ship.name}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="flex-1">
        <h2 className="text-base font-semibold mb-2 flex items-center gap-2">
          {ship.name}
          <Sailboat size={17} className='text-red-400' strokeWidth={2.25} />       
          </h2>

        <p><strong>TEU:</strong> {ship.min_teu}</p>
        <p><strong>LOA:</strong> {ship.loa_m}</p>
        <p><strong>Shipyard:</strong> {ship.shipyard}</p>
        <p><strong>Year of Built:</strong> {ship.year_built}</p>
        <p><strong>Ports:</strong> {ship.last_ports.slice(0, 3).join(', ')}</p>
        <div className="flex justify-end" />
      </div>
    </div>
  )
}

