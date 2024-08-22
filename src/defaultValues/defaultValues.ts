import { Valute } from "../types/types";

export const defaultPanelCurrencies: string[] = ['RUR', 'USD', 'EUR', 'GBP']    // Валюты на главное панели по умолчанию
export const blackListOfCurrencies = ['USD', 'EUR', 'GBP', 'VND', 'HKD', 'GEL', 'EGP', 'IDR', 'QAR', 'NZD', 'XDR', 'THB', 'AED']; // черный список валют
export const RUR: Valute = {
	ID: 'R1',
	Name: 'Российский рубль',
	CharCode: 'RUR',
	Nominal: 1,
	NumCode: '001',
    Value: 1,
    Previous: 1
}   // Российски рубль
