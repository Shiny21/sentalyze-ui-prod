import { Component, OnInit } from '@angular/core';
import { SentimentsService } from 'src/app/services/sentiments.service';
import { SearchResults } from 'src/app/models/search-results';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import {ModalFailedComponent} from 'src/app/widgets/modal-failed/modal-failed.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchResults: SearchResults;
  keyword: string;
  constructor(private sentimentService: SentimentsService, private route: ActivatedRoute,
    private spinner: NgxSpinnerService, private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.route.queryParams.subscribe(params => {
      this.keyword = params['keyword'];
    });

    console.log('Now calling api to fetch result for keyword : ', this.keyword);
    let sentiment = this.sentimentService.getSentiments(this.keyword).subscribe((data: SearchResults) => {
      this.searchResults = data;
      console.log(this.searchResults);
      this.spinner.hide();
      sentiment.unsubscribe();
    },
    error => {
      console.log('### errror occured!!', error);
      this.spinner.hide();
      this.openModal();
    })
  }

  openModal() {
    const modalRef = this.modalService.open(ModalFailedComponent, { centered: true, size: 'lg' });
    modalRef.componentInstance.keyword = this.keyword;
  }

}
