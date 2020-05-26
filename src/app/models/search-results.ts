import { SentimentMeta } from './sentiment-meta';
import { ScoreCountMap } from './score-count-map';
import { SourceMeta } from './source-meta';
import { TokenList } from './token-list';

export interface SearchResults{

    responseList : SentimentMeta[];
    scoreCountMap: ScoreCountMap;
    applicationSentimentList: SourceMeta[];
    finalCounter: number;
    token_count: TokenList

}