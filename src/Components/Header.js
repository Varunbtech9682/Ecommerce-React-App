import React from 'react'


export default function Header() {
    return (
        <>
            <div className='header-container' data-aos="fade-down">
                <div className='header-text'>
                    <i className="fi fi fi-tr-folder-minus"></i>
                    <p>World's Fastest Online Shopping Destination</p>
                </div>
                <div >
                    <div className='header-contact'>
                        <div className='c-phone'>
                            <i className="fi fi-tr-phone-call"></i>
                            <p>9988776655</p>
                        </div>
                        <div className='c-mail'>
                            <i className="fi fi-tr-envelopes"></i>
                            <p>info@shoppingcart.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
