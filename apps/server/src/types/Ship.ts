export interface Ship {
    name: string
    min_teu: number
    year_built: number
    shipyard: string
    last_ports: string[]
    photo_url: string
    draft_m: number
    geared: boolean
    gear_info: string | null
    current_position: {
        timestamp: string
        lat: number
        lon: number
    }
    loa_m:number
}