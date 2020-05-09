import { Component, OnInit } from '@angular/core';
import { SearchCriteria } from 'src/app/models/search-criteria';
import { SentimentsService } from 'src/app/services/sentiments.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  searchCriteria: SearchCriteria = new SearchCriteria('');

  constructor(private sentimentService : SentimentsService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.searchCriteria)
    this.sentimentService.getSentiments(this.searchCriteria.searchKeyword).subscribe((data: any[])=>{
      console.log(data);
    })
  }

}
