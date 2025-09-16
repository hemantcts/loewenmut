import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Testimonial = () => {
const options = {
    loop: true,
    margin: 0,
    dots: true,
    nav: false,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 600,
    //items: data.length,
    responsive: {
        0: { items: 1 },
        600: { items: 1 },
        800: { items: 2 },
    },
};

return (
    <div className='container' data-aos='zoom-in'>
        <div className='slider_wrapper testimonial_carousel'>
            <OwlCarousel className='owl-theme' {...options}>
                <div className='item'>
                    <div className='item_profile'>
                        <img src='./images/profile-1.png' alt='#' />
                        <svg width="136" height="101" viewBox="0 0 136 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M127.108 44.834C121.313 39.9774 116.426 37.5468 112.435 37.5468C112.698 35.023 114.662 30.9261 118.323 25.2608C121.984 19.6044 126.343 14.8454 131.4 10.9841C131.004 6.18966 128.538 2.53274 124.006 0C114.826 2.7949 106.17 8.18922 98.0478 16.1785C89.9252 24.1677 83.5089 33.1211 78.7767 43.0388C74.0533 52.9565 71.6895 62.4388 71.6895 71.4944C71.6895 80.5501 74.5866 87.6728 80.3808 92.8627C86.1705 98.057 93.591 100.652 102.642 100.652C111.698 100.652 119.492 96.9906 126.01 89.6679C132.533 82.3496 135.794 74.2582 135.794 65.4025C135.794 56.5557 132.897 49.6995 127.108 44.834Z" fill="inherit"/>
                            <path d="M55.6181 44.834C49.8239 39.9774 44.9272 37.5468 40.9371 37.5468C41.2081 35.023 43.1632 30.9261 46.8246 25.2608C50.4904 19.6044 54.7871 14.8454 59.7149 10.9841C59.315 6.0608 56.8489 2.39499 52.321 0C38.6087 4.26122 26.456 13.779 15.8718 28.5578C5.28761 43.341 0 56.4535 0 67.8997C0 79.3548 2.91927 87.6772 8.78456 92.8627C14.6454 98.057 22.1014 100.652 31.1526 100.652C40.2038 100.652 47.9887 96.9906 54.5205 89.6679C61.0345 82.3496 64.3049 74.2582 64.3049 65.4025C64.3049 56.5557 61.4078 49.6995 55.6181 44.834Z" fill="inherit"/>
                        </svg>
                    </div>
                    <div className='item_text'>
                        <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                        <div className='testi_by'>
                            <h4>Aenean sollicitudin</h4>
                            <p>Nibh vel velit</p>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className='item_profile'>
                        <img src='./images/profile-2.png' alt='#' />
                        <svg width="136" height="101" viewBox="0 0 136 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M127.108 44.834C121.313 39.9774 116.426 37.5468 112.435 37.5468C112.698 35.023 114.662 30.9261 118.323 25.2608C121.984 19.6044 126.343 14.8454 131.4 10.9841C131.004 6.18966 128.538 2.53274 124.006 0C114.826 2.7949 106.17 8.18922 98.0478 16.1785C89.9252 24.1677 83.5089 33.1211 78.7767 43.0388C74.0533 52.9565 71.6895 62.4388 71.6895 71.4944C71.6895 80.5501 74.5866 87.6728 80.3808 92.8627C86.1705 98.057 93.591 100.652 102.642 100.652C111.698 100.652 119.492 96.9906 126.01 89.6679C132.533 82.3496 135.794 74.2582 135.794 65.4025C135.794 56.5557 132.897 49.6995 127.108 44.834Z" fill="inherit"/>
                            <path d="M55.6181 44.834C49.8239 39.9774 44.9272 37.5468 40.9371 37.5468C41.2081 35.023 43.1632 30.9261 46.8246 25.2608C50.4904 19.6044 54.7871 14.8454 59.7149 10.9841C59.315 6.0608 56.8489 2.39499 52.321 0C38.6087 4.26122 26.456 13.779 15.8718 28.5578C5.28761 43.341 0 56.4535 0 67.8997C0 79.3548 2.91927 87.6772 8.78456 92.8627C14.6454 98.057 22.1014 100.652 31.1526 100.652C40.2038 100.652 47.9887 96.9906 54.5205 89.6679C61.0345 82.3496 64.3049 74.2582 64.3049 65.4025C64.3049 56.5557 61.4078 49.6995 55.6181 44.834Z" fill="inherit"/>
                        </svg>
                    </div>
                    <div className='item_text'>
                        <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                        <div className='testi_by'>
                            <h4>Aenean sollicitudin</h4>
                            <p>Nibh vel velit</p>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className='item_profile'>
                        <img src='./images/profile-1.png' alt='#' />
                        <svg width="136" height="101" viewBox="0 0 136 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M127.108 44.834C121.313 39.9774 116.426 37.5468 112.435 37.5468C112.698 35.023 114.662 30.9261 118.323 25.2608C121.984 19.6044 126.343 14.8454 131.4 10.9841C131.004 6.18966 128.538 2.53274 124.006 0C114.826 2.7949 106.17 8.18922 98.0478 16.1785C89.9252 24.1677 83.5089 33.1211 78.7767 43.0388C74.0533 52.9565 71.6895 62.4388 71.6895 71.4944C71.6895 80.5501 74.5866 87.6728 80.3808 92.8627C86.1705 98.057 93.591 100.652 102.642 100.652C111.698 100.652 119.492 96.9906 126.01 89.6679C132.533 82.3496 135.794 74.2582 135.794 65.4025C135.794 56.5557 132.897 49.6995 127.108 44.834Z" fill="inherit"/>
                            <path d="M55.6181 44.834C49.8239 39.9774 44.9272 37.5468 40.9371 37.5468C41.2081 35.023 43.1632 30.9261 46.8246 25.2608C50.4904 19.6044 54.7871 14.8454 59.7149 10.9841C59.315 6.0608 56.8489 2.39499 52.321 0C38.6087 4.26122 26.456 13.779 15.8718 28.5578C5.28761 43.341 0 56.4535 0 67.8997C0 79.3548 2.91927 87.6772 8.78456 92.8627C14.6454 98.057 22.1014 100.652 31.1526 100.652C40.2038 100.652 47.9887 96.9906 54.5205 89.6679C61.0345 82.3496 64.3049 74.2582 64.3049 65.4025C64.3049 56.5557 61.4078 49.6995 55.6181 44.834Z" fill="inherit"/>
                        </svg>
                    </div>
                    <div className='item_text'>
                        <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                        <div className='testi_by'>
                            <h4>Aenean sollicitudin</h4>
                            <p>Nibh vel velit</p>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className='item_profile'>
                        <img src='./images/profile-2.png' alt='#' />
                        <svg width="136" height="101" viewBox="0 0 136 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M127.108 44.834C121.313 39.9774 116.426 37.5468 112.435 37.5468C112.698 35.023 114.662 30.9261 118.323 25.2608C121.984 19.6044 126.343 14.8454 131.4 10.9841C131.004 6.18966 128.538 2.53274 124.006 0C114.826 2.7949 106.17 8.18922 98.0478 16.1785C89.9252 24.1677 83.5089 33.1211 78.7767 43.0388C74.0533 52.9565 71.6895 62.4388 71.6895 71.4944C71.6895 80.5501 74.5866 87.6728 80.3808 92.8627C86.1705 98.057 93.591 100.652 102.642 100.652C111.698 100.652 119.492 96.9906 126.01 89.6679C132.533 82.3496 135.794 74.2582 135.794 65.4025C135.794 56.5557 132.897 49.6995 127.108 44.834Z" fill="inherit"/>
                            <path d="M55.6181 44.834C49.8239 39.9774 44.9272 37.5468 40.9371 37.5468C41.2081 35.023 43.1632 30.9261 46.8246 25.2608C50.4904 19.6044 54.7871 14.8454 59.7149 10.9841C59.315 6.0608 56.8489 2.39499 52.321 0C38.6087 4.26122 26.456 13.779 15.8718 28.5578C5.28761 43.341 0 56.4535 0 67.8997C0 79.3548 2.91927 87.6772 8.78456 92.8627C14.6454 98.057 22.1014 100.652 31.1526 100.652C40.2038 100.652 47.9887 96.9906 54.5205 89.6679C61.0345 82.3496 64.3049 74.2582 64.3049 65.4025C64.3049 56.5557 61.4078 49.6995 55.6181 44.834Z" fill="inherit"/>
                        </svg>
                    </div>
                    <div className='item_text'>
                        <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                        <div className='testi_by'>
                            <h4>Aenean sollicitudin</h4>
                            <p>Nibh vel velit</p>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    </div>
)
}

export default Testimonial