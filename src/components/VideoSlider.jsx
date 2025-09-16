import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const VideoSlider = () => {
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
    <div className='container' data-aos='fade-up'>
        <div className='slider_wrapper video_carousel'>
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
    </div>
)
}

export default VideoSlider