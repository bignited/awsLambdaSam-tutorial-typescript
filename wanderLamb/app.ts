import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { parseQueryParams } from './helpers/parseQueryParams';
import { buildDestinationResponse, buildErrorResponse } from './helpers/responseBuilders';
import { filterByMood } from './helpers/filterByMood';
import { RequestQuery } from './models/requestQuery';
import { getRandomItem } from './helpers/getRandomItem';
import { filterByBudget } from './helpers/filterByBudget';
import { destinations } from './data/destinations';

export const lambdaHandler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    try {
        const query: RequestQuery = parseQueryParams(event.pathParameters || {});

        const filtered = filterByMood(filterByBudget(destinations, query.maxBudget), query.mood);

        if (filtered.length === 0) {
            return buildErrorResponse(404, 'No destinations match your filters.');
        }

        const result = getRandomItem(filtered);
        return buildDestinationResponse(result);
    } catch (error) {
        console.error('Error processing request:', error);
        return buildErrorResponse(500, 'Internal server error.');
    }
};
