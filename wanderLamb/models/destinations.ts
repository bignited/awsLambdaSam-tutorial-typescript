import { HotelPrices } from './hotelPrices';

export interface DestinationResponse {
    country: string;
    languages: string[];
    currency: string;
    fun_fact: string;
    unique_activity: string;
    national_dish: string;
    hotel_prices: HotelPrices;
    mood_tags: string[];
}
