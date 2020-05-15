import { Component, OnInit, Input } from '@angular/core';
import { ScoreCountMap } from 'src/app/models/score-count-map';
import { DataAnalyticsUtils } from 'src/app/utils/data-analytics-utils';
import { Constants } from 'src/app/constants/constants';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {

  chartDonutData: any
  chartDonutOptions: any

  @Input() scoreCountMap: ScoreCountMap;
  tw_percent: number;
  yo_percent: number;

  constructor(private dataAnalyticsUtils: DataAnalyticsUtils, private constants: Constants) { }

  ngOnInit(): void {
    let percentMap = this.dataAnalyticsUtils.getDonutChartInPercentage(this.scoreCountMap);
    this.chartDonutData = [
      { label: this.constants.CATEGORIES.NEG, value: percentMap.get(this.constants.CATEGORIES.NEG) },
      { label: this.constants.CATEGORIES.NEUT, value: percentMap.get(this.constants.CATEGORIES.NEUT) },
      { label: this.constants.CATEGORIES.POS, value: percentMap.get(this.constants.CATEGORIES.POS) }
    ];
    let colors = [];
    colors.push(this.constants.COLORS.Negative);
    colors.push(this.constants.COLORS.Neutral);
    colors.push(this.constants.COLORS.Positive);
    this.chartDonutOptions =
    {
      colors: colors,
      formatter: this.formatPercent
    };

  }

  formatPercent(y, data){
    return y+'%'
  }



}
