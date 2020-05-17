import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts:any[]=[];
  constructor() { }

  private show(header: string, body: string, options: any={}){
    this.toasts.push({header, body, ...options});
  }

  showErrorToast(header: string, body: string){
    this.show("Error", body, {classname: 'bg-danger text-light', delay:5000});
  }
  showSuccessToast(header: string, body: string){
    this.show("Success", body, {classname: 'bg-success text-light', delay:5000});
  }
  remove(toast){
    this.toasts= this.toasts.filter(t => t != toast);
  }
}
