import React from 'react'
import { useEffect } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import NewsLetter from './NewsLetter';
import Copyright from './Copyright';
import Footer from './Footer';
import BlogData from './BlogData';
import { Link } from 'react-router-dom';

export default function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Header />
            <NavBar />
            <Blogs />
            <NewsLetter />
            <Footer />
            <Copyright />
        </div>
    )
}
function Blogs() {
    return (
        <>
            <hr />
            <div className='blogs'>
                <div className='blog-text'>
                    <h1>Latest Posts</h1>
                </div>
                <div className='blog-col'>
                    {BlogData.map((blog) => (
                        <div className='blog-container' key={blog.id}>
                            <div className='blog-img'>
                                <Link to={`/blogs/${blog.id}`}>
                                    <img src={blog.image} alt={blog.name} /></Link>
                            </div>
                            <div className='blog-desc'>
                                <div>
                                    <h2>{blog.name}</h2>
                                    <p>{blog.date}</p>
                                </div>
                                <Link to={`/blogs/${blog.id}`}><button>Read More &rarr;</button></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}