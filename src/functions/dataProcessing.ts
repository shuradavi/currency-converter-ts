import { FetchData, Valute } from "../types/types";
import { blackListOfCurrencies, RUR } from "../defaultValues/defaultValues";

export function getAnArrayOfCurrencies(data: FetchData): Valute[] {
    const arrayOfCurrencies: Valute[] = Object.values(data.Valute)
    return arrayOfCurrencies
}

export function sortTheArrayOfCurrensies(curs: Valute[]): Valute[] {
    const favoriteCurrencies: Valute[] = curs
        .filter(cur => cur.CharCode === 'USD' || cur.CharCode === 'EUR' || cur.CharCode === 'GBP')
        .sort((a, b) => a.Name.localeCompare(b.Name))
        .map(cur => {
            if (cur.Name === 'Фунт стерлингов Соединенного королевства') {
                cur.Name = 'Фунт стерлингов'
            } return cur
        })
    const otherCurrencies: Valute[] = curs
        .filter(cur => !blackListOfCurrencies.includes(cur.CharCode))
        .sort((a, b) => a.Name.localeCompare(b.Name))
    return [RUR, ...favoriteCurrencies, ...otherCurrencies]
}