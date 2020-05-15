import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent implements OnInit {

  chartAreaData: any
  chartAreaOptions: any

  constructor() {
    let data = [
      { y: 2006, a: 100, b: 90 },
      { y: 2007, a: 75, b: 65 },
      { y: 2008, a: 50, b: 40 },
      { y: 2009, a: 75, b: 65 },
      { y: 2010, a: 50, b: 40 },
      { y: 2011, a: 75, b: 65 },
      { y: 2012, a: 100, b: 90 }
    ];
    this.chartAreaData = JSON.parse(JSON.stringify(data));
  }

  ngOnInit(): void {

  }

}
