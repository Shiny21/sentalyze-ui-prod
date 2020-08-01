import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TrendingTopicsService {

  constructor(private http: HttpClient) { }
  
trendingList : String[];
url = 'https://us-central1-eqarus.cloudfunctions.net/get-trending-topics';

showTrending(): Observable<String[]> {
  console.log("Entered service showTrending");
  //this.trendingList = [];
 // this.trendingList[0]="hiii";
  return this.http.get<String[]>(this.url)
 
}

}
