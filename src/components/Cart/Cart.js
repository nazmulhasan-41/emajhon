import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    
    let sumWithInitial=0;
    sumWithInitial = cart.reduce(
        (total, prd) =>total+prd.price,0);

    let shipping=0;
    if(sumWithInitial>100)
    {
        shipping=5;
    }
    else{
        shipping=10;
    }

    return (
        <div className='cartFolder'>
            <h3>Order Summary</h3>
            <p>Cart length: {cart.length}</p>
            <p>shipping cost:{shipping}</p>
            <p>Total Price: {sumWithInitial.toFixed(2)}</p>
            <p>Total cost: {sumWithInitial.toFixed(2) + shipping}</p>

            
        </div>
    );
};

export default Cart;