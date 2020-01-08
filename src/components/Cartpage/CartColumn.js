import React from 'react';


const CartColumn = () => {
    return (
            <div className="text-center d-none d-lg-block">
                <div className="row">
                    <div className="col-10 mx-auto col-lg-2">
                        <p>Products</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p>Name of Product</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p>Price</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p>Quatity</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p>Remove</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p>Total</p>
                    </div>
                </div>
            </div>
    )
};

export default CartColumn;