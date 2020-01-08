import React from 'react';
import Title from '../Title/Title';
import CartColumn from './CartColumn';
import EmtyCart from './EmtyCart';
import { ProductConsumer } from '../Context/Context';
import CartList from './CartList';
import CartTotal from './CartTotal';

const Cart = () => {
    return (
        <ProductConsumer>
            {value => {
                const { cart } = value;
                if (cart.length > 0){
                    return (
                        <div className="container py-5">
                            <Title name="Your" title="Cart" />
                            <CartColumn />
                            <CartList value={value}/>
                            <CartTotal value={value} />
                        </div>
                    )
                } else {
                    return (<EmtyCart />)
                }
            }}

        </ProductConsumer>
    )
};

export default Cart;