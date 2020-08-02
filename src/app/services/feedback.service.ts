import { Injectable } from '@angular/core';
import { UserFeedback } from 'src/app/models/user-feedback';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private firestore: AngularFirestore,
    private toastrService: ToastrService) { }

  createUserFeedback(userFeedback: UserFeedback){
    this.toastrService.success('Your feedback has been submitted', 'We will get back to you shortly!',
    {timeOut: 4000});
    this.toastrService.clear;
      return this.firestore.collection('Feedback').add({... userFeedback});
    }
    showAllFeedback(){
      console.log('Name Email Msg');
      this.firestore.collection('Feedback').get().subscribe(querySnapshot => {
        querySnapshot.forEach(doc => {
            console.log(doc.get('name')+'  -  '+doc.get('emailId')+'   -   '+doc.get('msg') );
        });
    });
    }
}
