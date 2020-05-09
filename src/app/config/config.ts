import { Injectable } from '@angular/core';

@Injectable()
export class Configs {
    public readonly API_ENDPOINT: string = 'https://q42oh26fu8.execute-api.ap-south-1.amazonaws.com/default/';
    public readonly API_MOCK_ENDPOINT: string = 'assets/mock-data/search-result-response.json';

    public readonly ENABLE_MOCK_RESPONE: boolean = true;
    
}