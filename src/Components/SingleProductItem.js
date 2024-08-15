import React, { useEffect, useState } from 'react'
import Header from './Header'
import NavBar from './NavBar'
import NewsLetter from './NewsLetter'
import Footer from './Footer'
import Copyright from './Copyright'
import { Link, useParams } from 'react-router-dom'
import productsData from './ProductsData'
import { useCart } from './CartContext'

export default function SingleProductItem() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Header />
            <NavBar />
            <ProductItem />
            <NewsLetter />
            <Footer />
            <Copyright />
        </div>
    );
}

function ProductItem() {
    const { productId } = useParams();
    const product = productsData.find(product => product.id === productId);
    const [selectedColor, setSelectedColor] = useState(product.color[0]);
    const [quantity, setQuantity] = useState(1)
    const { addToCart } = useCart();

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    }
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    }
    const handleAddToCart = () => {
        addToCart(product, product.image, product.price, quantity, selectedColor);
    }

    return (
        <>
            <hr />
            <div className='product-item'>
                <div className='product-img'>
                    <img src={product.image} alt='Productimg' />
                </div>
                <div className='product-desc'>
                    <h1>{product.name}</h1>
                    <h3>${product.price}</h3>
                    <p>{product.description}</p>
                    <div className='btns'>
                        <div className='quantity-controls'>
                            <button onClick={handleDecrement}>-</button>
                            <span>{quantity}</span>
                            <button onClick={handleIncrement}>+</button>
                        </div>
                        <div>
                            <Link to="/Cart">
                                <button className='about-btn' onClick={handleAddToCart}>Add to Cart</button>
                            </Link>
                        </div>
                    </div>
                    <div className='color flex'>
                        <h4>Color:</h4>
                        <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                            {product.color.map((color, index) => (
                                <option key={index} value={color}>{color}</option>
                            ))}
                        </select>
                    </div>
                    <div className='sku flex'>
                        <h4>SKU</h4>
                        <p>{product.SKU}</p>
                    </div>
                    <div className='brand flex'>
                        <h4>Brand:</h4>
                        <p>{product.Brand}</p>
                    </div>
                    <div className='flex'>
                        <h4>Category</h4>
                        <p>{product.category}</p>
                    </div>
                </div>
            </div >
        </>
    );
}