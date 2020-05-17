import { Injectable } from '@angular/core';

@Injectable()
export class Configs {
    public readonly API_ENDPOINT: string = 'https://21ngnglbsj.execute-api.ap-south-1.amazonaws.com/test';
    public readonly API_MOCK_ENDPOINT: string = 'assets/mock-data/search-result-response.json';
    public readonly X_API_KEY: string = ''; //enter api key here
    
    public readonly ENABLE_MOCK_RESPONE: boolean = false;
    
}