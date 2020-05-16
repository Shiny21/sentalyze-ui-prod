import { Injectable } from '@angular/core';
import { SourceMeta } from '../models/source-meta';
import { ScoreCountMap } from '../models/score-count-map';
import { Constants } from '../constants/constants';

@Injectable()
export class DataAnalyticsUtils {

    constructor(private constants: Constants) { }

    getSourceInPercentage(sourceList: SourceMeta) {
        let percentMap = new Map();
        let finalCount = 0;

        for (let key in sourceList) {
            finalCount = finalCount + sourceList[key].totalCount;
        }

        for (let key in sourceList) {
            let currentCount = sourceList[key].totalCount;
            let perc = this.getPercent(currentCount, finalCount);
            percentMap.set(sourceList[key].application, perc);
        }

        console.log('getSourceInPercentage : ', percentMap);

        return percentMap;
    }

    getDonutChartInPercentage(scoreCountMap: ScoreCountMap) {
        let percentMap = new Map();
        const total_positive = scoreCountMap.positive + scoreCountMap.strong_positive;
        const total_negative = scoreCountMap.negative + scoreCountMap.strong_negative;
        const neutral = scoreCountMap.neutral;
        const total = total_positive + total_negative + neutral;
        percentMap.set(this.constants.CATEGORIES.POS, this.getPercent(total_positive, total));
        percentMap.set(this.constants.CATEGORIES.NEG, this.getPercent(total_negative, total));
        percentMap.set(this.constants.CATEGORIES.NEUT, this.getPercent(neutral, total));

        console.log('getDonutChartInPercentage : ', percentMap);

        return percentMap;

    }

    getStackedChartForSource(sourceList: SourceMeta) {
        let posArray = [];
        let neutArray = [];
        let negArray = [];
        let srcOrder = [];

        for (let key in sourceList) {
            let src = sourceList[key].application;
            let scoreCountMap = sourceList[key].scoreCountMap;
            let percentMap = this.getDonutChartInPercentage(scoreCountMap);
            posArray.push(percentMap.get(this.constants.CATEGORIES.POS));
            neutArray.push(percentMap.get(this.constants.CATEGORIES.NEUT));
            negArray.push(percentMap.get(this.constants.CATEGORIES.NEG));
            srcOrder.push(this.constants.SOURCE_MAP[src]);
        }

        const stackedMap = {
            series: [
                {
                    name: this.constants.CATEGORIES.POS,
                    data: posArray
                },
                {
                    name: this.constants.CATEGORIES.NEUT,
                    data: neutArray
                },
                {
                    name: this.constants.CATEGORIES.NEG,
                    data: negArray
                }
            ],
            categories: srcOrder
        }

        console.log('getStackedChartForSource', stackedMap);

        return stackedMap;
    }

    getPercent(numerator, denominator) {
        return ((numerator / denominator) * 100).toFixed();
    }
}