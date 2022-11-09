import React from 'react';
import './header.css';
import { Outlet, Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className='header'>
                <h1>Ema Jhonson Project By Hasim-Akram</h1>

            </div>

            <nav className='menu'>

                <ul>
                    <li>
                        <Link to="/"> Shop</Link>
                    </li>


                    <li>
                        <Link to="/Review">Rivew Order</Link>
                    </li>
                    <li>
                        <Link to="/Inventroy">Manage Inventory</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />

            {/* <nav className='menu'>
                <a href='/Shop'>Shop</a>
                <a href='/Review'>Order review</a>
                <a href='/Inventory'>Manage Inventory</a>

            </nav> */}


        </>
    );
};

export default Header;