import { Component, OnInit } from '@angular/core';
import { SentimentsService } from 'src/app/services/sentiments.service';
import { SearchResults } from 'src/app/models/search-results';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { ModalFailedComponent } from 'src/app/widgets/modal-failed/modal-failed.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Constants } from 'src/app/constants/constants';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchResults: SearchResults;
  keyword: string;
  selectedKey: any;
  activeTab: number
  constructor(private sentimentService: SentimentsService, private route: ActivatedRoute,
    private spinner: NgxSpinnerService, private modalService: NgbModal, private constant: Constants
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.route.queryParams.subscribe(params => {
      this.keyword = params['keyword'];
    });

    console.log('Now calling api to fetch result for keyword : ', this.keyword);
    let sentiment = this.sentimentService.getSentiments(this.keyword).subscribe((data: SearchResults) => {
      this.searchResults = data;
      console.log(this.searchResults);
      let posTotal = this.searchResults.scoreCountMap.positive + this.searchResults.scoreCountMap.strong_positive;
      let negTotal = this.searchResults.scoreCountMap.negative + this.searchResults.scoreCountMap.strong_negative;
      let neuTotal = this.searchResults.scoreCountMap.neutral;
      if (negTotal > posTotal) {
        if (neuTotal > negTotal) {
          this.activeTab = 2;
        } else {
          this.activeTab = 0;
        }
      } else {
        if (neuTotal > posTotal) {
          this.activeTab = 2;
        } else {
          this.activeTab = 1;
        }
      }
      console.log('Active tab is : ', this.activeTab);
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

  onSelect(key): void {
    this.selectedKey = this.searchResults.token_count[key];
  }

}
