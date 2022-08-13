import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';// <-- import styles to be used
import './product.css';

const Product = (props) => {
    return (
        <div className='product'>
            <div className='image'>
                <img src={props.pd.img} alt='product image' />

            </div>
            <div className='detail'>
                <h4>{props.pd.name}</h4>
                <br />
                <p>By {props.pd.seller}</p>
                <br />
                <p>$ {props.pd.price}</p>
                <br />
                <p>only {props.pd.stock} left in stock order soon</p>
                <br />
                <button className='cartbutton' onClick={() => props.handleAddproduct(props.pd)} >Add to Cart</button>
            </div>

        </div >
    );
};

export default Product;