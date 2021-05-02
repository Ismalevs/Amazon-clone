import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
function Subtotal() {
    const[{basket},dispatch]=useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>
                    Subtotal({basket.length} Articulos): <strong>{value}</strong>  
                     </p>
                        <small className="subtotal_gift">
                            <input type="checkbox"/>esta orden contiene un regalo
                             </small>
                            </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceder a pagar</button>
        </div>
    );
}

export default Subtotal
