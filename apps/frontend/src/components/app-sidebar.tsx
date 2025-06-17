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
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import logo from "../assets/sidebarlogo.png"
import { useState } from "react"
import { fetchPortsByName } from "@/api/portsFetch"
import { fetchShipsByTeu } from "@/api/shipsFetch"
import ShipCard from "./ShipCard"
import PortCard from "./PortCard"
import type { Ship } from "../../../server/src/types/Ship"
import type { Port } from "../../../server/src/types/Port"



export function AppSidebar() {
  const [searchType, setSearchType] = useState('teu')
  const [minTeu, setMinTeu] = useState('')
  const [maxTeu, setMaxTeu] = useState('')
  const [portName, setPortName] = useState('')
  const [ships, setShips] = useState<Ship[]>([])
  const [ports, setPorts] =useState<Port[]>([])


async function handleSubmit() {
  if (searchType === 'teu') {
    if (minTeu === '' || maxTeu === '') {
      console.log('Missing inputs!')
      return
    }
    const min = Number(minTeu);
    const max = Number(maxTeu);
    const shipsData = await fetchShipsByTeu(min, max);
    console.log(shipsData)
    setShips(shipsData);
    setPorts([]); 
  } else if (searchType === 'port') {
    if (portName === '') {
      console.log("Please enter a port name!")
      setPorts([]);
      setShips([]);
      return
    }
    const portData = await fetchPortsByName(portName);
    setPorts(portData);
    setShips([]); 
  }
}

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
             <Input placeholder="Min Teu" 
             type="number" 
             min={0} 
             value={minTeu}
             onChange={e => setMinTeu(e.target.value)}/>  
             <Input placeholder="Max Teu" 
             type="number" 
             min={0} 
             max={24000}
             onChange={e => setMaxTeu(e.target.value)}/>
            </>
          ) : <Input placeholder="Enter port name"
                     value={portName}
                     onChange={e => setPortName(e.target.value)}/>}
            </div>
            <Button onClick={handleSubmit}>Search</Button>       
        </SidebarGroup>
        <SidebarGroup />
        <div className="flex flex-col gap-2 p-2">
         {searchType === 'teu' ? ships.map(ship => <ShipCard key={ship.name} ship={ship} />)
         : ports.map(port => <PortCard key={port.name} port={port} />)}
        </div>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
