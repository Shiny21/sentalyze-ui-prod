import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserLoginDetail } from 'src/app/models/UserLoginDetail';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {
 subscribeEmail: string;
 url = 'https://sammrsfh04.execute-api.ap-south-1.amazonaws.com/prod/sendNotification';
 key = 'iGgBcbjAZu7EhOtrm7UqJ6ynwD0jB3KV8tEdrJ47';
 userLoggedIn : UserLoginDetail;
  constructor(private http: HttpClient,private firestore: AngularFirestore,
    private toastrService: ToastrService, private route: Router, private storageService: StorageService) { }

  ngOnInit(): void {
    this.userLoggedIn = this.storageService.getSessionData();
    console.log("user details got in coming soon !! as : ",this.userLoggedIn);
    this.subscribeEmail = this.userLoggedIn.email;
  }
OnClickSubscribe(){
    console.log("Inside OnClickSubscribe()");
    console.log(this.subscribeEmail);

    this.firestore.collection('SubscriptionData').doc(this.subscribeEmail).set({
      Email: this.subscribeEmail,
      timeStamp: firestore.FieldValue.serverTimestamp()
  
    });
  this.toastrService.success('Thanks for subscribing to Sentalyze', 'We will get back to you shortly!',
    {timeOut: 4000});

    let header = new HttpHeaders();
    header = header.set('x-api-key',this.key);
    //header = header.append('emailid', this.subscribeEmail);
   // header = header.append('subscription', 'y');

    
    this.http.post<any>(this.url,this.subscribeEmail, {headers: header}).subscribe();
    this.subscribeEmail = '';
    this.route.navigate(['']);
}
}
