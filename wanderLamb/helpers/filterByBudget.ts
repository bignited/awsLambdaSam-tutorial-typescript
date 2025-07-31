import { DestinationResponse } from '../models/destinations';

export const filterByBudget = (destinations: DestinationResponse[], maxBudget?: number): DestinationResponse[] => {
    if (!maxBudget) return destinations;
    return destinations.filter((dest) => dest.hotel_prices.budget <= maxBudget);
};
