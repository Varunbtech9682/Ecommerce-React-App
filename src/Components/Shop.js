import React, { useState, useEffect } from 'react'
import Header from './Header'
import NavBar from './NavBar'
import NewsLetter from './NewsLetter'
import Footer from './Footer'
import Copyright from './Copyright'
import productsData from './ProductsData'
import { Link } from 'react-router-dom'

export default function Shop() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Header />
            <NavBar />
            <Products />
            <NewsLetter />
            <Footer />
            <Copyright />
        </div>
    )
}

function Products() {
    return (
        <>
            <hr />
            <div className='products'>
                <div className='products-data'>
                    <Sorting />
                </div >
            </div>
        </>
    );
}


function Sorting() {
    const [sortBy, setSortBy] = useState('default');
    const [sortedProducts, setSortedProducts] = useState([...productsData]);

    const handleSorting = (e) => {
        const selectedSortBy = e.target.value;
        setSortBy(selectedSortBy);
        let newSortedProducts = [...sortedProducts];

        if (selectedSortBy === "default") {
            newSortedProducts = [...productsData];
        } else if (selectedSortBy === "alphabetic") {
            newSortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (selectedSortBy === "lowPrice") {
            newSortedProducts.sort((a, b) => a.price - b.price);
        } else if (selectedSortBy === "highPrice") {
            newSortedProducts.sort((a, b) => b.price - a.price);
        }
        setSortedProducts(newSortedProducts);
    }
    return (
        <div>
            <div className='product-list'>
                <h1>Featured Products</h1>
                <select className='sorting' value={sortBy} onChange={handleSorting}>
                    <option value="default">Default</option>
                    <option value="#" disabled></option>
                    <option value="alphabetic">Alphabetic</option>
                    <option value="#" disabled></option>
                    <option value="lowPrice">Low Price</option>
                    <option value="#" disabled></option>
                    <option value="highPrice">High Price</option>
                </select>
            </div>
            <div>
                <ProductsData sortedProducts={sortedProducts} />
            </div>
        </div>
    );
}

function ProductsData({ sortedProducts }) {
    return (
        <div className='pro-col'>
            {sortedProducts.map((product) => (
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
    );
}
