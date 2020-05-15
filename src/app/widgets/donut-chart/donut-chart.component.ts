import { Component, OnInit, Input } from '@angular/core';
import { ScoreCountMap } from 'src/app/models/score-count-map';
import { DataAnalyticsUtils } from 'src/app/utils/data-analytics-utils';

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

  constructor(private dataAnalyticsUtils: DataAnalyticsUtils) { }

  ngOnInit(): void {
    let percentMap = this.dataAnalyticsUtils.getDonutChartInPercentage(this.scoreCountMap);
    this.chartDonutData = [
      { label: "Negative", value: percentMap.get('NEG') },
      { label: "Neutral", value: percentMap.get('NEUT') },
      { label: "Positive", value: percentMap.get('POS') }
    ];
    this.chartDonutOptions =
    {
      colors: ['#dc3545', '#17a2b8', '#28a745']
    };

  }



}
