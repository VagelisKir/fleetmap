import React from "react";
import MapComponent from "./components/MapComponent.tsx";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar.tsx"


const HomePage: React.FC = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <AppSidebar />

        <div className="flex-1 w-screen h-screen">
          <SidebarTrigger />
          <MapComponent />
        </div>
      </div>
    </SidebarProvider>
  )}

export default HomePage;