import React, { useEffect, useState } from 'react';
import './App.css'
import { getData, pathToAPI } from './functions/API';
import { Valute } from './types/types';
import { getAnArrayOfCurrencies, sortTheArrayOfCurrensies } from './functions/dataProcessing';
import ConverterSide from './components/ConverterSide';

function App() {
    const [currencies, setCurrencies] = useState<null | Valute[]>(null);  // Список наименований валют
    
    const [fromCurrencyName, setFromCurrencyName] = useState<string>('RUR');    // Имя меняемой валюты
    const [fromValue, setFromValue] = useState<number>(1);  // Количество меняемой валюты

	const [toCurrencyName, setToCurrencyName] = useState<string>('USD');    // Имя получаемой валюты
	const [toValue, setToValue] = useState<undefined | number>();   // Количество получаемой валюты
    useEffect(() => {
        if (!Boolean(currencies)) {
            getData(pathToAPI)
                .then(res => {
                    const arrayOfCurrencies: Valute[] = getAnArrayOfCurrencies(res)
                    const sortedArrayOfCurrencies: Valute[] = sortTheArrayOfCurrensies(arrayOfCurrencies)    
                    setCurrencies(sortedArrayOfCurrencies);
                })
        }
        // onChangeFromValue(fromValue)
    })  

    // const onChangeFromValue = (value) => {
	// 	if (Boolean(currencies) && Boolean(currencies.length)) {
	// 		const fromCurrencyRate = currencies.find(cur => cur.CharCode === fromCurrencyName);
	// 		const toCurrencyRate = currencies.find(cur => cur.CharCode === toCurrencyName);
	// 		const rateFrom = fromCurrencyRate.Value / fromCurrencyRate.Nominal; //		Курс входящей валюты к рублю
	// 		const rateTo = toCurrencyRate.Value / toCurrencyRate.Nominal;
	// 		const result = value * (rateFrom / rateTo)
	// 			Number.isInteger(result)
	// 			?	setToValue(result)
	// 			:	setToValue(result.toFixed(4))
	// 		setFromValue(value); 
	// 	}
	// }
    return (
        <>
            <h1>Конвертер валют</h1>
            <div className='converter_main_wrapper'>
                <div className='converter_side_wrapper'> 
                    <ConverterSide />
			  	</div>
                <div className="converter_center_wrapper">
                    <div className="converter_center_reverse"></div>
                </div>
                <div className='converter_side_wrapper'>
                    <ConverterSide />
                </div>
            </div>
    </>
  )
}

export default App
