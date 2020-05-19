import { Component, OnInit, Input } from '@angular/core';
import { ScoreCountMap } from 'src/app/models/score-count-map';
import { DataAnalyticsUtils } from 'src/app/utils/data-analytics-utils';
import { Constants } from 'src/app/constants/constants';

@Component({
  selector: 'app-sunburst',
  templateUrl: './sunburst.component.html',
  styleUrls: ['./sunburst.component.css']
})
export class SunburstComponent implements OnInit {

  @Input() scoreCountMap: ScoreCountMap;

  public graph = {
    data: [],
    layout: {}
  };

  constructor(private dataAnalyticsUtils: DataAnalyticsUtils, private constants: Constants) { }

  ngOnInit(): void {
    let values = []
    let percentMap = this.dataAnalyticsUtils.getDonutChartInPercentage(this.scoreCountMap);

    values.push(percentMap.get(this.constants.CATEGORIES.NEG));
    values.push(percentMap.get(this.constants.CATEGORIES.NEUT));
    values.push(percentMap.get(this.constants.CATEGORIES.POS));
    values.push(this.dataAnalyticsUtils.getPercent(this.scoreCountMap.strong_negative,percentMap.get('total_negative')));
    values.push(this.dataAnalyticsUtils.getPercent(this.scoreCountMap.negative,percentMap.get('total_negative')));
    console.log('#####',this.dataAnalyticsUtils.getPercent(this.constants.CATEGORIES.NEUT,this.constants.CATEGORIES.NEUT))
    values.push(this.dataAnalyticsUtils.getPercent(percentMap.get(this.constants.CATEGORIES.NEUT),percentMap.get(this.constants.CATEGORIES.NEUT)));
    values.push(this.dataAnalyticsUtils.getPercent(this.scoreCountMap.positive,percentMap.get('total_positive')));
    values.push(this.dataAnalyticsUtils.getPercent(this.scoreCountMap.strong_positive,percentMap.get('total_positive')));
    let graph_data = {
      data: [{
        type: "sunburst",
        labels: ["Sad", "Meh", "Happy", "Insensitive", "Strong", "Nominal", "Joyful", "Ecstatic"],
        parents: ["Emotions", "Emotions", "Emotions", "Sad", "Sad", "Meh", "Happy", "Happy"],
        values: values,
        outsidetextfont: { size: 15, color: "#377eb8"},
        //leaf: { opacity: 0.4 },
        marker: { line: { width: 2 } },
        //branchvalues: 'total'
      }],
      layout: {
        margin: { l: 0, r: 0, b: 0, t: 0 },
        width: 500,
        height: 300,
        sunburstcolorway:[this.constants.COLORS.Negative,this.constants.COLORS.Positive,this.constants.COLORS.Neutral]
      }
    };
    this.graph.data = graph_data.data;
    this.graph.layout = graph_data.layout;
  }


}
