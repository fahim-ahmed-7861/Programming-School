import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
        <h1 className='title'>Programming School</h1>
    
        <nav>
            <a href="/home">Home</a>
            <a href="/order">Order Review</a>
            <a href="/manage">Manage Inventory</a>
        </nav>
        </div>
    );
};

export default Header;