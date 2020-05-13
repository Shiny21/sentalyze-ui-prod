import { Component, OnInit } from '@angular/core';
import { SentimentsService } from 'src/app/services/sentiments.service';
import { SearchResults } from 'src/app/models/search-results';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchResults: SearchResults;
  keyword: string;
  constructor(private sentimentService: SentimentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.keyword= params['keyword'];
    });

    console.log('Now calling api to fetch result for keyword : ',this.keyword);
    this.sentimentService.getSentiments(this.keyword).subscribe((data: SearchResults)=>{
      this.searchResults = data;
      console.log(this.searchResults);
    })
  }

}