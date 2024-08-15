import React, { useState } from 'react'
import NavBar from './NavBar'
import Header from './Header'
import NewsLetter from './NewsLetter'
import Footer from './Footer'
import Copyright from './Copyright'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    return (
        <div>
            <Header />
            <NavBar />
            <LoginForm />
            <NewsLetter />
            <Footer />
            <Copyright />
        </div>
    )
}
function LoginForm() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() !== "" && password.trim() !== "")
            setMessage("Successfully Login");
        setTimeout(() => {
            setMessage("");
            navigate('/');
        }, 3000);
        setName("");
        setPassword("")
    }
    return (
        <>
            <hr />
            <div className='login-page'>
                <div className='login-details'>
                    <h2>Login</h2>
                    <hr />
                    <form className='login-form' onSubmit={handleSubmit}>
                        <label>Username or email address*</label>
                        <input type='text' required value={name} onChange={(e) => setName(e.target.value)} />
                        <label>Password*</label>
                        <input type='text' required value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button>Login</button>
                    </form>
                    <div >
                        <p className='msg'>{message}</p>
                    </div>
                </div>
            </div >
        </>
    );
}