import { Component, OnInit } from '@angular/core';
import { SearchCriteria } from 'src/app/models/search-criteria';
import { SearchResults } from 'src/app/models/search-results';
import { UserSubscribe} from 'src/app/models/user-subscribe';
import { Router, NavigationExtras } from '@angular/router';
import {UsersubscribeService} from 'src/app/services/usersubscribe.service';
import { ToastrService } from "ngx-toastr";


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  searchCriteria: SearchCriteria = new SearchCriteria('');
  searchResults: SearchResults;
  userSubscribe: UserSubscribe = new UserSubscribe('');

  constructor(private router: Router, private usersubscribeService : UsersubscribeService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
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
     

}
