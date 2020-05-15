import { Component, OnInit, ViewChild, Input } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill
} from "ng-apexcharts";
import { SourceMeta } from 'src/app/models/source-meta';
import { Constants } from 'src/app/constants/constants';
import { DataAnalyticsUtils } from 'src/app/utils/data-analytics-utils';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
};



@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  @Input() sourceList: SourceMeta;
  public colors: string[] = [];

  constructor(private constants: Constants, private dataAnalyticsUtils: DataAnalyticsUtils) { }

  ngOnInit(): void {
    let stackedMap = this.dataAnalyticsUtils.getStackedChartForSource(this.sourceList);
    this.colors.push(this.constants.COLORS.Positive);
    this.colors.push(this.constants.COLORS.Neutral);
    this.colors.push(this.constants.COLORS.Negative);
    this.chartOptions = {
      series: stackedMap.series,
      chart: {
        type: "bar",
        height: 300,
        stacked: true,
        stackType: "100%"
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      xaxis: {
        type: "category",
        categories: stackedMap.categories
      },
      legend: {
        position: "top"
      },
      fill: {
        opacity: 1
      }
    };

  }

}
