import { Component, OnInit, Input } from '@angular/core';
import { SourceMeta } from 'src/app/models/source-meta';
import { DataAnalyticsUtils } from 'src/app/utils/data-analytics-utils';
import { Constants } from 'src/app/constants/constants';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() sourceList : SourceMeta;
  tw_percent : number;
  yo_percent: number;
  re_percent: number;
  tu_percent: number;

  tw: string;
  re: string;
  yo: string;
  tu: string;

  constructor(private dataAnalyticsUtils : DataAnalyticsUtils,
    private constants: Constants) { }

  ngOnInit(): void {
    console.log('Here is the source list got from parent!! :) ',this.sourceList)
    let percentMap = this.dataAnalyticsUtils.getSourceInPercentage(this.sourceList);
    this.tu_percent = percentMap.get('TU');
    this.tw_percent = percentMap.get('TW');
    this.yo_percent = percentMap.get('YO');
    this.re_percent = percentMap.get('RE');

    this.tw = this.constants.SOURCE_MAP.TW;
    this.re = this.constants.SOURCE_MAP.RE;
    this.yo = this.constants.SOURCE_MAP.YO;
    this.tu = this.constants.SOURCE_MAP.TU;
  }

}
