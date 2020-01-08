import React from 'react';
import CartItem from './CartItem';

const CartList = (props) => {
    const cart = props.value.cart;
    const value = props.value;
    return (
        <>
            {
                cart.map(function(item){
                    return (
                        <CartItem key={item.id} item={item} value={value}/>
                    )
                })
            }
            
        </>
    )
};

export default CartList;