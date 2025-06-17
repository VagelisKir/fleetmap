import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import { Ship } from "../../../server/src/types/Ship"
import { Port } from "../../../server/src/types/Port"


const iconUrl = "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png";
const iconRetinaUrl = "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const shadowUrl = "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png";

const defaultIcon = new L.Icon({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = defaultIcon;

interface ShipMapProps {
  data: Ship[] | Port[]
  type: "ship" | "port"
}

export default function ShipMap({ data, type }: ShipMapProps) {
  return (
    <div className="w-full h-full">
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
            <Marker key={index} position={[position.lat, position.lon]}>
              <Popup>
                {type === "ship" ? (
                  <>
                    <strong>{(item as Ship).name}</strong><br />
                    TEU: {(item as Ship).min_teu}
                  </>
                ) : (
                  <>
                    <strong>{(item as Port).name}</strong><br />
                    Country: {(item as Port).country}
                  </>
                )}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}