import React from "react";
import Card from "./components/Card.tsx"
import { containerShips } from "./data.ts";
import MapComponent from "./components/MapComponent.tsx";


const HomePage: React.FC = () => {
  return (
    <>
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {containerShips.map((ship) => (
        <Card key={ship.name} ship={ship} />
      ))}
    </div>
     <div className="p-4">
      <MapComponent />
    </div>
    </>
  )
}

export default HomePage;