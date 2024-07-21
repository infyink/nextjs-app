export type Preset =
    | 'today'
    | 'yesterday'
    | 'thisWeek'
    | 'past7Days'
;

export interface DateRange {
    startDate: Date | string;
    endDate: Date | string;
}


export type TableNames =
    | 'R-1'
    | 'T2'
    | 'T3'
    | 'T4'
;