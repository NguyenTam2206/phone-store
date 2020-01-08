import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../../../src/logo.svg';
import { SC_BUTTON, SC_NAVBAR } from './Styled';

const Navbar = () => {
    return (
        <SC_NAVBAR className="navbar navbar-expand">
            <Link to="/">
                <img src={logo} alt="logo" className="navbar-brand" style={{width: '35px'}}></img>
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-3">
                    <Link to="/" className="nav-link">
                        Product
                    </Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <SC_BUTTON>
                    <i className="fas fa-cart-plus"></i>
                </SC_BUTTON>
            </Link>
        </SC_NAVBAR>
    )
};
export default Navbar;
