import { Button } from '@mui/material';
import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';



const Cart = (props) => {
    const cart = props.cart;

    let sumWithInitial = 0;
    sumWithInitial = cart.reduce(
        (total, prd) => total + (prd.price)* (prd.count), 0);

    let shipping = 0;
    if (sumWithInitial === 0) {
        shipping = 0;
    }
    else if (sumWithInitial > 0 && sumWithInitial < 100) {
        shipping = 10;
    }
    else {
        shipping = 5;
    }

    return (
        <div className='cartFolder'>
            <h3>Order Summary</h3>
            <p>Cart length: {cart.length}</p>
            <p>shipping cost:{shipping}</p>
            <p>Total Price: {sumWithInitial.toFixed(2)}</p>
            <p>Total cost: {(shipping + sumWithInitial).toFixed(2)}</p>


            <div className="shiftRight">
                {
                    props.children
                }




            </div>

        </div>
    );
};

export default Cart;