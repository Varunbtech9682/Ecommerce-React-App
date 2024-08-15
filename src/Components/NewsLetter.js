import React from 'react'
import { useState } from 'react';

export default function NewsLetter() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() !== "") {
            setMessage("Thank you for subscribing!");
            setTimeout(() => { setMessage(""); }, 3000);
            setEmail("");

        }

    }
    return (
        <div className='news-letter' data-aos="fade-up">
            <div>
                <div className='new-text'>
                    <p>Sign Up Newsletter & Promotions!</p>
                    <h1>Get 25% Discount</h1>
                    <span>On Your Next Purchase</span>
                </div>
                <form className='news-input' onSubmit={handleSubmit} data-aos="fade-up">
                    <input type='email' placeholder='Enter Your E-Mail' value={email} onChange={handleChangeEmail} required />
                    <button type='submit' className='news-btn'>Get Started</button>
                </form>
                <div className='msg'>
                    <p>{message}</p>
                </div>
            </div>
        </div >
    )
}
