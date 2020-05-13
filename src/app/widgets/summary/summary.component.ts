import { Component, OnInit, Input } from '@angular/core';
import { SourceMeta } from 'src/app/models/source-meta';
import { DataAnalyticsUtils } from 'src/app/utils/data-analytics-utils';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() sourceList : SourceMeta;

  constructor(private dataAnalyticsUtils : DataAnalyticsUtils) { }

  ngOnInit(): void {
    console.log('Here is the source list got from parent!! :) ',this.sourceList)
    this.dataAnalyticsUtils.getAnalytics();
  }

}
