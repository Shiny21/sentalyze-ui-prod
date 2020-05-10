import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ApiEndpointGenerator } from '../utils/api-endpoint-generator';

@Injectable({
  providedIn: 'root'
})
export class SentimentsService {

  constructor(private http: HttpClient, private apiEndpointGenerator : ApiEndpointGenerator) { }

  public getSentiments(keyword: string){
    console.log('service called');
    return this.http.get(this.apiEndpointGenerator.getSentimentsByKeywordEndpoint(keyword));
  }
}
