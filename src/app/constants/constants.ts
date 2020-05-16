import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
    public readonly API_ACTION: string = 'sentimentAnalysis';
    public readonly PARAM_KEYWORD: string = 'keyword';

    public readonly COLORS = {
        Negative: "#e06060",
        Positive: "#60e063",
        Neutral: "#4287f5"
    }

    public readonly SOURCE_MAP = {
        YO: "Youtube",
        TU: "Tumbler",
        RE: "Reddit",
        TW: "Twitter"
    }

    public readonly CATEGORIES = {
        POS: "Positive",
        NEUT: "Neutral",
        NEG: "Negative"
    }

}