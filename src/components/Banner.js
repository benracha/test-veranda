import React from 'react';
import "./Banner.css";
import { Carousel } from "react-bootstrap";

function Banner() {
    return (
        <div className='banner'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/1.Homepage/banner/hero-img01.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <div className='box-hr'>
                            <div className='hr-banner'></div>
                        </div>
                        <div className='box-ct'>
                            <div className='box-content-banner'>
                                <p>
                                    DESIGN HOTELS RESORTS AND LIFESTYLE BUSINESSES WHERE CUSTOMERS FEEL GOOD IN DESIGN AND SERVICE.
                                </p>
                            </div>
                        </div>
                        <div className='box-hr-bottom'>
                            <div className='box-hr-bottom-top'>
                                <div className='hr-banner'></div>
                            </div>
                            <div className='box-hr-bottom-bottom'>
                                <div className='hr-bottom'></div>
                            </div>
                        </div>
                        <div className='box-btn-banner'>
                            <button className='btn-banner'>READ MORE</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/1.Homepage/banner/hero-img02.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <div className='box-hr'>
                            <div className='hr-banner'></div>
                        </div>
                        <div className='box-ct'>
                            <div className='box-content-banner'>
                                <p>
                                    DESIGN HOTELS RESORTS AND LIFESTYLE BUSINESSES WHERE CUSTOMERS FEEL GOOD IN DESIGN AND SERVICE.
                                </p>
                            </div>
                        </div>
                        <div className='box-hr-bottom'>
                            <div className='box-hr-bottom-top'>
                                <div className='hr-banner'></div>
                            </div>
                            <div className='box-hr-bottom-bottom'>
                                <div className='hr-bottom'></div>
                            </div>
                        </div>
                        <div className='box-btn-banner'>
                            <button className='btn-banner'>READ MORE</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/1.Homepage/banner/hero-img03.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className='box-hr'>
                            <div className='hr-banner'></div>
                        </div>
                        <div className='box-ct'>
                            <div className='box-content-banner'>
                                <p>
                                    DESIGN HOTELS RESORTS AND LIFESTYLE BUSINESSES WHERE CUSTOMERS FEEL GOOD IN DESIGN AND SERVICE.
                                </p>
                            </div>
                        </div>
                        <div className='box-hr-bottom'>
                            <div className='box-hr-bottom-top'>
                                <div className='hr-banner'></div>
                            </div>
                            <div className='box-hr-bottom-bottom'>
                                <div className='hr-bottom'></div>
                            </div>
                        </div>
                        <div className='box-btn-banner'>
                            <button className='btn-banner'>READ MORE</button>
                        </div>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/1.Homepage/banner/hero-img04.jpg"
                        alt="Four slide"
                    />

                    <Carousel.Caption>
                    <div className='box-hr'>
                            <div className='hr-banner'></div>
                        </div>
                        <div className='box-ct'>
                            <div className='box-content-banner'>
                                <p>
                                    DESIGN HOTELS RESORTS AND LIFESTYLE BUSINESSES WHERE CUSTOMERS FEEL GOOD IN DESIGN AND SERVICE.
                                </p>
                            </div>
                        </div>
                        <div className='box-hr-bottom'>
                            <div className='box-hr-bottom-top'>
                                <div className='hr-banner'></div>
                            </div>
                            <div className='box-hr-bottom-bottom'>
                                <div className='hr-bottom'></div>
                            </div>
                        </div>
                        <div className='box-btn-banner'>
                            <button className='btn-banner'>READ MORE</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner;