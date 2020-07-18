import { ScoreCountMap } from './score-count-map';

export interface SourceMeta{
    application: string;
    scoreCountMap: ScoreCountMap;
    totalCount: number;
}