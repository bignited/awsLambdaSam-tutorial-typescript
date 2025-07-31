import { APIGatewayProxyEventQueryStringParameters } from 'aws-lambda';
import { RequestQuery } from '../models/requestQuery';

export const parseQueryParams = (params: APIGatewayProxyEventQueryStringParameters = {}): RequestQuery => {
    return {
        maxBudget: params.maxBudget ? parseInt(params.maxBudget, 10) : undefined,
        mood: params.mood?.toLowerCase(),
    };
};
