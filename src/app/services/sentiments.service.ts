import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ApiEndpointGenerator } from '../utils/api-endpoint-generator';
import { SearchResults } from '../models/search-results';

@Injectable({
  providedIn: 'root'
})
export class SentimentsService {

  constructor(private http: HttpClient, private apiEndpointGenerator: ApiEndpointGenerator) { }

  public getSentiments(keyword: string): Observable<SearchResults> {
    console.log('service called');
    return this.http.get<SearchResults>(this.apiEndpointGenerator.getSentimentsByKeywordEndpoint(keyword),
      this.apiEndpointGenerator.getHttpOptions())
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
