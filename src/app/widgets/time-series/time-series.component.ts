import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { TimeSeriesService } from 'src/app/services/time-series.service';
import { TimeSeriesRequest } from 'src/app/models/time-series-request';
@Component({
  selector: 'app-time-series',
  templateUrl: './time-series.component.html',
  styleUrls: ['./time-series.component.css']
})
export class TimeSeriesComponent implements OnInit {

  timeSeriesRequest: TimeSeriesRequest;

  constructor(private timeSeriesService: TimeSeriesService) { }
  
  ngOnInit(): void {

    
    am4core.useTheme(am4themes_animated);

    let chart = am4core.create("chartdiv", am4charts.XYChart);

    chart.data = [{
      "date": "2020-01-01",
      "Positive": 80,
      "Neutral": 5,
      "Negative": 15
    }, {
      "date": "2020-01-15",
      "Positive": 75,
      "Neutral": 10,
      "Negative": 15
    }, {
      "date": "2020-02-01",
      "Positive": 90,
      "Neutral": 2,
      "Negative": 8
    }, {
      "date": "2020-02-15",
      "Positive": 20,
      "Neutral": 10,
      "Negative": 70
    }, {
      "date": "2020-03-01",
      "Positive": 40,
      "Neutral": 10,
      "Negative": 50
    }, {
      "date": "2020-03-15",
      "Positive": 15,
      "Neutral": 45,
      "Negative": 40
    }, {
      "date": "2020-04-01",
      "Positive": 25,
      "Neutral": 25,
      "Negative": 50
    }, {
      "date": "2020-04-15",
      "Positive": 40,
      "Neutral": 5,
      "Negative": 55
    }, {
      "date": "2020-05-01",
      "Positive": 32,
      "Neutral": 18,
      "Negative": 50
    }, {
      "date": "2020-05-15",
      "Positive": 25,
      "Neutral": 20,
      "Negative": 55
    }, {
      "date": "2020-06-01",
      "Positive": 5,
      "Neutral": 25,
      "Negative": 70
    }, {
      "date": "2020-06-15",
      "Positive": 2,
      "Neutral": 30,
      "Negative": 68
    }, {
      "date": "2020-07-01",
      "Positive": 5,
      "Neutral": 15,
      "Negative": 80
    }];
    
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 60;
    dateAxis.startLocation = 0.5;
    dateAxis.endLocation = 0.5;
    dateAxis.baseInterval = {
      timeUnit: "week",
      count: 2
    }
    
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.name = "Positive";
    series.dataFields.valueY = "Positive";
    //series.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/car.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
    series.tooltipText = "[#000]{valueY.value}[/]";
    series.tooltip.background.fill = am4core.color("#4fc462");
    series.tooltip.getStrokeFromObject = true;
    series.tooltip.background.strokeWidth = 3;
    series.tooltip.getFillFromObject = false;
    series.fillOpacity = 0.6;
    series.strokeWidth = 2;
    series.stacked = true;
    series.fill = am4core.color("#4fc462");
    
    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.name = "Neutral";
    series2.dataFields.dateX = "date";
    series2.dataFields.valueY = "Neutral";
    //series2.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/motorcycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
    series2.tooltipText = "[#000]{valueY.value}[/]";
    series2.tooltip.background.fill = am4core.color("#7c92f7");
    series2.tooltip.getFillFromObject = false;
    series2.tooltip.getStrokeFromObject = true;
    series2.tooltip.background.strokeWidth = 3;
    series2.sequencedInterpolation = true;
    series2.fillOpacity = 0.6;
    series2.stacked = true;
    series2.strokeWidth = 2;
    series2.fill = am4core.color("#7c92f7");
    
    let series3 = chart.series.push(new am4charts.LineSeries());
    series3.name = "Negative";
    series3.dataFields.dateX = "date";
    series3.dataFields.valueY = "Negative";
    //series3.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
    series3.tooltipText = "[#000]{valueY.value}[/]";
    series3.tooltip.background.fill = am4core.color("#f75e5e");
    series3.tooltip.getFillFromObject = false;
    series3.tooltip.getStrokeFromObject = true;
    series3.tooltip.background.strokeWidth = 3;
    series3.sequencedInterpolation = true;
    series3.fillOpacity = 0.6;
    series3.defaultState.transitionDuration = 1000;
    series3.stacked = true;
    series3.strokeWidth = 2;
    series3.fill = am4core.color("#f75e5e");
    
    
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    chart.scrollbarX = new am4core.Scrollbar();
    
    // Add a legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";
    
    // axis ranges
    let range = dateAxis.axisRanges.create();
    range.date = new Date(2001, 0, 1);
    range.endDate = new Date(2003, 0, 1);
    range.axisFill.fill = chart.colors.getIndex(7);
    range.axisFill.fillOpacity = 0.2;
    
    range.label.text = "Shift in sentiments";
    range.label.inside = true;
    range.label.rotation = 90;
    range.label.horizontalCenter = "right";
    range.label.verticalCenter = "bottom";
    
    let range2 = dateAxis.axisRanges.create();
    range2.date = new Date(2007, 0, 1);
    range2.grid.stroke = chart.colors.getIndex(7);
    range2.grid.strokeOpacity = 0.6;
    range2.grid.strokeDasharray = "5,2";
    
    
    range2.label.text = "Delta changed";
    range2.label.inside = true;
    range2.label.rotation = 90;
    range2.label.horizontalCenter = "right";
    range2.label.verticalCenter = "bottom";   
  }

}
