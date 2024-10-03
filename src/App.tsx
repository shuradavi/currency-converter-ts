import React, { useEffect, useState } from 'react';
import './App.css'
import { getData, pathToAPI } from './functions/API';
import { Valute } from './types/types';
import { getAnArrayOfCurrencies, sortTheArrayOfCurrensies } from './functions/dataProcessing';
import ConverterSide from './components/ConverterSide';

function App() {
    const [currencies, setCurrencies] = useState<Valute[]>([]);  // Список наименований валют
    const [fromCurrencyName, setFromCurrencyName] = useState<string>('RUR');    // Имя меняемой валюты
    const [fromValue, setFromValue] = useState<number>(1);  // Количество меняемой валюты
	const [toCurrencyName, setToCurrencyName] = useState<string>('USD');    // Имя получаемой валюты
	const [toValue, setToValue] = useState<undefined | number>();   // Количество получаемой валюты
    useEffect(() => {
        if (currencies.length == 0) {
            getData(pathToAPI)        // решить проблему с memory leak
                .then(res => {
                    const arrayOfCurrencies = getAnArrayOfCurrencies(res)
                    const sortedArrayOfCurrencies = sortTheArrayOfCurrensies(arrayOfCurrencies)    
                    setCurrencies(sortedArrayOfCurrencies);
                })
        }
        onChangeFromValue(fromValue)
    }, [fromCurrencyName, toCurrencyName])

    function calcExchangeRates(): number[] {
            const fromCurrencyData = currencies.find(cur => cur.CharCode === fromCurrencyName)!
            const toCurrencyData = currencies.find(cur => cur.CharCode === toCurrencyName)!
            const rateFrom = fromCurrencyData.Value / fromCurrencyData.Nominal
            const rateTo = toCurrencyData.Value / toCurrencyData.Nominal
            return [rateFrom, rateTo]
    }
    const onChangeFromValue = (value: number) => {
        if (currencies.length !== 0) {
            const exchangeRatesArr = calcExchangeRates();
            const result = value * (exchangeRatesArr[0] / exchangeRatesArr[1])
            Number.isInteger(result)
                ? setToValue(result)
                : setToValue(Number(result.toFixed(4)))
        }
    }

    const onChangeToValue = (value: number) => {
        if (currencies.length !== 0) {
            const exchangeRatesArr = calcExchangeRates();
            const result = value * (exchangeRatesArr[1] / exchangeRatesArr[0])
            Number.isInteger(result)
                ? setFromValue(result)
                : setFromValue(Number(result.toFixed(4)))
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
                        onChangeValue={onChangeFromValue}
                        setActiveCurrencyName={setFromCurrencyName}
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
                        exchageCurrencyName={fromCurrencyName}
                        onChangeValue={onChangeToValue}
                        setActiveCurrencyName={setFromCurrencyName}
                    />
                </div>
            </div>
    </>
  )
}

export default App
