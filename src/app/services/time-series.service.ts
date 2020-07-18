import { Injectable } from '@angular/core';
import { TimeSeriesRequest } from '../models/time-series-request';
import { Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TimeSeries } from '../models/time-series';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ApiEndpointGenerator } from '../utils/api-endpoint-generator';

@Injectable({
  providedIn: 'root'
})
export class TimeSeriesService {

  constructor(private http: HttpClient, private apiEndpointGenerator: ApiEndpointGenerator) { }

  timeSeriesUrl = 'https://9hu1ormjbh.execute-api.ap-south-1.amazonaws.com/dev/fetch-firebase-data';

  getTimeSeriesData(timeSeriesRequest: TimeSeriesRequest): Observable<TimeSeries> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    return this.http.post<TimeSeries>(this.apiEndpointGenerator.getTSEndpoint(), timeSeriesRequest, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
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
