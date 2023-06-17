"use client"
import Slider from "react-slick";
import { useRef } from 'react';
import Image from "next/image";
import {FaShoppingCart} from 'react-icons/fa'
import {BsChevronRight} from 'react-icons/bs'
import {BsChevronLeft} from 'react-icons/bs'


const FeaturedProducts = ({ heading }) => {
    const featureSlide = useRef(null);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='featuredproducts'>
            <div className="featured-heading">
                <h3>{heading}</h3>
                <div className="slider-buttons">
                    <button title="left" onClick={() => { featureSlide.current.slickPrev() }}><BsChevronLeft className="slider-btn" /></button>
                    <button title="Right" onClick={() => { featureSlide.current.slickNext() }}><BsChevronRight className="slider-btn"/></button>
                </div>
            </div>
            <Slider ref={featureSlide} {...settings}>
                <div className="featuredproduct">
                    <div className="featured-img-container">
                        <Image width={296} height={296} loading="lazy" src="/assets/images/featured/fp1.png" alt="feature" />
                        <div className="featured-overlay"></div>
                    </div>
                    <div className="featured-name-price">
                        <p>Product Name Goes here</p>
                        <span>$ 99</span>
                    </div>
                    <div className="featured-rating"></div>
                    <div className="featured-product-action">
                        <div className="featured-cart">
                             < FaShoppingCart className="cart-icon"/>
                        </div>
                    </div>
                </div>
                <div className="featuredproduct">
                    <div className="featured-img-container">
                        <Image width={296} height={296} loading="lazy" src="/assets/images/featured/fp4.png" alt="feature" />
                        <div className="featured-overlay"></div>
                    </div>
                    <div className="featured-name-price">
                        <p>Product Name Goes here</p>
                        <span>$ 99</span>
                    </div>
                    <div className="featured-rating"></div>
                    <div className="featured-product-action">
                        <div className="featured-cart">
                        < FaShoppingCart className="cart-icon"/>
                        </div>
                    </div>
                </div>
                <div className="featuredproduct">
                    <div className="featured-img-container">
                        <Image width={296} height={296} loading="lazy" src="/assets/images/featured/fp1.png" alt="feature" />
                        <div className="featured-overlay"></div>
                    </div>
                    <div className="featured-name-price">
                        <p>Product Name Goes here</p>
                        <span>$ 99</span>
                    </div>
                    <div className="featured-rating"></div>
                    <div className="featured-product-action">
                        <div className="featured-cart">
                             < FaShoppingCart className="cart-icon"/>
                        </div>
                    </div>
                </div>
                <div className="featuredproduct">
                    <div className="featured-img-container">
                        <Image width={296} height={296} loading="lazy" src="/assets/images/featured/fp2.png" alt="feature" />
                        <div className="featured-overlay"></div>
                    </div>
                    <div className="featured-name-price">
                        <p>Product Name Goes here</p>
                        <span>$ 99</span>
                    </div>
                    <div className="featured-rating"></div>
                    <div className="featured-product-action">
                        <div className="featured-cart">
                             < FaShoppingCart className="cart-icon"/>
                        </div>
                    </div>
                </div>
                <div className="featuredproduct">
                    <div className="featured-img-container">
                        <Image width={296} height={296} loading="lazy" src="/assets/images/featured/fp3.png" alt="feature" />
                        <div className="featured-overlay"></div>
                    </div>
                    <div className="featured-name-price">
                        <p>Product Name Goes here</p>
                        <span>$ 99</span>
                    </div>
                    <div className="featured-rating"></div>
                    <div className="featured-product-action">
                        <div className="featured-cart">
                             < FaShoppingCart className="cart-icon"/>
                        </div>
                    </div>
                </div>
                <div className="featuredproduct">
                    <div className="featured-img-container">
                        <Image width={296} height={296} loading="lazy" src="/assets/images/featured/fp3.png" alt="feature" />
                        <div className="featured-overlay"></div>
                    </div>
                    <div className="featured-name-price">
                        <p>Product Name Goes here</p>
                        <span>$ 99</span>
                    </div>
                    <div className="featured-rating"></div>
                    <div className="featured-product-action">
                        <div className="featured-cart">
                             < FaShoppingCart className="cart-icon"/>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default FeaturedProducts