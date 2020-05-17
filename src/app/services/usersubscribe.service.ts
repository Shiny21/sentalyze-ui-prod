import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserSubscribe } from 'src/app/models/user-subscribe';
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class UsersubscribeService {

  constructor(private firestore: AngularFirestore,
    public toastrService: ToastrService) { }
  createUserSubscription(userSubscribe: UserSubscribe){
    this.firestore.collection('userSubscribe', ref => ref.where('emailId', "==", userSubscribe.emailId)).snapshotChanges().subscribe(res => {
      if (res.length > 0)
      {
      console.log("Email Id has already been subscribed");
      this.toastrService.info('Your email Id is already subscribed to our newletter', '',{timeOut: 60000});
      this.toastrService.clear();
    
      }
      else
      {
        this.toastrService.show('Email Id has been subscribed successfully','Keep exploring :)', {timeOut: 60000});
        this.toastrService.clear();
         return this.firestore.collection('userSubscribe').add({... userSubscribe});
      }
  });
    
}

showAllSubscription(){
  this.firestore.collection('userSubscribe').get().subscribe(querySnapshot => {
    querySnapshot.forEach(doc => {
        console.log(doc.get('emailId'));
    });
});
}
}
