import { useEffect, useState } from "react";
import { fetchShips } from "@/api/shipsFetch";
import { fetchPorts } from "@/api/portsFetch";


export default function RenderShipsPorts() {
    const [ships, setShips] = useState([])
    const [ports, setPorts] = useState([])

useEffect(() => {
     async function getData() {
        try{
            const shipsData = await fetchShips()
            setShips(shipsData)
            
            const portsData = await fetchPorts()
            setPorts(portsData)
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
     }
     getData()
}, [])

return <div></div>

}