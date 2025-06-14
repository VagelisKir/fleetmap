import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "./ui/input"
import { Badge } from "@/components/ui/badge"
import logo from "../assets/sidebarlogo.png"
import { containerShips } from "../data" 
import Card from "./Card"
import { useState } from "react"

export function AppSidebar() {
  const [searchType, setSearchType] = useState('')
  return (
    <Sidebar>
      <SidebarHeader />
      <Badge variant="default" className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="w-4 h-4" />
        <span>FleetMap</span>
      </Badge>
      <SidebarContent>
        <SidebarGroup>
          <RadioGroup defaultValue="teu"
            onValueChange={(value) => setSearchType(value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="teu" id="teu" />
              <Label htmlFor="teu">Search by TEU</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="port" id="port" />
              <Label className="py-2" htmlFor="port">Search by Port</Label>
            </div>
          </RadioGroup>
          <div className="py-2">{searchType === "teu" ? (
            <>   
             <Input placeholder="Min Teu" type="number" min={0}/>  
             <Input placeholder="Max Teu" type="number" min={0} max={24000}/>

            </>
          ) : <Input placeholder="Enter port name"/>}</div>
        </SidebarGroup>
        <SidebarGroup />
        <div className="flex flex-col gap-2 p-2">
          {containerShips.map((ship) => (
            <Card key={ship.name} ship={ship} />
          ))}
        </div>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}