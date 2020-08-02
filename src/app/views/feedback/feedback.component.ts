import { Component, OnInit } from '@angular/core';
import {FeedbackService} from 'src/app/services/feedback.service';
import { UserFeedback} from 'src/app/models/user-feedback';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { UserLoginDetail } from 'src/app/models/UserLoginDetail';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  userLoggedIn : UserLoginDetail;

  constructor(private feedbackService: FeedbackService,private router: Router, private storageService : StorageService) { }
  userFeedback: UserFeedback = new UserFeedback('','','','');
  ngOnInit(): void {
    this.userLoggedIn = this.storageService.getSessionData();
    console.log("user details got in header !! as : ",this.userLoggedIn);
    this.userFeedback.emailId = this.userLoggedIn.email;
    this.userFeedback.name = this.userLoggedIn.firstName;
  }
  submitFeedback(){
    console.log('Saving Feedback');
    this.feedbackService.createUserFeedback(this.userFeedback);
    this.router.navigate(['/']);
  }
}
