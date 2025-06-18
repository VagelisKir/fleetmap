import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import { Ship } from "../../../server/src/types/Ship"
import { Port } from "../../../server/src/types/Port"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import sidebebarLogo from "../assets/sidebarlogo.png"
import portLogo from "../assets/portLogo.png"


const shipSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 24" fill="none" stroke="#f87171" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round">
  <path d="M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"/>
  <path d="M21 14 10 2 3 14h18Z"/>
  <path d="M10 2v16"/>
</svg>
`;

const portSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#f87171" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 22V8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/><circle cx="12" cy="5" r="3"/>
  </svg>
`;

const shipIcon = L.divIcon({
  html: `<div style="color: red;">${shipSvg}</div>`,
  iconSize: [40, 40],
  className: "",
});

const portIcon = L.divIcon({
  html: portSvg,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
  className: ""
})

interface ShipMapProps {
  data: Ship[] | Port[]
  type: "ship" | "port"
}

export default function ShipMap({ data, type }: ShipMapProps) {
  return (
    <div className="absolute top-7 left-0 right-0 bottom-0 z-0">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={true}
        minZoom={2}
        maxZoom={20}
        worldCopyJump={false}
        maxBounds={[
          [-85, -180],
          [85, 180]
        ]}
        maxBoundsViscosity={1.0}
        className="h-full w-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {data.map((item, index) => {
          const position = type === "ship"
            ? { lat: (item as Ship).latitude, lon: (item as Ship).longitude }
            : (item as Port).position;


          if (!position || typeof position.lat !== 'number' || typeof position.lon !== 'number') {
            return null;
          }

          return (
            <Marker key={index} position={[position.lat, position.lon]}
                    icon={type === "ship" ? shipIcon : portIcon}>
              <Popup>
                {type === "ship" ? (
                  <div className="flex flex-col items-center text-center">
                 <Avatar>
                    <AvatarImage src={sidebebarLogo} />
                    <AvatarFallback></AvatarFallback>
                  </Avatar>
                   <div className="flex flex-col place-items-center gap-1">
                    <strong>{(item as Ship).name}</strong><br />
                    <strong>Year of Built:</strong>{(item as Ship).year_built}
                    <strong>TEU:</strong> {(item as Ship).min_teu}
                    <strong>Last Ports:</strong>{(item as Ship).last_ports.join(', ')}
                  </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center ">
                      <Avatar>
                    <AvatarImage src={portLogo} />
                    <AvatarFallback></AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-center">
                    <strong>{(item as Port).name}</strong><br />
                    <strong>Country:</strong> {(item as Port).country}<br />
                    <strong>Berths:</strong> {(item as Port).berths}
                  </div>
                  </div>
                )}
              </Popup>
            </Marker>
          );
        })}
        <ZoomControl position="topright" /> 
      </MapContainer>
    </div>
  );
}