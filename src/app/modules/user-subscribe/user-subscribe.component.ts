import { Component, OnInit } from '@angular/core';
import { UsersubscribeService } from 'src/app/services/usersubscribe.service';
import { UserSubscribe } from 'src/app/models/user-subscribe';

@Component({
  selector: 'app-user-subscribe',
  templateUrl: './user-subscribe.component.html',
  styleUrls: ['./user-subscribe.component.css']
})
export class UserSubscribeComponent implements OnInit {

  userSubscribes : UserSubscribe[];
  constructor(private usersubscribeService: UsersubscribeService) { }

  ngOnInit(): void {
  }
  create(usersubscribe: UserSubscribe){
    this.usersubscribeService.createUserSubscription(usersubscribe);
}

}
