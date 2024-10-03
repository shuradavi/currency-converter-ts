import React, { useState } from "react";
import { defaultPanelCurrencies } from "../defaultValues/defaultValues";
import { Valute } from "../types/types";
import PanelCurrencies from "./PanelCurrencies";
type ConverterSideProps = {
    title: string;
    inputValue: undefined | number;
    currencies: null | Valute[];
    activeCurrencyName: string;
    exchageCurrencyName: string;
    onChangeValue: (value: number) => any;
    setActiveCurrencyName: (value: string) => any;
}

const ConverterSide: React.FC<ConverterSideProps> = (props) => {
    const { title, inputValue, currencies, activeCurrencyName, exchageCurrencyName, onChangeValue, setActiveCurrencyName } = props
    
    const [onPanelCurrencies, setOnPanelCurrencies] = useState<string[]>(defaultPanelCurrencies); // Наименования валют на панели
    const [isFormOpen, setFormOpen] = useState<boolean>(false); // Сосояние формы с таблицей валют

    const onSelectClickHandler = () => {
        if (!isFormOpen) {
            setFormOpen(true)
        }
    }
    
    const closeForm = () => {
        if (isFormOpen) {
            setFormOpen(false)
        }
    }

    const onPanelCurrencyClickHandler = (cur: string) => {
    }

    return (
        <div className="converter_side">
            <div className="side_title  title_font">
                {title}
            </div>
            <div className="side_panel_currencies defaut_font">
                <PanelCurrencies onPanelCurrencies={onPanelCurrencies} />
            </div>
            <div className="side_input_wrapper">
                <input
                    className="side_input"
                />
            </div>
        </div>
    )
}

export default ConverterSide;