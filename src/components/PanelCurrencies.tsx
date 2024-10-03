import React, {FC} from 'react';

type PanelCurrenciesProps = {
    onPanelCurrencies: string[]
}
const PanelCurrencies: FC<PanelCurrenciesProps> = ({onPanelCurrencies}) => {
    return (
        <div className='panel_currencies'>
            {
                (onPanelCurrencies.length !== 0) ?
                    onPanelCurrencies.map((curName, idx) => (
                        <div
                            key={idx}
                            className='panel_currencies_item'
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