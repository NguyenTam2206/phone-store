import React from 'react';

const CartItem = (props) => {
    // const item = props.item;
    // const value = props.value;
    const {item, value } = props;
    const {id, title, img, price, total, count} = item;
    const { increment, decrement, removeItem } = value;
    return (
        <div className="row my-2 text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width : '5rem', height : '5rem'}} alt="product" className="img-fluid" />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Product : </span> {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Price : </span>${price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black max-1" onClick={()=>decrement(id)}>-</span>
                        <span style={{fontSize : '1rem', padding: "0rem .8rem"}}>{count}</span>
                        <span className="btn btn-black max-1" onClick={()=>increment(id)}>+</span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <i className="fas fa-trash" style={{color: 'orange'}} onClick={()=>removeItem(id)}></i>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <b className="d-lg-none">Total : </b>${total}
            </div>
        </div>
    )
};

export default CartItem;