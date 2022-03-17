import React, { useState } from 'react';
import { data } from  '../../fakeData/products';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    //console.log(data);
    const [products,setProducts]= useState(data.slice(0,10));


    return (
        <div className='shopContainer'>
            <div className='productContainer'>

                <ul>
                
                {products.map(x=>
                    <Product singleProductData={x}></Product>
                
                )}

                </ul>

            </div>
            <div className='cartContainer'>
                This is Cart section 

            </div>
            
        </div>
    );
};

export default Shop;