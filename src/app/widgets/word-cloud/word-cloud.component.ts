import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud";
import { Constants } from 'src/app/constants/constants';
import { Token } from 'src/app/models/token';

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.css']
})
export class WordCloudComponent implements OnInit, AfterViewInit {

  @Input() tokenList: Token[];
  @Input() type: string;

  constructor(private constants: Constants) { }

  ngOnInit(): void {
    console.log('Word cloud init invoked!!')
    this.renderContent()
   }

  ngAfterViewInit(){
    console.log('word cloud after view init invoked')

  }

  private renderContent(){
    console.log('===>Inside render content!!')
    let divName = this.type;

    let chart = am4core.create(divName, am4plugins_wordCloud.WordCloud);
    let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    //series.data = [];
    console.log('===> Here is the token list for Div : ', divName);
    /* console.log('===> Series data at start : ', series.data)
    console.log('===> token list ', this.tokenList) */
    //chart.fontFamily = "Courier New";
    /* series.maxCount = 10;
    series.minValue = 5; 
    series.minWordLength = 3; */
    series.excludeWords = ["the", "an", "to"];
    series.randomness = 0.7;
    series.minFontSize = 18;
    series.fontFamily = "Sans-serif";
    series.fontWeight = "300";
    series.rotationThreshold = 0.2;
    series.accuracy = 2;
    series.labels.template.fill = am4core.color(this.constants.WC_COLORS[this.type]);
    series.labels.template.tooltipText = "{word}:\n[bold]{value}[/]";
    series.data = this.tokenList;
    console.log('===> Series data after parsing : ', series.data);

    series.dataFields.word = "tag";
    series.dataFields.value = "count";
    //series.dataFields.hidden = "posts";
  }

  private parseSeriesData(tokenList: Token[]) {

    let seriesData = []
    tokenList.forEach
    for (let token of tokenList) {
      seriesData.push(token);
    }
    return seriesData;

  }

}
