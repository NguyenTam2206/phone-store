import React from 'react';
import { SC_BUTTON } from '../Homepage/Navbar/Styled';

const CartTotal = ({value}) => {
    const { cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right">
                        <SC_BUTTON inputColor="transparent" inoputBorder="solid 1pt #38024a" style={{paddingLeft : '30px', paddingRight : '30px'}} onClick ={()=>clearCart()}>Clear Cart</SC_BUTTON>
                        <h5 className="mt-3">SubTotal : ${cartSubTotal}</h5>
                        <h5>Tax : ${cartTax}</h5>
                        <h5>Total : ${cartTotal}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartTotal;