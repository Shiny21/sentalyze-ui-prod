import { Component, OnInit } from '@angular/core';
import { SearchCriteria } from 'src/app/models/search-criteria';
import { SearchResults } from 'src/app/models/search-results';
import { UserSubscribe} from 'src/app/models/user-subscribe';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import {UsersubscribeService} from 'src/app/services/usersubscribe.service';
import { ToastrService } from "ngx-toastr";
import {TrendingTopicsService} from 'src/app/services/trending-topics.service';
import { NgxSpinnerService } from "ngx-spinner";
import { StorageService } from 'src/app/services/storage.service';
import { UserLoginDetail } from 'src/app/models/UserLoginDetail';


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
  sessionId: String;
  sessionDetails: UserLoginDetail = new UserLoginDetail();

  constructor(private spinner: NgxSpinnerService,private router: Router, private usersubscribeService : UsersubscribeService, private trendingService : TrendingTopicsService,
    private toastrService: ToastrService, private activatedRoute: ActivatedRoute, private storageService: StorageService) { }

  ngOnInit(): void {
    this.spinner.show();
    console.log(this.activatedRoute.snapshot.paramMap.get('sessionId'));
    this.sessionId = this.activatedRoute.snapshot.paramMap.get('sessionId');
   /*  if(null == this.sessionId){
      this.router.navigate(['error']);
    } */
    if(this.storageService.getSessionData() != null && null == this.sessionId){
        console.log('Internal route with valid session, skipping session validation');
     }else{
      let sessionSubscibe = this.storageService.validateSessionId(this.sessionId).subscribe(querySnapshot => {
        if(querySnapshot.size > 0){
          querySnapshot.forEach(doc => {
            console.log(doc.data());
            this.sessionDetails.sessionId = doc.get('sessionId');
            this.sessionDetails.firstName = doc.get('name');
            //userLoginDetail.lastName = doc.get('lastName');
            this.sessionDetails.email = doc.get('email');
            this.sessionDetails.photoUrl = doc.get('photoUrl');
            console.log('UserloginDetails object populated : ', this.sessionDetails);
  
            this.storageService.setSessionData(this.sessionDetails);
            sessionSubscibe.unsubscribe();
          });
        }else{
          console.log('Session details not found; Initiating dooms protocol!');
          this.storageService.removeAllkeys();
          this.router.navigate(['error']);
        }
        
      },
      error => {
        console.log('Error in validating sessionId from back-end', error);
        sessionSubscibe.unsubscribe();
        this.spinner.hide();
        this.router.navigate(['error']);
      });
      console.log('Inside landing component..!',this.sessionDetails);
      if(null == this.sessionDetails){
        this.router.navigate(['error']);
      }
     }
    
    
    let trending = this.trendingService.showTrending().subscribe((data: String[]) => {
    this.trendingList = data;
    console.log(this.trendingList);
    this.spinner.hide();
    trending.unsubscribe();
    
  },
  error => {
    console.log('Error in loading trends from back-end..', error);
    this.spinner.hide();
  
  })
  
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
