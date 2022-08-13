import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './shop.css';
import Product from '../product/product';
import Cart from '../cart/Cart';



const Shop = () => {
    // console.log(fakeData);
    const fs10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(fs10);
    const [cart, setCart] = useState([]);




    const handleAddproduct = () => {
        console.log('product added');

        const newCart = [...cart, products];
        setCart(newCart);
    }



    return (
        <div className='main'>
            <div className='product-container'>
                {/* <h1>total Product {products.length}</h1> */}

                {
                    products.map(product =>
                        <Product
                            handleAddproduct={handleAddproduct}
                            pd={product}>

                        </Product>)
                }

            </div>
            <div className='card-container'>
                <Cart cart={cart}></Cart>


            </div>



        </div>
    );
};

export default Shop;