import { TimeSeries } from './time-series';

export interface TimeSeriesResponse{
    timeSeriesDataList: TimeSeries;
    kewordList: string[];
}