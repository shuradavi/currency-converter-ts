import React, { useState } from "react";
import { defaultPanelCurrencies } from "../defaultValues/defaultValues";
import { Valute } from "../types/types";

interface ConverterSideProps {
    title: string;
    inputValue: undefined | number;
    currencies: null | Valute[];
    activeCurrencyName: string;
    exchageCurrencyName: string;
}

const ConverterSide: React.FC<ConverterSideProps> = (props) => {
    const { title, inputValue, currencies, activeCurrencyName, exchageCurrencyName } = props
    
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
            <div className="side_switcher defaut_font">

            </div>
            <div className="side_input_box">
                <input
                    className="side_input"
                />
            </div>
        </div>
    )
}

export default ConverterSide;