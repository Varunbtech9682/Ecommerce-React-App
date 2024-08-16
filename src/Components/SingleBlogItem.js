import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import NewsLetter from './NewsLetter'
import Footer from './Footer'
import Copyright from './Copyright'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BlogData from './BlogData'

export default function SingleBlogItem() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Header />
            <NavBar />
            <BlogsData />
            <NewsLetter />
            <Footer />
            <Copyright />
        </div>
    )
}

function BlogsData() {
    const { blogId } = useParams();
    const blog = BlogData.find(blog => blog.id === blogId);

    return (
        <>
            <hr />
            <div className='blog-item'>
                <div className='blog-image'>
                    <img src={blog.image} alt={blog.name} />
                </div>
                <div className='blog-description'>
                    <h1>{blog.name}</h1>
                    <div className='blog-desc-desc'>
                        <h6>{blog.date} |</h6>
                        <h6>|{blog.category}</h6>
                    </div>
                    <p>{blog.description}</p>
                </div>
            </div>
        </>
    );
}