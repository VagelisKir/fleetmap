import type { ContainerShip } from '../data'

interface Props {
  ship: ContainerShip
}

export default function ShipCard({ ship }: Props) {
  return (
    <div className="w-full max-w-xs bg-white rounded-lg shadow-sm text-sm">
      <figure className="h-32 overflow-hidden">
        <img
          src={ship.photo.url}
          alt={ship.name}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="p-4">
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

        <p><strong>TEU:</strong> {ship.teu}</p>
        <p><strong>LOA:</strong> {ship.loa}m</p>
        <p><strong>Ports:</strong> {ship.lastPorts.slice(0, 3).join(', ')}</p>

        <div className="flex justify-end" />
      </div>
    </div>
  )
}

