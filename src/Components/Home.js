import React from 'react'
import { useEffect } from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Categories from './Categories'
import NewsLetter from './NewsLetter'
import Footer from './Footer'
import Copyright from './Copyright'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import productsData from './ProductsData'
import { responsive } from './ProductsData'


export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <div>
            <Header />
            <NavBar />
            <Categories />
            <BestProducts />
            <Banner />
            <ArrivalProducts />
            <AccessCtg />
            <Services />
            <NewsLetter />
            <Footer />
            <Copyright />
        </div>
    )
}

function BestProducts() {
    return (
        <div className='best-Products' data-aos="fade-up">
            <div className='products-text'>
                <h1>Best Seller Products</h1>
                <p>There are many variations passages</p>
            </div>
            <div className='product-col' data-aos="fade-up">
                {productsData.filter((product) => product.featured === 'true').map((product) => (
                    <div className='products-container' key={product.id}>
                        <div className='pro-img'>
                            <Link to={`/products/${product.id}`}>
                                <img src={product.image} alt={product.name} /></Link>
                        </div>
                        <div className='pro-desc'>
                            <div>
                                <h2>{product.name}</h2>
                                <h2>${product.price}</h2>
                            </div>
                            <p>{product.description.slice(0, 26)}...</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
function ArrivalProducts() {
    return (
        <div>
            <div className='products-text arrival' data-aos="fade-up">
                <h1>New Arrival Products</h1>
                <p>There are many variations passages</p>
            </div>
            <Carousel responsive={responsive} className='slider' data-aos="fade-up">
                {productsData.filter((product) => product.featured === 'true').map((product) => (
                    <div className='products-container' key={product.id}>
                        <div className='pro-img'>
                            <Link to={`/products/${product.id}`}>
                                <img src={product.image} alt={product.name} /></Link>
                        </div>
                        <div className='pro-desc'>
                            <div>
                                <h2>{product.name}</h2>
                                <h2>${product.price}</h2>
                            </div>
                            <p>{product.description.slice(0, 26)}...</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

function Banner() {
    return (
        <div className='banner' data-aos="fade-up">
            <div className='banner-text ctg-text'>
                <p>Asus Zenbook Duo</p>
                <h1>The Laptop Of Tomorrow</h1>
                <Link to="/Shop"><button className='ctg-btn'>Shop Pre Order</button></Link>
            </div>
            <div className='banner-img'>
                <img src='/Images/Free-Mockup-Scene.png' alt='Banner Text' data-aos="fade-left" />
            </div>
        </div>
    )
}

function AccessCtg() {
    return (
        <div className='access-ctg'>
            <div className='access-ctg-cl1' data-aos="fade-up">
                <div className='ctg-text'>
                    <p>camera Accessories</p>
                    <h1>Launch Party <br />Nice Photos</h1>
                    <Link to="/Shop"><button className='ctg-btn' data-aos="zoom-out">Shop By Category</button></Link>
                </div>
                <div className='ctg-img img1'>
                    <img src='/Images/Mask-Group-15.png' alt='Category Img' />
                </div>
            </div>
            <div className='access-ctg-cl2' data-aos="fade-up">
                <div className='ctg-text'>
                    <p>game Accessories</p>
                    <h1>Enjoy Game<br /> High Tech</h1>
                    <Link to="/Shop"><button className='ctg-btn' data-aos="zoom-out">Shop By Category</button></Link>
                </div>
                <div className='ctg-img img2'>
                    <img src='/Images/Mask-Group-16.png' alt='Category Img' />
                </div>
            </div>
        </div>
    );
}


function Services() {
    return (
        <div className='services' data-aos="fade-up">
            <div className='services-col'>
                <div>
                    <i className="fi fi-rr-globe"></i>
                </div>
                <div>
                    <strong>Free Delivery</strong>
                    <p>Free shipping on all order</p>
                </div>
            </div>
            <div className='services-col'>
                <div>
                    <i className="fi fi-rr-box-check"></i>
                </div>
                <div>
                    <strong>Online support 24/7</strong>
                    <p>Support online 24 hours a day</p>
                </div>
            </div>
            <div className='services-col'>
                <div>
                    <i className="fi fi-rr-money-bills"></i>
                </div>
                <div>
                    <strong>Money return</strong>
                    <p>Back guarantee under 7 days</p>
                </div>
            </div>
            <div className='services-col'>
                <div>
                    <i className="fi fi-rr-gift-card"></i>
                </div>
                <div>
                    <strong>Member discount</strong>
                    <p>Onevery order over $120.00</p>
                </div>
            </div>
        </div>
    )
}