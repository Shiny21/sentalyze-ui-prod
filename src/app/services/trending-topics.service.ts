import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TrendingTopicsService {

  constructor(private http: HttpClient) { }
  
trendingList : String[];
url = 'https://us-central1-eqarus.cloudfunctions.net/get-trending-topics';

showTrending(){
  console.log("Entered service showTrending");
  this.trendingList = [];
 // this.trendingList[0]="hiii";
  this.http.get(this.url).toPromise().then(
    data => {
      
      for (let i = 0; i < 10; i++){

        console.log(data[i])
        this.trendingList.push(data[i])
      }
      console.log(this.trendingList)
      }
       

  );
  
  return this.trendingList;
}
}
