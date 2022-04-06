import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { Context } from '../../App';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const [loggedInUser,setLoggedInUser]=useContext(Context);
    const signOutHandler=()=>{
        // console.log('clicked')
        setLoggedInUser({});

    }
    return (
        <div className='Header'>
            <img src={logo}  alt="Italian Trulli"/>
            <nav>
            <Link to="/shop">Shop</Link>
            <Link to="/review">Review</Link>
            <Button variant="secondary"
            onClick={signOutHandler}
            >Sign Out</Button>

                {/* <a href="/shop">Shop</a>
                <a href="/review">Review</a>
                <a href="/notfound">Not Found</a> */}
            </nav>

        </div>
    );
};

export default Header;