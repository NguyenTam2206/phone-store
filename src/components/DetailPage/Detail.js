import React from 'react';
import { ProductConsumer } from '../Context/Context';
import { Link } from 'react-router-dom';
import { SC_BUTTON } from '../Homepage/Navbar/Styled';

const Detail = () => {
    return (
        <ProductConsumer>
            {(value) => {
                const { id, company, img, info, price, title, inCart } = value.detailProduct
                return (
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-10 mx-auto text-center">
                                <h1 style={{ color: '#38024a' }}>{title}</h1>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-10 max-auto col-md-6 my-3">
                                <img src={img} className="img-fluid" alt="product" />
                            </div>
                            <div className="col-10 max-auto col-md-6 my-3">
                                <h4 style={{ color: '#38024a' }}>Model : {title} </h4>
                                <h6>Made by : <span className="text-uppercase">{company}</span></h6>
                                <h4 style={{ color: 'orange' }}>Price : <span>$ {price}</span></h4>
                                <p>Some info about product :</p>
                                <span className="text-muted">{info}</span>
                                <div className="mt-4">
                                    <Link to="/">
                                        <SC_BUTTON className="mr-2" inputColor="transparent" inputBorder="solid 1pt grey">Back To Products</SC_BUTTON>
                                    </Link>
                                    <SC_BUTTON onClick={() => { value.handleAddToCart(id); value.openModal(id) }} className="mt-2" disabled={inCart ? true : false}>
                                        {inCart ? 'In Cart' : 'Add To Cart'}
                                    </SC_BUTTON>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }}
        </ProductConsumer>
    )
};

export default Detail;