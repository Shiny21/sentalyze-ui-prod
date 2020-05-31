import { Token } from './token';

export interface TokenList {
    strong_positive: Token[];
    positive: Token[];
    neutral: Token[];
    negative: Token[];
    strong_negative: Token[];
}