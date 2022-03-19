import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../utilities/fakedb';
import { data } from '../../fakeData/products';
import { Container, Table } from 'react-bootstrap';
import './Review.css';
import Cart from '../Cart/Cart';
import ReviewItem from './ReviewItem';
import {deleteFromDb} from '../../utilities/fakedb';

const Review = () => {
  const [revCart, setRevCart] = useState([]);

  const deleteItem=(key)=>{
    //delete item from cart local storage
    const newCart=revCart.filter(x=>x.key!==key);
    setRevCart(newCart);
    deleteFromDb(key);
     
  }

  useEffect(() => {

    let savedCart = getStoredCart();
    var pdKeys = Object.keys(savedCart);
    var pdCount = pdKeys.map(key => savedCart[key]);

    let cartProducts = pdKeys.map(key => {
      let product = data.find(x => x.key === key)
      product.count = savedCart[key];
      return product;

    });

    setRevCart(cartProducts);
  }, []);

 

  return (
    <div>

      <Container style={{ display: 'flex' }}>

        <Table style={{ width: '70%', paddingRight: '10px' }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>


            {

              revCart.map((x, index) =>
              <ReviewItem deleteItem={deleteItem} x={x} index={index}></ReviewItem>
                
              )
            }


          </tbody>
        </Table>
        <div style={{ paddingLeft: '10px' }}>
          <Cart cart={revCart}></Cart>

        </div>

      </Container>



    </div>
  );
};

export default Review;