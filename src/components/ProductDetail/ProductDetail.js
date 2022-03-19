import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../../fakeData/products';
import Product from '../Product/Product';


const ProductDetail = () => {
    let param = useParams();
    let x = data.find(x => x.key === param.productId);

    return (
        <div>

            <Product
                key={x.key}
                singleProductData={x}
                buttonShow={false}

            ></Product>


        </div>
    );
};

export default ProductDetail;