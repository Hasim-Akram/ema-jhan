import React from 'react';
import logo from '../../images/logo.png';
import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1>Ema Jhonson Project By Hasim-Akram</h1>
            <img src={logo} alt="logo" />
            <nav className='menu'>
                <a href='/shop'>Shop</a>
                <a href='review'>Order review</a>
                <a href='manage'>Manage Inventory</a>

            </nav>

        </div>
    );
};

export default Header;