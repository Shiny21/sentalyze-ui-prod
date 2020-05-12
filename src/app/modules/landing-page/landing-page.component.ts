import { Component, OnInit } from '@angular/core';
import { SearchCriteria } from 'src/app/models/search-criteria';
import { SearchResults } from 'src/app/models/search-results';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  searchCriteria: SearchCriteria = new SearchCriteria('');
  searchResults: SearchResults;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.searchCriteria)
    let navigationExtras: NavigationExtras = {
      queryParams: {
        keyword: this.searchCriteria.searchKeyword
      }
    }
    this.router.navigate(['dashboard'], navigationExtras);

  }

}
