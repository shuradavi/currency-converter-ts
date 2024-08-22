import React, { useState } from "react";
import { defaultPanelCurrencies } from "../defaultValues/defaultValues";

const ConverterSide = () => {
    const [onPanelCurrencies, setOnPanelCurrencies] = useState<string[]>(defaultPanelCurrencies); // Наименования валют на панели
    const [isFormOpen, setFormOpen] = useState<boolean>(false); // Сосояние формы с таблицей валют

    return (
        <div className="converter_side">
            <div className="side_title">
                Title
            </div>
            <div className="side_switcher">

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