import React, { useEffect, useState } from 'react';
import { data } from  '../../fakeData/products';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products,setProducts]= useState(data.slice(0,10));
    const [cart,setCart]=useState([]);


    useEffect(() => {

        let savedCart = getStoredCart();
        var pdKeys = Object.keys(savedCart);
        //var pdCount = pdKeys.map(key => savedCart[key]);
    
        let cartProducts = pdKeys.map(key => {
          let product = data.find(x => x.key === key)
          product.count = savedCart[key];
          return product;
    
        });
    
        setCart(cartProducts);

      }, []);

    const addProductHandler=(products)=>{

        //check weather the product is already added: then increase count
        let inCart=cart.find(x=>x.key===products.key);
        if(inCart)
        {
            inCart.count+=1;
            let otherProducts=cart.filter(x=>x.key!==products.key);
            let mergedCart=[...otherProducts, inCart];
            setCart(mergedCart);
            
        }
        else{
            //if not added then count to 1
            products.count=1;
            const newCart=[...cart,products];
            setCart(newCart);
        }

        addToDb(products.key);

    }

    return (
        <div className='shopContainer'>
            <div className='productContainer'>

                <ul>
                
                {products.map(x=>
                    <Product 
                    addProductHandler={addProductHandler}
                    singleProductData={x}
                    buttonShow={true}
                    
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