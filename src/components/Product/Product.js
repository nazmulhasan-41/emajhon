import React, { useState } from 'react';
import './Product.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';



const Product = (props) => {
    const [pdDetails, setPdDetails] = useState(props.singleProductData);
    return (
        <div className='productCon'>
            <div className='imageField'>
                <img src={pdDetails.img} />


            </div>
            <div className='detailsField'>

                <h5><Link to={`/product/${pdDetails.key}`} >{pdDetails.name}</Link> </h5>
                <div className='des'>
                    <div className='left'>
                        <h6>category: {pdDetails.category}</h6>
                        <h6>price: {pdDetails.price}</h6>
                        <h5>only {pdDetails.stock} left in stock - order soon</h5>

                    </div>
                    <div className='rating'>
                        <Stack spacing={1}>
                            <Rating size="small" name="half-rating-read" defaultValue={parseInt(pdDetails.star)} precision={0.5} readOnly />
                        </Stack>

                        <div className='features'>
                            <div className='ftitle'>
                                Features

                            </div>

                            <div className='listCont'>
                                {
                                    pdDetails.features.map(x => <li key={x.key} className='featureLists'>{x.description}: {x.value}</li>)
                                }

                            </div>

                        </div>
                    </div>


                </div>
                <div className='buttonClass'>
                    {
                        props.buttonShow && 
                        
                        <Button
                            className='productButton'
                            variant="contained"
                            onClick={() => props.addProductHandler(pdDetails)}
                        >
                            <ShoppingCartIcon />
                            Add to Cart
                        </Button>
                    }


                </div>

            </div>
        </div>
    );
};

export default Product;