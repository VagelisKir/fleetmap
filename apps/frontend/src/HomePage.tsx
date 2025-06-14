import React from "react";
import Card from "./components/Card.tsx"
import { containerShips } from "./data.ts";
import MapComponent from "./components/MapComponent.tsx";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar.tsx"


const HomePage: React.FC = () => {
  return (
    <>
 <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <></>
      </main>
    </SidebarProvider>
     <div className="p-4">
      {/* <MapComponent /> */}
    </div>
    </>
  )
}
{/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
   {containerShips.map((ship) => (
     <Card key={ship.name} ship={ship} />
   ))}
 </div> */}

export default HomePage;