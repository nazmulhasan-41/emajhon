import React, { useEffect, useState } from 'react';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import { data } from '../../fakeData/products';
import { Button, Container, Table } from 'react-bootstrap';
import './Review.css';
import Cart from '../Cart/Cart';
import ReviewItem from './ReviewItem';
import {deleteFromDb} from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import successImage from '../../images/giphy.gif';
import successPage from '../success/SuccessPage';
import SuccessPage from '../success/SuccessPage';



const Review = () => {
  const [revCart, setRevCart] = useState([]);
  const [orderSuccess,setOrderSuccess]=useState(0);

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

 const placeOrderHandler=()=>{
  setRevCart([]);
  clearTheCart();
  setOrderSuccess(1);
}
let image;
if(orderSuccess)
{
  //  image=<img src={successImage} alt="Girl in a jacket" width="500" height="600"></img>;
   image= <SuccessPage></SuccessPage>
}


  return (
    <div>

      <Container style={{ display: 'flex' }}>

        {orderSuccess? image :
        <>
        
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
          <Cart cart={revCart}>

          <Button 
          onClick={placeOrderHandler}
          variant="primary" endIcon={<SendIcon />}
          
          >Place Order</Button>

          </Cart>

        </div>
        </>

          }

      </Container>



    </div>
  );
};

export default Review;