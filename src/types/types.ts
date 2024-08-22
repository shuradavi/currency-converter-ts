export type Valute = {
    ID: string,
    NumCode: string,
    CharCode: string,
    Nominal: number,
    Name: string,
    Value: number,
    Previous: number
}

export type FetchData = {
    Date: Date,
    PreviousDate: Date,
    PreviousURL: string,
    Timestamp: Date,
    Valute: { [key: string]: Valute}
}