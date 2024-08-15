import React from 'react'
import { useEffect, useState } from 'react'
import Header from './Header'
import NavBar from './NavBar'
import NewsLetter from './NewsLetter'
import Footer from './Footer'
import Copyright from './Copyright'

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Header />
            <NavBar />
            <ContactForm />
            <ContactDetails />
            <NewsLetter />
            <Footer />
            <Copyright />
        </div>
    )
}

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [question, setQuestion] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim !== "" && email.trim !== "" && question.trim !== "") {
            setMessage("Thank you for Submitting the form");
            setTimeout(() => { setMessage(" "); }, 3000);
            setName("");
            setEmail("");
            setQuestion("");
        }
    }
    return (
        <>
            <hr />
            <div className='contact-us'>
                <div className='contact'>
                    <div className='contact-form' data-aos="fade-up">
                        <h3>Contact With Us</h3>
                        <h1>Share your Feedback <br />& Queries</h1>
                        <p>Whether you have a question about your order, need assistance with a product, or just want to share feedback, our team is ready to assist you.</p>
                    </div>
                    <form className='form' onSubmit={handleSubmit} data-aos="fade-left">
                        <div>
                            <input type="text" placeholder='Your Name*' required value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="email" placeholder='Your Email*' required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <textarea placeholder='Question*' required value={question} onChange={(e) => setQuestion(e.target.value)}></textarea>
                        <button type='submit' className='contact-btn'>Send A Message</button>
                    </form>
                    <div><p>{message}</p></div>
                </div>
                <div className='map'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d501614.5129855533!2d79.2549286!3d10.8217654!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1723714193006!5m2!1sen!2sin"
                        width="700"
                        height="650"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map of Patricia C. 4401 Waldeck Street Grapevine Nashville, TX 76051"></iframe>
                </div>
            </div >
        </>
    );
}

function ContactDetails() {
    return (
        <div className='contact-details'>
            <div className='contact-col' data-aos="zoom-out">
                <div className='contact-icon'>
                    <i className="fi fi-rr-marker"></i>
                </div>
                <div className='contact-text'>
                    <h3>Meet Us In Office :</h3>
                    <p>Patricia C. 4401 Waldeck Street<br /> Grapevine Nashville, Tx 76051</p>
                </div>
            </div>
            <div className='contact-col' data-aos="zoom-out">
                <div className='contact-icon'>
                    <i className="fi fi-rr-envelope"></i>
                </div>
                <div className='contact-text'>
                    <h3>Our Email Address :</h3>
                    <p>Info@yourdomain.com<br />Info@dataanalytics.com</p>
                </div>
            </div>
            <div className='contact-col' data-aos="zoom-out">
                <div className='contact-icon'>
                    <i className="fi fi-rr-phone-call"></i>
                </div>
                <div className='contact-text'>
                    <h3>Contact Numbers :</h3>
                    <p>+99 (0) 101 0000 888<br />+99 (0) 555 6759 126</p>
                </div>
            </div>
        </div>
    )
}
