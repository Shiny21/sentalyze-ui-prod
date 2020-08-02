import { Injectable, EventEmitter, Output } from '@angular/core';
import { UserLoginDetail } from '../models/UserLoginDetail';
import { AngularFirestore } from '@angular/fire/firestore';
import {DocumentSnapshot} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  @Output() getSessionObj: EventEmitter<any> = new EventEmitter();

  constructor(private firestore: AngularFirestore) { }

  private setObjectValue(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  private getObjectValue(key: string) {
    var item = sessionStorage.getItem(key);
    if (item)
      return JSON.parse(item);
    return null;
  }

  setSessionData(loginDetails: UserLoginDetail) {
    this.setObjectValue("sessionId", loginDetails.sessionId);
    this.setObjectValue(loginDetails.sessionId, loginDetails);
    this.getSessionObj.emit(loginDetails);
  }

  getSessionData(): UserLoginDetail {
    if (this.getObjectValue("sessionId") != null) {
      return this.getObjectValue(this.getObjectValue("sessionId"));
    }
    return null;
  }

  removeAllkeys() {
    if (this.getObjectValue("sessionId") != null) {
      sessionStorage.removeItem(this.getObjectValue("sessionId"));
    }
    sessionStorage.removeItem("sessionId");
  }

  validateSessionId(sessionId: String) {
    /* this.firestore.collection('UserSessionInfo', ref => ref.where('sessionId', "==", sessionId).
    where('currentStatus', "==", true)).snapshotChanges().subscribe(res => {
      console.log(res);
      if (res.length > 0) {
        console.log('Session present!! for id : ',sessionId)
       // return true;
      }
      else {
        console.log('Session not present, handle now! id : ',sessionId)
       // return false;
       }
    }) */
    //return 
    
    return this.firestore.collection('UserSessionInfo', ref => ref.where('sessionId', "==", sessionId).
      where('currentStatus', "==", true)).get();

  }
}
