import type { Port } from '../../../server/src/types/Port'


interface PortCardProps {
    port: Port
}


export default function PortCard({port}: PortCardProps) {
    return (
  <div className="w-full bg-white rounded-lg shadow-sm text-sm p-4 items-start">
      <figure className="h-32 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={port.photo_url}
          alt={port.name}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="flex-1">
        <h2 className="text-base font-semibold mb-2 flex items-center gap-2">
          {port.name}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-4 h-4 text-red-600"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
          </svg>
        </h2>
<div>
        <h2 className="text-base font-semibold mb-2">{port.name}</h2>
        <p><strong>Country:</strong> {port.country}</p>
        <p><strong>Position:</strong> Lat {port.position.lat}, Lon {port.position.lon}</p>
        <p><strong>Max Draught:</strong> {port.max_draught_m} m</p>
        <p><strong>Max Length:</strong> {port.max_length_m} m</p>
        <p><strong>Berths:</strong> {port.berths}</p>

        <h3 className="mt-4 font-semibold">Last Visited Ships</h3>
        <ul className="list-disc list-inside max-h-40 overflow-auto text-xs">
          {port.last_visited_ships.map(port => (
            <li key={port.imo}>
              {port.name} — TEU: {port.teu}, LOA: {port.loa_m}m, Visited: {new Date(port.visited_at).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
    )
}