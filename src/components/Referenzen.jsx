import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Referenzen = () => {
const data = [
    "1", "2"
]

const options = {
    loop: data.length > 2 ? true : false,
    margin: 20,
    autoWidth: true,   // allow our CSS item widths
    dots: false,
    nav: data.length > 2 ? true : false,
    center: data.length > 2 ? true : false,
    //autoplay: data.length > 2 ? true : false,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 600,
    items: data.length,
    responsive: {
        0: { items: 1, autoWidth: false },
        600: { items: 2 },
        1000: { items: data.length > 2 ? 3 : 2 },
        1600: { margin: 30 },
        2000: { margin: 40 },
    },
    // Use <span> or <button> in navText (avoid <a href="#"> to fix iPhone issue)
    navText: [
        `<span type="button" class="owl-btn prev" aria-label="Previous">
            <svg width="74" height="27" viewBox="0 0 74 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 13.5L13.8514 0L16.6533 3.0617L5.94524 13.5L16.6533 23.9383L13.8514 27L0 13.5Z" fill="inherit"/>
                <path d="M2.97329 15.606V11.394H74V15.606H2.97329Z" fill="inherit"/>
            </svg>
        </span>`,
        `<span type="button" class="owl-btn next" aria-label="Next">
            <svg width="74" height="27" viewBox="0 0 74 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M74 13.5L60.1486 27L57.3467 23.9383L68.0548 13.5L57.3467 3.0617L60.1486 0L74 13.5Z" fill="inherit"/>
                <path d="M71.0267 11.394V15.606H0V11.394H71.0267Z" fill="inherit"/>
            </svg>
        </span>`,
    ],
};

return (
    <div className='container'>
        <div className='sec_flex row' data-aos='fade-up'>
            <div className='col-lg-10'>
                <h2 className='fs_50 mb-4'>Proin gravida nibh vel velit auctor aliquet.</h2>
            </div>
        </div>
        <div className='slider_wrapper refer_carousel mt-3' data-aos='fade-up'>
            <OwlCarousel className='owl-theme' {...options}>
                {data.map((item, index) => (
                    <div className={`item ${data.length===2 ? 'have_two_items' : 'have_more_items'}`} key={index}>
                        <Link to={'/'}>
                            <div className='item_img'>
                                <img src='./images/ref-1.png' alt='#' />
                            </div>
                            <div className='item_text'>
                                <h3>MedZentrum Pfungen</h3>
                                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </OwlCarousel>
        </div>
    </div>
)
}

export default Referenzen