import { Injectable } from '@angular/core';

@Injectable()
export class Configs {
    //search engine result api
    public readonly API_ENDPOINT: string = 'https://21ngnglbsj.execute-api.ap-south-1.amazonaws.com/test';
    public readonly API_MOCK_ENDPOINT: string = 'assets/mock-data/search-result-response.json';
    public readonly X_API_KEY: string = '';

    //time-series api
    public readonly TS_API_ENDPOINT: string = 'https://numnjqzome.execute-api.ap-south-1.amazonaws.com/default/firebase-api';
    public readonly TS_API_MOCK: string = 'assets/mock-data/time-series-response.json';
    public readonly X_API_KEY_TS: string = '';
    
    public readonly ENABLE_MOCK_RESPONE: boolean = false;
    
}