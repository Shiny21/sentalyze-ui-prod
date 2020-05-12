import { Configs } from '../config/config';
import { Constants } from '../constants/constants';
import { UrlBuilder } from './url-builder';
import { QueryStringParameters } from './query-string-parameters';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

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
        console.log('URL builder : ', urlBuilder.toString())
        return urlBuilder.toString();
    }

    public getSentimentsByKeywordEndpoint(keyword: string): string {
        if (this.configs.ENABLE_MOCK_RESPONE)
            return this.configs.API_MOCK_ENDPOINT
        else
            return this.createUrlWithQueryParameters(this.constants.API_ACTION,
                (qs: QueryStringParameters) => qs.push(this.constants.PARAM_KEYWORD, keyword));
    }

    public getHttpOptions() {
        const httpOptions = {
            headers: new HttpHeaders({
                'x-api-key': this.configs.X_API_KEY
            })
        };
        return httpOptions;
    }
}