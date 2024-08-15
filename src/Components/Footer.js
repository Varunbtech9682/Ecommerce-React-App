import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-col' data-aos="fade-left">
                <img src="/Images/trolley.png" height={50} width={50} alt='Hero-img' /> 
                <h4> &nbsp; Shopping Cart</h4>
            </div>
            <div className='footer-col' data-aos="fade-left">
                <strong>Visit Link</strong>
                <Link to='/Shop'>Shop</Link>
                <Link to='/'>Privacy</Link>
                <Link to='/'>Terms & Conditions</Link>
            </div>
            <div className='footer-col' data-aos="fade-left">
                <strong>Company</strong>
                <Link to='/'>Home</Link>
                <Link to='/About'>About Us</Link>
                <Link to='/Contact'>Contact Us</Link>
            </div>
            <div className='footer-col col4' data-aos="fade-left">
                <strong>Contact</strong>
                <p>+91 9988776655</p>
                <p>Info@shoppingcart.com</p>
            </div>
            <div className='footer-col' data-aos="fade-left">
                <strong>Address</strong>
                <p>254, South East Asia<br />
                    Mannargudi City <br />Thiruvarur, TN 612803</p>
            </div>
        </div>
    )
}
