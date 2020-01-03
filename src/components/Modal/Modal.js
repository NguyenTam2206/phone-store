import React from 'react';
import { ProductConsumer } from '../Context/Context';
import { SC_MODAL } from './styled';
import { SC_BUTTON } from '../Homepage/Navbar/Styled';
import { Link } from 'react-router-dom';

const Modal = () => {
    return (
        <ProductConsumer>
            {value => {
                const { modalOpen, closeModal } = value;
                const { id, title, price, img } = value.modalProduct;
                if (!modalOpen) {
                    return null;
                }
                else {
                    return (
                        <SC_MODAL>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 col-md-6 col-lg-4 mx-auto text-center p-5">
                                        <h5>Item added to the cart</h5>
                                        <img src={img} alt="product" className="img-fluid" />
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">Price : $ {price}</h5>
                                        <Link to="/">
                                            <SC_BUTTON onClick={() => closeModal()} className="mr-2" inputColor="transparent" inputBorder="solid 1pt grey">
                                                Buy More
                                            </SC_BUTTON>
                                        </Link>
                                        <Link to="/cart">
                                            <SC_BUTTON className="mt-2" onClick={() => closeModal()}>
                                                Go To Cart
                                            </SC_BUTTON>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SC_MODAL>
                    )
                }
            }}
        </ProductConsumer>
    )
};

export default Modal;