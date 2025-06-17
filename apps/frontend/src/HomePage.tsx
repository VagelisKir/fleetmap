import React, { useState } from "react";
import MapComponent from "./components/MapComponent.tsx";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/appSidebar.tsx"
import { Ship } from "../../server/src/types/Ship";
import { Port } from "../../server/src/types/Port";

const HomePage: React.FC = () => {
  const [data, setData] = useState<Ship[] | Port[]>([])
  const [type, setType] = useState<'ship' | 'port'>('ship')

  const handleSearch = (filtered: Ship[] | Port[], selectedType: 'ship' | 'port') => {
    setData(filtered)
    setType(selectedType)
  }

  return (
   <SidebarProvider>
          <AppSidebar onSearch={handleSearch} />
          <div className="h-screen w-screen">
          <SidebarTrigger />
          <MapComponent data={data} type={type} />
        </div>
    </SidebarProvider>
  )
}

export default HomePage;