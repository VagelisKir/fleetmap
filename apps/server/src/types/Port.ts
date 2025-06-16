export interface Port {
    name: string
    country: string
    position: {
        lat: number
        lon: number
    }
    max_draught_m: number
    max_length_m: number
    berths: number
    last_visited_ships: {
        name: string
        imo: number
        visited_at: string
        teu: number
        loa_m: number
    }[]
    photo_url: string
}