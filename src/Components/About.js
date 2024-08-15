import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import NavBar from './NavBar'
import NewsLetter from './NewsLetter'
import Footer from './Footer'
import Copyright from './Copyright'


export default function About() {
    return (
        <div>
            <Header />
            <NavBar />
            <AboutUs />
            <NewsLetter />
            <Footer />
            <Copyright />
        </div>
    );
}
function AboutUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <hr />
            <div className='about-us'>
                <div className='about-text' data-aos="fade-right">
                    <h5>Welcome To Phlox</h5>
                    <h1>Who We Are ?</h1>
                    <p>Welcome to Shopping Cart, your go-to destination for a seamless online shopping experience. Our mission is to bring you the latest and greatest products at unbeatable prices, all while providing an intuitive and enjoyable shopping journey.Who We Are At Shopping Cart, we are a team of passionate individuals committed to delivering a curated selection of high-quality products across various categories. From cutting-edge electronics to fashionable accessories, our collection is designed to cater to your unique tastes and preferences.</p>
                    <Link to="/Contact"><button className='about-btn'> Contact Us</button></Link>
                </div>
                <div className='about-img' data-aos="fade-right">
                    <img src='/Images/group-of-young-businesspeople-with-laptop-working-8SHTZUN.png' alt='About-us Img' />
                </div>
            </div>
        </>
    );
}
