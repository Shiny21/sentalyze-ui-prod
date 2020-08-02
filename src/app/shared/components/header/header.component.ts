import { Component, OnInit } from '@angular/core';
import { UserLoginDetail } from 'src/app/models/UserLoginDetail';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  userLoggedIn : UserLoginDetail;

  constructor( private storageService : StorageService) {
    
  }

  ngOnInit(): void {
    this.userLoggedIn = this.storageService.getSessionData();
    if(!this.userLoggedIn){
      this.storageService.getSessionObj.subscribe(sessionObj=> {
        console.log('#### EVENT RECEIVED ####', sessionObj);
       this.userLoggedIn=sessionObj
      })
    }
    console.log("user details got in header !! as : ",this.userLoggedIn);
  }

}
