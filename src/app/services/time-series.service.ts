import { Injectable } from '@angular/core';
import { TimeSeriesRequest } from '../models/time-series-request';
import { Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TimeSeries } from '../models/time-series';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ApiEndpointGenerator } from '../utils/api-endpoint-generator';
import { Configs } from '../config/config';
import { TimeSeriesResponse } from '../models/time-series-response';

@Injectable({
  providedIn: 'root'
})
export class TimeSeriesService {

  constructor(private http: HttpClient, private apiEndpointGenerator: ApiEndpointGenerator,
    private configs: Configs) { }

  getTimeSeriesData(timeSeriesRequest: TimeSeriesRequest): Observable<TimeSeriesResponse> {
    
    if(this.configs.ENABLE_MOCK_RESPONE){
      return this.http.get<TimeSeriesResponse>(this.apiEndpointGenerator.getTSEndpoint())
      .pipe(
        catchError(this.handleError)
      );
    }else{
      return this.http.post<TimeSeriesResponse>(this.apiEndpointGenerator.getTSEndpoint(), timeSeriesRequest,
      this.apiEndpointGenerator.getHttpOptionsTS())
      .pipe(
        catchError(this.handleError)
      );
    }
    
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
