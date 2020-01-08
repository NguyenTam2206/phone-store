import React from 'react';
import { SC_BUTTON } from '../Homepage/Navbar/Styled';
import Title from '../Title/Title';
import { Link } from 'react-router-dom';


const PageNotFound = () => {
    return (
        <div className="container py-5">
            <Title name="Page" title="Not Found" />
            <div className="text-center mt-5">
                <Link to="/">
                    <SC_BUTTON>Back To Home</SC_BUTTON>
                </Link>
            </div>
        </div>
    )
};

export default PageNotFound;