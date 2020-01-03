import React from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../../Context/Context';
import { SC_PRODUCT } from './Styled';
import { SC_BUTTON } from '../../Navbar/Styled';
import PropTypes from 'prop-types';

const Product = (props) => {
    const { id, title, img, inCart, price } = props.product;
    return (
        <SC_PRODUCT className="col-9 mx-auto my-3 col-lg-3 col-md-6">
            <div className="card">
                <ProductConsumer>
                    { value => {
                        return (
                        <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                            <Link to="/detail">
                                <img src={img} alt="product" className="card-img-top" />
                            </Link>
                            <SC_BUTTON onClick={() => {value.openModal(id); value.handleAddToCart(id)}} className="card-btn" disabled={inCart ? true : false} 
                            >
                                {inCart ? 'In Cart' : <i className="fas fa-cart-plus" />}
                            </SC_BUTTON>
                        </div>
                    )}}
                </ProductConsumer>
                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">{title}</p>
                    <h5 className="mr-1">$ {price}</h5>
                </div>
            </div>
        </SC_PRODUCT>
    )
};

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        img: PropTypes.string,
        inCart: PropTypes.bool,
        price: PropTypes.number
    }).isRequired
}

export default Product;