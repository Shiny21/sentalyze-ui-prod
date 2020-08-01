import { Component, OnInit } from '@angular/core';
import {FeedbackService} from 'src/app/services/feedback.service';
import { UserFeedback} from 'src/app/models/user-feedback';
import { Router } from '@angular/router';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private feedbackService: FeedbackService,private router: Router) { }
  userFeedback: UserFeedback = new UserFeedback('','','','');
  ngOnInit(): void {
  }
  submitFeedback(){
    console.log('Saving Feedback');
    this.feedbackService.createUserFeedback(this.userFeedback);
    this.router.navigate(['/']);
  }
}
