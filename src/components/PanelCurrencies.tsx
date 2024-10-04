import React, {FC} from 'react';

type PanelCurrenciesProps = {
    onPanelCurrencies: string[];
    activeCurrencyName: string;
    setActiveCurrencyName: (value: string) => any;
}
const PanelCurrencies: FC<PanelCurrenciesProps> = ({ onPanelCurrencies, activeCurrencyName, setActiveCurrencyName }) => {
    
    const onCurrencyClickHandler = (curName: string) => {
        setActiveCurrencyName(curName)
    }
    return (
        <div className='panel_currencies'>
            {
                (onPanelCurrencies.length !== 0) ?
                    onPanelCurrencies.map((curName, idx) => (
                        <div
                            key={idx}
                            onClick={() => onCurrencyClickHandler(curName)}
                            className={
                                activeCurrencyName === curName
                                    ? 'panel_currencies_item active'
                                    : 'panel_currencies_item'}
                        >
                            {curName}
                        </div>
                    ))
                    :   <div className='panel_currencies_preloader'>заглушка</div>
            }
        <div className='panel_currencies_item'>arr</div>
        </div>
    );
};

export default PanelCurrencies;