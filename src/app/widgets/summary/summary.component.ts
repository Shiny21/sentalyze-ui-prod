import { Component, OnInit, Input } from '@angular/core';
import { SourceMeta } from 'src/app/models/source-meta';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() sourceList : SourceMeta;

  constructor() { }

  ngOnInit(): void {
    console.log('Here is the source list got from parent!! :) ',this.sourceList)
  }

}
