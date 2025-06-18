import type { Port } from '../../../server/src/types/Port'
import {Anchor} from "lucide-react"
interface PortCardProps {
  port: Port
}


export default function PortCard({ port }: PortCardProps) {
 const imageUrl = port.photo_url.endsWith('.png') ? port.photo_url : `${port.photo_url}.png`;

  return (
    <div className="w-full bg-white rounded-lg shadow-sm text-sm p-4 items-start">
      <figure className="h-32 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={imageUrl}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="flex-1">
        <h2 className="text-base font-semibold mb-2 flex items-center gap-2">
          {port.name}
          <Anchor size={18} className='text-red-400' strokeWidth={2.25} />        </h2>
        <div>
          <p><strong>Country:</strong> {port.country}</p>
          <p><strong>Berths:</strong>{port.berths}</p>
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