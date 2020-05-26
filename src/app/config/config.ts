import { Injectable } from '@angular/core';

@Injectable()
export class Configs {
    public readonly API_ENDPOINT: string = 'https://21ngnglbsj.execute-api.ap-south-1.amazonaws.com/test';
    public readonly API_MOCK_ENDPOINT: string = 'assets/mock-data/search-result-response1.json';
    public readonly X_API_KEY: string = 'wAx9ccOSAKa02lrE3zSPnyMV7tUTyFzEJUcmu980';

    
    public readonly ENABLE_MOCK_RESPONE: boolean = true;
    
}