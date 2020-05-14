import { Injectable } from '@angular/core';
import { SourceMeta } from '../models/source-meta';

@Injectable()
export class DataAnalyticsUtils {
    
    getSourceInPercentage(sourceList: SourceMeta){
        let percentMap = new Map();
        let finalCount = 0;

        for(let key in sourceList){
            finalCount = finalCount + sourceList[key].totalCount;
        }

        for(let key in sourceList){
            let currentCount = sourceList[key].totalCount;
            let perc = ((currentCount/finalCount)*100).toFixed();
            percentMap.set(sourceList[key].application, perc);
        }

        console.log('hey i am here to do the Math :) !!');

        return percentMap;
    }
}