import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../product/product';

const ProductDetails = () => {

    const { productkey } = useParams();
    const product = fakeData.find(pd => pd.key === productkey);

    //console.log(product);
    return (
        <div>
            <h4>{productkey} Product Deatils Here</h4>
            <Product pd={product}></Product>

        </div>
    );
};

export default ProductDetails;