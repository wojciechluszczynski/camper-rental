// src/lib/types.ts
export interface CamperSpecs {
  seats: number
  sleeping_spots: number
  length_m: number
  year: number
  transmission?: string
  kitchen: boolean
  bathroom: boolean
  engine?: string
  water_tank_l?: number
  grey_water_l?: number
  solar_w?: number
  fridge_l?: number
}

export interface Camper {
  id: string
  slug: string
  name: string
  description: string
  price_per_day: number
  images: string[]
  specs: CamperSpecs
  active: boolean
  created_at: string
}

export interface Booking {
  id: string
  camper_id: string
  user_email: string
  user_name: string
  user_phone: string
  date_from: string
  date_to: string
  total_price: number
  status: 'pending' | 'paid' | 'cancelled'
  stripe_payment_id?: string
  created_at: string
}

export interface BookingWithCamper extends Booking {
  campers: Pick<Camper, 'id' | 'name' | 'slug' | 'price_per_day'>
}
