import { DestinationResponse } from '../models/destinations';

export const buildDestinationResponse = (destination: DestinationResponse) => {
    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(destination),
    };
};

export const buildErrorResponse = (statusCode: number, message: string) => {
    return {
        statusCode,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
    };
};
