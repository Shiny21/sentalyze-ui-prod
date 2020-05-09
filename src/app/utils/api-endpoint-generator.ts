import { Configs } from '../config/config';
import { Constants } from '../constants/constants';
import { UrlBuilder } from './url-builder';
import { QueryStringParameters } from './query-string-parameters';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiEndpointGenerator {

    constructor(private configs: Configs, private constants: Constants) { }


    // URL WITH QUERY PARAMS
    private createUrlWithQueryParameters(action: string, queryStringHandler?: (queryStringParameters: QueryStringParameters) => void): string {
        const urlBuilder: UrlBuilder = new UrlBuilder(this.configs.API_ENDPOINT, action);
        // Push extra query string params
        if (queryStringHandler) {
            queryStringHandler(urlBuilder.queryString);
        }
        return urlBuilder.toString();
    }

    public getSentimentsByKeywordEndpoint(keyword: string): string {
        if (this.configs.ENABLE_MOCK_RESPONE)
            return this.configs.API_MOCK_ENDPOINT
        else
            return this.createUrlWithQueryParameters(this.constants.API_ACTION,
                (qs: QueryStringParameters) => qs.push(this.constants.PARAM_KEYWORD, keyword));
    }
}