import { SentimentMeta } from './sentiment-meta';
import { ScoreCountMap } from './score-count-map';
import { SourceMeta } from './source-meta';

export class SearchResults{

    responseList : SentimentMeta[];
    scoreCountMap: ScoreCountMap;
    applicationSentimentList: SourceMeta[];
    finalCount: number;

}