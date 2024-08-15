import React from 'react'
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isLinkActive = (path) => {
        return location.pathname === path ? 'active' : ''
    };

    return (
        <div className='nav'>
            <div className='nav-bar'>
                <div className='logo' style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/Images/trolley.png" height={50} width={50} alt='Hero-img' /> 
                        <h4> &nbsp; Shopping Cart</h4>
                </div>
                <div className={isMenuOpen ? 'nav-list active' : 'nav-list'}>
                    <ul>
                        <li><Link to='/' className={isLinkActive('/')}>Home</Link></li>
                        <li><Link to='/About' className={isLinkActive('/About')}>About</Link></li>
                        <li><Link to='/Shop' className={isLinkActive('/Shop')}>Shop</Link></li>
                        <li><Link to='/Contact' className={isLinkActive('/Contact')}>Contact</Link></li>
                        <li><Link to='/' id='close' onClick={() => setIsMenuOpen(false)}><i className="fi fi-rr-circle-xmark"></i></Link></li>
                    </ul>
                </div>
            </div>
            <div className='nav-items'>
                <div className='login'>
                    <Link to="/Login"><i className="fi fi-rr-user"></i>
                        <p>Login</p></Link>
                </div>
                <div className='search-bar'>
                    <Link to="/SearchBar"><i className="fi fi-rr-search"></i>
                        <p>Search</p></Link>
                </div>
                <div className='basket'>
                    <Link to="/Cart"><i className="fi fi-rr-shopping-bag-add"></i>
                        <p>Basket</p></Link>
                </div>
            </div>
            <div id='shopping-bag'>
                <Link to="/Cart"><i className="fi fi-rr-shopping-bag"></i></Link>
            </div>
            <div id='mobile' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <i className="fi fi-rr-menu-burger"></i>
            </div>
        </div>
    )
}