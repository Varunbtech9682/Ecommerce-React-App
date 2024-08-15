import React from 'react'
import { Link } from 'react-router-dom'

export default function Categories() {
    return (
        <div className='categories'>
            <div className='categories-row1' data-aos="fade-up">
                <div className='ctg-col1'>
                    <div className='ctg-text'>
                        <p>Blast Past Fast</p>
                        <h1>IPhone 12 Pro<br />It’s A Leap Year.</h1>
                        <Link to="/Shop"><button className='ctg-btn' data-aos="zoom-out">Shop By Category</button></Link>
                    </div>
                    <div className='ctg-img1'>
                        <img src='/Images/Mask-Group-21.png' alt='Category Img' data-aos="fade-right" />
                    </div>
                </div>
                <div className='ctg-col2'>
                    <div className='ctg-img2'>
                        <img src='/Images/Mask-Group-1.png' alt='Category Img' data-aos="fade-down" />
                    </div>
                    <div className='ctg-text'>
                        <p>Noise Cancelling</p>
                        <h1>Beats Solo<br /> Wireless-Pro</h1>
                        <Link to="/Shop"><button className='ctg-btn' data-aos="zoom-out" >Shop By Category</button></Link>
                    </div>
                </div>
                <div className='ctg-col3'>
                    <div className='ctg-text'>
                        <p>Macbook Pro</p>
                        <h1>More Power.< br /> Wakes Instantly.</h1>
                        <Link to="/Shop"><button className='ctg-btn' data-aos="zoom-out">Shop By Category</button></Link>
                    </div>
                    <div className='ctg-img3'>
                        <img src='/Images/Mask-Group-22.png' alt='Category Img' data-aos="zoom-in" />
                    </div>
                </div>
            </div>
            <div className='categories-row2' data-aos="fade-up">
                <div className='ctg-row2-col1'>
                    <div className='ctg-text'>
                        <p>Blast Past Fast</p>
                        <h1>IPhone 12 Pro <br />It’s A Leap Year.</h1>
                        <Link to="/Shop"><button className='ctg-btn' data-aos="zoom-out">Shop By Category</button></Link>
                    </div>
                    <div>
                        <img className='img' src='/Images/Mask-Group-20.png' alt='Category Img' />
                    </div>
                </div>
                <div className='ctg-row2-col2'>
                    <div className='ctg-row2-col2-1'>
                        <div className='ctg-text'>
                            <p>Quadcopter</p>
                            <h1>DJI Mavic Mini<br /> Drone FlyCam</h1>
                            <Link to="/Shop"><button className='ctg-btn' data-aos="zoom-out">Shop By Category</button></Link>
                        </div>
                        <div className='ctg-img'>
                            <img src='/Images/drone_PNG204.png' alt='Category Img' data-aos="zoom-out" />
                        </div>
                    </div>
                    <div className='ctg-row2-col2-2'>
                        <div className='ctg-text'>
                            <p>wear gadgets</p>
                            <h1>Wear Gadgets <br />  Stay Creative.</h1>
                            <Link to="/Shop"><button className='ctg-btn' data-aos="zoom-out">Shop By Category</button></Link>
                        </div>
                        <div className='ctg-img'>
                            <img src='/Images/clay-apple-watch-mockup-07.png' alt='Category Img' />
                        </div>
                    </div>
                </div>
                <div className='ctg-row2-col3'>
                    <div className='ctg-text'>
                        <p>Earphone</p>
                        <h1>Stay Connect.<br /> Stay Creative.</h1>
                        <Link to="/Shop"><button className='ctg-btn' data-aos="zoom-out">Shop By Category</button></Link>
                    </div>
                    <div>
                        <img className='img' src='/Images/Group-10190.png' alt='Category Img' />
                    </div>
                </div>
            </div>
        </div >
    )
}
