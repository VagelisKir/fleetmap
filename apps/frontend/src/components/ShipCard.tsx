import type { Ship } from '../../../server/src/types/Ship'

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-4 h-4 text-red-600"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
          </svg>
        </h2>

        <p><strong>TEU:</strong> {ship.min_teu}</p>
        <p><strong>LOA:</strong> {ship.loa_m}</p>
        <p><strong>Shipyard:</strong> {ship.shipyard}</p>
        <p><strong>Ports:</strong> {ship.last_ports.slice(0, 3).join(', ')}</p>

        <div className="flex justify-end" />
      </div>
    </div>
  )
}

