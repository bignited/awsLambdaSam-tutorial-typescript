import { DestinationResponse } from '../models/destinations';

export const filterByMood = (destinations: DestinationResponse[], mood?: string): DestinationResponse[] => {
    if (!mood) return destinations;
    return destinations.filter((dest) => dest.mood_tags.some((tag) => tag.toLowerCase() === mood.toLowerCase()));
};
