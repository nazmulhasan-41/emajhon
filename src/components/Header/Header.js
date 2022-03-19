import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='Header'>
            <img src={logo}  alt="Italian Trulli"/>
            <nav>
            <Link to="/shop">Shop</Link>
            <Link to="/review">Review</Link>

                {/* <a href="/shop">Shop</a>
                <a href="/review">Review</a>
                <a href="/notfound">Not Found</a> */}
            </nav>

        </div>
    );
};

export default Header;