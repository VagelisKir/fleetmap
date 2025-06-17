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
    latitude: number
    longitude: number
    timestamp: string
    loa_m: number
}