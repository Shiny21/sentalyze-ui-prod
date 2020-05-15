import { Injectable } from '@angular/core';
import { SourceMeta } from '../models/source-meta';
import { ScoreCountMap } from '../models/score-count-map';

@Injectable()
export class DataAnalyticsUtils {

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

        console.log('getSourceInPercentage : ',percentMap );

        return percentMap;
    }

    getDonutChartInPercentage(scoreCountMap: ScoreCountMap) {
        let percentMap = new Map();
        const total_positive = scoreCountMap.positive + scoreCountMap.strong_positive;
        const total_negative = scoreCountMap.negative + scoreCountMap.strong_negative;
        const neutral = scoreCountMap.neutral;
        const total = total_positive + total_negative + neutral;
        percentMap.set('POS', this.getPercent(total_positive, total));
        percentMap.set('NEG', this.getPercent(total_negative, total));
        percentMap.set('NEUT', this.getPercent(neutral, total));

        console.log('getDonutChartInPercentage : ',percentMap );

        return percentMap;

    }

    getPercent(numerator, denominator) {
        return ((numerator / denominator) * 100).toFixed();
    }
}