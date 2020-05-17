import { Component, OnInit } from '@angular/core';
import {FeedbackService} from 'src/app/services/feedback.service';
import {UsersubscribeService} from 'src/app/services/usersubscribe.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private usersubscribeService : UsersubscribeService, private feedbackService : FeedbackService) { }

  ngOnInit(): void {
  }

  showAllSubscription(){
    this.usersubscribeService.showAllSubscription();
   }
   showAllFeedback(){
    this.feedbackService.showAllFeedback();
   }

}
