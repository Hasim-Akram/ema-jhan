import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    //    const total = cart.reduce((total, pdr) => total + pdr.price, 0);

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;

    }


    return (
        <div>
            <h5>Product summary</h5>

            <p>Iteams Ordered {cart.length}</p>
            <p>Total Price : {total} </p>
            <button>Buy Now</button>
        </div>
    );
};

export default Cart;