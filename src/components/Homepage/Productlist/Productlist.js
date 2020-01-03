import React from 'react';
import Product from './Product/Product';
import Title from '../../Title/Title';
import { ProductConsumer } from '../../Context/Context';

const Productlist = () => {
    return(
        <>
            <div className="container py-5">
                <Title name="our" title="products" />
                <div className="row">
                    <ProductConsumer>
                        {(value)=>{
                            return value.products.map(function(product){
                                return <Product key={product.id} product={product}/>
                            })
                        }}
                    </ProductConsumer>
                </div>
            </div>
        </>
    )
};
export default Productlist;
