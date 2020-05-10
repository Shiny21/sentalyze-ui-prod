import { Component, OnInit } from '@angular/core';
import { SearchCriteria } from 'src/app/models/search-criteria';
import { SentimentsService } from 'src/app/services/sentiments.service';
import { SearchResults } from 'src/app/models/search-results';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  searchCriteria: SearchCriteria = new SearchCriteria('');
  searchResults: SearchResults;

  constructor(private sentimentService : SentimentsService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.searchCriteria)
    this.sentimentService.getSentiments(this.searchCriteria.searchKeyword).subscribe((data: SearchResults)=>{
      console.log(data);
      this.searchResults = data;
      console.log(this.searchResults.scoreCountMap);
    })
  }

}
