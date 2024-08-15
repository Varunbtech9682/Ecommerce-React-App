import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Header from './Header'
import NewsLetter from './NewsLetter'
import Footer from './Footer'
import Copyright from './Copyright'
import { useCart } from './CartContext'
import { Link } from 'react-router-dom'

export default function Cart() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Header />
            <NavBar />
            <CartPage />
            <NewsLetter />
            <Footer />
            <Copyright />
        </div>
    )
}

function CartPage() {
    const { cartItems } = useCart();
    return (
        <>
            <hr />
            <div className='cart-container'>
                <h1>Cart</h1>
                <table>
                    <thead>
                        <tr>
                            <td>Remove</td>
                            <td>Image</td>
                            <td>Product</td>
                            <td>Color</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>SubTotal</td>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item, index) => (
                            <tr key={index}>
                                <td><Link to="/"><i className="fi fi-rr-circle-xmark"></i></Link></td>
                                <td><img src={item.image} alt={item.product.name} /></td>
                                <td>{item.product.name}</td>
                                <td>{item.color}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price * item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

