import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '@/components/ui/sidebar'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Input } from './ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import logo from '../assets/sidebarlogo.png'
import { useState } from 'react'
import { fetchPortsByName } from '@/api/portsFetch'
import { fetchShipsByTeu } from '@/api/shipsFetch'
import ShipCard from './ShipCard'
import PortCard from './PortCard'
import type { Ship } from '../../../server/src/types/Ship'
import type { Port } from '../../../server/src/types/Port'

interface AppSidebarProps {
  onSearch: (results: Ship[] | Port[], type: 'ship' | 'port') => void
}

export function AppSidebar({ onSearch }: AppSidebarProps) {
  const [searchType, setSearchType] = useState('teu')
  const [minTeu, setMinTeu] = useState('')
  const [maxTeu, setMaxTeu] = useState('')
  const [portName, setPortName] = useState('')
  const [ships, setShips] = useState<Ship[]>([])
  const [ports, setPorts] = useState<Port[]>([])
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit() {
    setErrorMessage('')

    if (searchType === 'teu') {
      if (minTeu === '' || maxTeu === '') {
        setErrorMessage('Please enter both Min and Max TEU values.')
        return
      }

      const min = Number(minTeu)
      const max = Number(maxTeu)

      if (isNaN(min) || isNaN(max)) {
        setErrorMessage('TEU values must be valid numbers.')
        return
      }

      setIsLoading(true)
      try {
        const shipsData = await fetchShipsByTeu(min, max)
        setShips(shipsData)
        setPorts([])
        onSearch(shipsData, 'ship')
        setMinTeu('')
        setMaxTeu('')
      } catch (err) {
        console.error('Error fetching ships/data', err)
        setErrorMessage('Something went wrong while fetching ships.')
      } finally {
        setIsLoading(false)
      }
    } else if (searchType === 'port') {
      if (portName.trim() === '') {
        setErrorMessage('Please enter a port name.')
        return
      }

      setIsLoading(true)
      try {
        const portsData = await fetchPortsByName(portName)
        setPorts(portsData)
        setShips([])
        onSearch(portsData, 'port')
        setPortName('')
      } catch (err) {
        console.error('Error fetching ports/data', err)
        setErrorMessage('Something went wrong while fetching ports.')
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex justify-between px-4">
          <Badge variant="default" className="flex items-center justify-center space-x-2 w-full">
            <img src={logo} alt="Logo" className="w-4 h-4" />
            <span>FleetMap</span>
          </Badge>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <RadioGroup defaultValue="teu" onValueChange={value => setSearchType(value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="teu" id="teu" />
              <Label htmlFor="teu">Search by TEU</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="port" id="port" />
              <Label className="py-2" htmlFor="port">
                Search by Port
              </Label>
            </div>
          </RadioGroup>

          <div className="py-2">
            {searchType === 'teu' ? (
              <>
                <Input
                  placeholder="Min TEU"
                  id="minTeu"
                  type="number"
                  min={0}
                  value={minTeu}
                  onChange={e => {
                    setMinTeu(e.target.value)
                    setErrorMessage('')
                  }}
                />
                <Input
                  placeholder="Max TEU"
                  id="maxTeu"
                  type="number"
                  min={0}
                  max={24000}
                  value={maxTeu}
                  onChange={e => {
                    setMaxTeu(e.target.value)
                    setErrorMessage('')
                  }}
                />
              </>
            ) : (
              <Input
                placeholder="Enter port name"
                id="portName"
                value={portName}
                onChange={e => {
                  setPortName(e.target.value)
                  setErrorMessage('')
                }}
              />
            )}
            {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
          </div>

          <Button onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? 'Searching...' : 'Search'}
          </Button>
        </SidebarGroup>

        <SidebarGroup />

        <div className="flex flex-col gap-2 p-2">
          {searchType === 'teu' && Array.isArray(ships)
            ? ships.map(ship => <ShipCard key={ship.name} ship={ship} />)
            : Array.isArray(ports)
              ? ports.map(port => <PortCard key={port.name} port={port} />)
              : null}
        </div>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  )
}
