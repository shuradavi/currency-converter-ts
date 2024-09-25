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
            getData(pathToAPI)        // решить проблему с memory leak
                .then(res => {
                    const arrayOfCurrencies = getAnArrayOfCurrencies(res)
                    const sortedArrayOfCurrencies = sortTheArrayOfCurrensies(arrayOfCurrencies)    
                    setCurrencies(sortedArrayOfCurrencies);
                })
        }
        // onChangeFromValue(fromValue)
    })  

    const onChangeFromValue = (value: number) => {
        if (currencies !== null && Boolean(currencies.length)) {
            const fromCurrencyData = currencies.find(cur => cur.CharCode === fromCurrencyName)!;
            const toCurrencyData = currencies.find(cur => cur.CharCode === toCurrencyName)!
            const rateFrom = fromCurrencyData.Value / fromCurrencyData.Nominal
        }
    }
   
    return (
        <>
            <h1>Конвертер валют</h1>
            <div className='converter_main_wrapper'>
                <div className='converter_side_wrapper'> 
                    <ConverterSide title={'У меня есть'}
                        inputValue={fromValue}
                        currencies={currencies}
                        activeCurrencyName={fromCurrencyName}
                        exchageCurrencyName={toCurrencyName}
                    />
			  	</div>
                <div className="converter_center_wrapper">
                    <div className="converter_center_reverse"></div>
                </div>
                <div className='converter_side_wrapper'>
                    <ConverterSide title={'Хочу приобрести'}
                     inputValue={toValue}
                     currencies={currencies}
                     activeCurrencyName={toCurrencyName}
                     exchageCurrencyName={fromCurrencyName}/>
                </div>
            </div>
    </>
  )
}

export default App
