import React, { useState } from 'react'
import productsData from './ProductsData';
import { Link } from 'react-router-dom';

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);

    const handleSearch = (query) => {
        const filtered = productsData.filter(product => product.name.toLowerCase().includes(query.toLowerCase()) || product.description.toLowerCase().includes(query.toLowerCase()));
        setFilteredItems(filtered)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchQuery)
    }
    const handleClearSearch = () => {
        setSearchQuery("");
        setFilteredItems([]);
    }
    return (
        <div className='search-container'>
            <div id='close-search' onClick={handleClearSearch}> <a href="/"><i className="fi fi-rr-circle-xmark"></i></a></div>
            <form className='search-form' onSubmit={handleSubmit}>
                <input type='text' placeholder='Search anything' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type='Submit'><i className="fi fi-rr-search"></i></button>
            </form>
            <div className='search-results'>
                {filteredItems.map((product) => (
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
