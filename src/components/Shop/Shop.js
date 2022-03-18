import React, { useState } from 'react';
import { data } from  '../../fakeData/products';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products,setProducts]= useState(data.slice(0,10));
    const [cart,setCart]=useState([]);
    
    const addProductHandler=(products)=>{
        const newCart=[...cart,products];
        setCart(newCart);

    }

    return (
        <div className='shopContainer'>
            <div className='productContainer'>

                <ul>
                
                {products.map(x=>
                    <Product 
                    addProductHandler={addProductHandler}
                    singleProductData={x}
                    
                    ></Product>
                
                )}

                </ul>

            </div>
            <div className='cartContainer'>
                <Cart cart={cart}></Cart>

            </div>
            
        </div>
    );
};

export default Shop;