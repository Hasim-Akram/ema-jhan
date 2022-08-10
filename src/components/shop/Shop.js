import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './shop.css';
import Product from '../product/product';


const Shop = () => {
    // console.log(fakeData);
    const fs10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(fs10);



    return (
        <div className='shop-container'>
            <div className='product-container'>
                {/* <h1>total Product {products.length}</h1> */}

                {
                    products.map(product => <Product pd={product}></Product>)
                }

            </div>
            <div className='card-container'>
                <h3><button className='btn btn-info'>Add Card</button></h3>
            </div>

        </div>
    );
};

export default Shop;