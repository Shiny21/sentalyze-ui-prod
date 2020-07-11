import { Component, OnInit } from '@angular/core';
import { SearchCriteria } from 'src/app/models/search-criteria';
import { SearchResults } from 'src/app/models/search-results';
import { UserSubscribe} from 'src/app/models/user-subscribe';
import { Router, NavigationExtras } from '@angular/router';
import {UsersubscribeService} from 'src/app/services/usersubscribe.service';
import { ToastrService } from "ngx-toastr";
import {TrendingTopicsService} from 'src/app/services/trending-topics.service'


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  searchCriteria: SearchCriteria = new SearchCriteria('');
  searchResults: SearchResults;
  userSubscribe: UserSubscribe = new UserSubscribe('');
  trendingList : String[]

  constructor(private router: Router, private usersubscribeService : UsersubscribeService, private trendingService : TrendingTopicsService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    
   this.trendingList = this.trendingService.showTrending();
  
  }

  onSubmit() {
    console.log(this.searchCriteria)
    let navigationExtras: NavigationExtras = {
      queryParams: {
        keyword: this.searchCriteria.searchKeyword
      }
    }
    this.router.navigate(['dashboard'], navigationExtras);

  }
  subscribeUser(){
       console.log('Subscribing user'+this.userSubscribe.emailId)
       this.usersubscribeService.createUserSubscription(this.userSubscribe);
    //   this.toastrService.clear;
      }

  onClickTrendButton(event: any){
    
     
     console.log("Trend Button pressed")
     console.log(event.target.innerText)
     var topic:string = event.target.innerText
     if (topic.match('#'))
     {
      topic = topic.replace('#','')
      this.searchCriteria.searchKeyword = topic
     }
     else {

      this.searchCriteria.searchKeyword = topic
     }
     
      

  }
     

}
