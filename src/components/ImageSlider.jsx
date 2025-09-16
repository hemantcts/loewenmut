import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ImageSlider = () => {
const options = {
    loop: true,
    margin: 0,
    dots: true,
    nav: false,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 600,
    items: 1,
};

return (
    <div className='slider_wrapper image_carousel'>
        <OwlCarousel className='owl-theme' {...options}>
            <div className='item'>
                <img src='./images/maliqinelli-thumb.png' alt='#' className='w-100' />
            </div>
            <div className='item'>
                <img src='./images/maliqinelli-thumb.png' alt='#' className='w-100' />
            </div>
            <div className='item'>
                <img src='./images/maliqinelli-thumb.png' alt='#' className='w-100' />
            </div>
        </OwlCarousel>
    </div>
)
}

export default ImageSlider