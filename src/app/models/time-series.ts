import { ScoreCountMap } from './score-count-map';

export interface TimeSeries{
    keywordName: string;
    scoreCountMap: ScoreCountMap;
    timeStamp: number;
}