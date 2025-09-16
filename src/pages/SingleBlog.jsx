import React from 'react'
import { Link } from 'react-router-dom'
import ImageSlider from '../components/ImageSlider'

const SingleBlog = () => {
    return (
        <div className='page_content blogs_detail'>
            <section className='wi_full py_3 single_blog_sec'>
                <div className='container'>
                    <div className='sec_max_width' data-aos='zoom-in'>
                        <div className='post_date'>Insight | 15.06.25</div>
                        <h1>Maliqinelli HLKS GmbH</h1>
                        <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                        <picture className='my-3 d-block'>
                            <ImageSlider />
                        </picture>
                        <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Nibh vel velit auctor aliquet</p>
                        <div className='btn_block'>
                            <Link to="" className='button theme_btn'>
                                zur Übersicht
                                <svg width="40" height="15" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39.9424 7.06055L32.4659 14.1211L30.9535 12.5198L36.7333 7.06055L30.9535 1.60128L32.4659 0L39.9424 7.06055Z" fill="inherit" />
                                    <path d="M38.3375 5.95908V8.16201H0V5.95908H38.3375Z" fill="inherit" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SingleBlog