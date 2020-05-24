import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-failed',
  templateUrl: './modal-failed.component.html',
  styleUrls: ['./modal-failed.component.css']
})
export class ModalFailedComponent implements OnInit {

  public keyword: string;

  constructor(public activeModal: NgbActiveModal, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.keyword = params['keyword'];
    });
  }

  // When the user clicks the action button a.k.a. the logout button in the\
  // modal, show an alert and followed by the closing of the modal
  actionFunction() {
    this.router.navigate(['']);
    this.activeModal.close();
  }

  // If the user clicks the cancel button a.k.a. the go back button, then\
  // just close the modal
  closeModal() {
    this.activeModal.close();
    console.log('##inside close modal : ', this.keyword)
    let navigationExtras: NavigationExtras = {
      queryParams: {
        keyword: this.keyword
      }
    }
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.router.navigate(['dashboard'], navigationExtras);
    });

  }


}
