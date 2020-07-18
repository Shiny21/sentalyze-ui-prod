import { Injectable } from '@angular/core';

@Injectable()
export class Configs {
    //search engine result api
    public readonly API_ENDPOINT: string = 'https://21ngnglbsj.execute-api.ap-south-1.amazonaws.com/test';
    public readonly API_MOCK_ENDPOINT: string = 'assets/mock-data/search-result-response.json';
    public readonly X_API_KEY: string = 'wAx9ccOSAKa02lrE3zSPnyMV7tUTyFzEJUcmu980';

    //time-series api
    public readonly TS_API_ENDPOINT: string = 'https://9hu1ormjbh.execute-api.ap-south-1.amazonaws.com/dev/fetch-firebase-data';
    public readonly TS_API_MOCK: string = 'assets/mock-data/time-series-response.json';

    
    public readonly ENABLE_MOCK_RESPONE: boolean = false;
    
}