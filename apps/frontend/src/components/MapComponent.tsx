import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import { containerShips } from "../data";

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

export default function ShipMap() {
  return (
    <div className="w-full h-full"> 
      <MapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={true}
        minZoom={2}
        maxZoom={5}
        worldCopyJump={false}
        maxBounds={[
          [-85, -180],
          [85, 180]
        ]}
        maxBoundsViscosity={1.0}
        className="h-full w-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {containerShips.map((ship, index) => (
          <Marker
            key={index}
            position={[ship.latitude, ship.longitude] as [number, number]}
          >
            <Popup>
              <strong>{ship.name}</strong><br />
              TEU: {ship.teu}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}