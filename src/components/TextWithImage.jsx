import React from 'react'
import { Link } from 'react-router-dom'

const TextWithImage = ({title, description, button, image }) => {
    const isMobile = window.innerWidth < 1200;
    
    return (
        <div className='position-relative'>
            <div className='container'>
                <div className='sec_max_width' data-aos={!isMobile ? 'fade-right' : undefined}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className='btn_block'>
                        <Link to={button?.button_link} className='button theme_btn'>
                            {button?.button_text}
                            <svg width="40" height="15" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.9424 7.06055L32.4659 14.1211L30.9535 12.5198L36.7333 7.06055L30.9535 1.60128L32.4659 0L39.9424 7.06055Z" fill="inherit" />
                                <path d="M38.3375 5.95908V8.16201H0V5.95908H38.3375Z" fill="inherit" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <img src={`https://backend.loewenmut.ch${image?.url}`} alt='#' className='img_pos' />
        </div>
    )
}

export default TextWithImage