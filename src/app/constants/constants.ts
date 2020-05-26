import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
    public readonly API_ACTION: string = 'sentimentAnalysis';
    public readonly PARAM_KEYWORD: string = 'keyword';

    public readonly COLORS = {
        Negative: "#f75e5e",
        Positive: "#4fc462",
        Neutral: "#7c92f7"
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

    public readonly WC_COLORS={
        excellent: "#3d994c",
        good: "#4fc462",
        general: "#7c92f7",
        bad: "#f75e5e",
        ugly: "#b33434"
    }

}