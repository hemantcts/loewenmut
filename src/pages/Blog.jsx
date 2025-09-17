import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <div className='page_content blog_page'>
            <section className='wi_full inner_banner'>
                <div className='container'>
                    <div className='single_baner_data' data-aos='zoom-in'>
                        <div className='banner_content'>
                            <h1>Blog</h1>
                            <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                        </div>
                        <div className='angebot_icon'>
                            <svg width='236' height='214' viewBox='0 0 236 214' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M236 43.8926H0V30.1775C0 13.4991 13.501 0 30.1816 0H205.808C222.488 0 235.989 13.4991 235.989 30.1775V43.8926H236ZM236 60.3549V183.823C236 200.501 222.499 214 205.818 214H30.1922C13.5115 214 0.0105379 200.501 0.0105379 183.823L0.00024495 60.3549H236ZM126.232 104.247C126.232 93.7116 117.557 85.0379 107.02 85.0379H52.1415C41.6041 85.0379 32.9293 93.7116 32.9293 104.247V170.097C32.9293 180.633 41.6041 189.306 52.1415 189.306H107.02C117.557 189.306 126.232 180.633 126.232 170.097V104.247ZM203.071 170.097C203.071 165.601 199.335 161.866 194.838 161.866H150.929C146.432 161.866 142.697 165.601 142.697 170.097C142.697 174.593 146.432 178.328 150.929 178.328H194.838C199.335 178.328 203.071 174.593 203.071 170.097ZM203.071 137.172C203.071 132.676 199.335 128.941 194.838 128.941H150.929C146.432 128.941 142.697 132.676 142.697 137.172C142.697 141.668 146.432 145.403 150.929 145.403H194.838C199.335 145.403 203.071 141.668 203.071 137.172ZM203.071 104.247C203.071 99.7513 199.335 96.0163 194.838 96.0163H150.929C146.432 96.0163 142.697 99.7513 142.697 104.247C142.697 108.744 146.432 112.479 150.929 112.479H194.838C199.335 112.479 203.071 108.744 203.071 104.247ZM107.02 101.511H52.1415C50.6082 101.511 49.3939 102.714 49.3939 104.258V170.107C49.3939 171.64 50.5979 172.854 52.1415 172.854H107.02C108.553 172.854 109.768 171.651 109.768 170.107V104.258C109.768 102.725 108.564 101.511 107.02 101.511Z' fill='inherit' />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
            <section className='wi_full blog_posts_sec'>
                <div className='container'>
                    <ul className='nav nav-tabs' id='myTab' role='tablist' data-aos='zoom-in'>
                        <li className='nav-item' role='presentation'>
                            <button className='nav-link active' id='tab_1' data-bs-toggle='tab' data-bs-target='#tab1' type='button' role='tab'>Alle</button>
                        </li>
                        <li className='nav-item' role='presentation'>
                            <button className='nav-link' id='tab_2' data-bs-toggle='tab' data-bs-target='#tab2' type='button' role='tab'>Wissenswertes</button>
                        </li>
                        <li className='nav-item' role='presentation'>
                            <button className='nav-link' id='tab_3' data-bs-toggle='tab' data-bs-target='#tab3' type='button' role='tab'>Insights</button>
                        </li>
                        <li className='nav-item' role='presentation'>
                            <button className='nav-link' id='tab_4' data-bs-toggle='tab' data-bs-target='#tab4' type='button' role='tab'>Projekte</button>
                        </li>
                    </ul>
                    <div className='tab-content mt-4 blog_list_wrapper' id='myTabContent' data-aos='fade-up'>
                        <div className='tab-pane fade show active' id='tab1' role='tabpanel' aria-labelledby='tab_1'>
                            <div className='row align-items-center'>
                                <div className='col-6 col-lg-4 post_item'>
                                    <Link to={'/blog-detail'} className='post_inner'>
                                        <picture>
                                            <img src='./images/blog-maliqinelli.png' className='w-100' alt='#' />
                                        </picture>
                                        <div className='post_text'>
                                            <div className='post_date'>Insight | 15.06.25</div>
                                            <h3>Maliqinelli HLKS GmbH</h3>
                                            <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-6 col-lg-4 post_item'>
                                    <Link to={'/blog-detail'} className='post_inner'>
                                        <picture>
                                            <img src='./images/blog-gebruder.png' className='w-100' alt='#' />
                                        </picture>
                                        <div className='post_text'>
                                            <div className='post_date'>Insight | 15.06.25</div>
                                            <h3>Gebrüder Stocker Tiefbau GmbH</h3>
                                            <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-6 col-lg-4 post_item'>
                                    <Link to={'/blog-detail'} className='post_inner'>
                                        <picture>
                                            <img src='./images/blog-mineex.png' className='w-100' alt='#' />
                                        </picture>
                                        <div className='post_text'>
                                            <div className='post_date'>Insight | 15.06.25</div>
                                            <h3>Mine-ex</h3>
                                            <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-6 col-lg-4 post_item'>
                                    <Link to={'/blog-detail'} className='post_inner'>
                                        <picture>
                                            <img src='./images/blog-qhs.png' className='w-100' alt='#' />
                                        </picture>
                                        <div className='post_text'>
                                            <div className='post_date'>Insight | 15.06.25</div>
                                            <h3>Quellenhof Stiftung</h3>
                                            <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-6 col-lg-4 post_item'>
                                    <Link to={'/blog-detail'} className='post_inner'>
                                        <picture>
                                            <img src='./images/blog-schaer.png' className='w-100' alt='#' />
                                        </picture>
                                        <div className='post_text'>
                                            <div className='post_date'>Insight | 15.06.25</div>
                                            <h3>Schaer Energie</h3>
                                            <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-6 col-lg-4 post_item'>
                                    <Link to={'/blog-detail'} className='post_inner'>
                                        <picture>
                                            <img src='./images/blog-zurich.png' className='w-100' alt='#' />
                                        </picture>
                                        <div className='post_text'>
                                            <div className='post_date'>Insight | 15.06.25</div>
                                            <h3>The Zurich Chamber Singers</h3>
                                            <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='btn_block'>
                                <button type='button' id='loadMore' className='button border-0 theme_btn'>
                                    Weitere laden
                                    <svg width='40' height='15' viewBox='0 0 40 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M39.9424 7.06055L32.4659 14.1211L30.9535 12.5198L36.7333 7.06055L30.9535 1.60128L32.4659 0L39.9424 7.06055Z' fill='inherit' />
                                        <path d='M38.3375 5.95908V8.16201H0V5.95908H38.3375Z' fill='inherit' />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className='tab-pane fade' id='tab2' role='tabpanel' aria-labelledby='tab_2'>
                            <div className='row align-items-center'>
                                <div className='col-6 col-lg-4 post_item'>
                                    <Link to={'/blog-detail'} className='post_inner'>
                                        <picture>
                                            <img src='./images/blog-qhs.png' className='w-100' alt='#' />
                                        </picture>
                                        <div className='post_text'>
                                            <div className='post_date'>Insight | 15.06.25</div>
                                            <h3>Quellenhof Stiftung</h3>
                                            <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-6 col-lg-4 post_item'>
                                    <Link to={'/blog-detail'} className='post_inner'>
                                        <picture>
                                            <img src='./images/blog-schaer.png' className='w-100' alt='#' />
                                        </picture>
                                        <div className='post_text'>
                                            <div className='post_date'>Insight | 15.06.25</div>
                                            <h3>Schaer Energie</h3>
                                            <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-6 col-lg-4 post_item'>
                                    <Link to={'/blog-detail'} className='post_inner'>
                                        <picture>
                                            <img src='./images/blog-zurich.png' className='w-100' alt='#' />
                                        </picture>
                                        <div className='post_text'>
                                            <div className='post_date'>Insight | 15.06.25</div>
                                            <h3>The Zurich Chamber Singers</h3>
                                            <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='btn_block'>
                                <button type='button' id='loadMore' className='button border-0 theme_btn'>
                                    Weitere laden
                                    <svg width='40' height='15' viewBox='0 0 40 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M39.9424 7.06055L32.4659 14.1211L30.9535 12.5198L36.7333 7.06055L30.9535 1.60128L32.4659 0L39.9424 7.06055Z' fill='inherit' />
                                        <path d='M38.3375 5.95908V8.16201H0V5.95908H38.3375Z' fill='inherit' />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className='tab-pane fade' id='tab3' role='tabpanel' aria-labelledby='tab_3'>
                            <div className='row align-items-center'>
                                <div className='col-6 col-lg-4 post_item'>
                                    <Link to={'/blog-detail'} className='post_inner'>
                                        <picture>
                                            <img src='./images/blog-maliqinelli.png' className='w-100' alt='#' />
                                        </picture>
                                        <div className='post_text'>
                                            <div className='post_date'>Insight | 15.06.25</div>
                                            <h3>Maliqinelli HLKS GmbH</h3>
                                            <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-6 col-lg-4 post_item'>
                                    <Link to={'/blog-detail'} className='post_inner'>
                                        <picture>
                                            <img src='./images/blog-gebruder.png' className='w-100' alt='#' />
                                        </picture>
                                        <div className='post_text'>
                                            <div className='post_date'>Insight | 15.06.25</div>
                                            <h3>Gebrüder Stocker Tiefbau GmbH</h3>
                                            <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-6 col-lg-4 post_item'>
                                    <Link to={'/blog-detail'} className='post_inner'>
                                        <picture>
                                            <img src='./images/blog-mineex.png' className='w-100' alt='#' />
                                        </picture>
                                        <div className='post_text'>
                                            <div className='post_date'>Insight | 15.06.25</div>
                                            <h3>Mine-ex</h3>
                                            <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='btn_block'>
                                <button type='button' id='loadMore' className='button border-0 theme_btn'>
                                    Weitere laden
                                    <svg width='40' height='15' viewBox='0 0 40 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M39.9424 7.06055L32.4659 14.1211L30.9535 12.5198L36.7333 7.06055L30.9535 1.60128L32.4659 0L39.9424 7.06055Z' fill='inherit' />
                                        <path d='M38.3375 5.95908V8.16201H0V5.95908H38.3375Z' fill='inherit' />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className='tab-pane fade' id='tab4' role='tabpanel' aria-labelledby='tab_4'>
                            <div className='row align-items-center'>
                                <div className='col-6 col-lg-4 post_item'>
                                    <Link to={'/blog-detail'} className='post_inner'>
                                        <picture>
                                            <img src='./images/blog-qhs.png' className='w-100' alt='#' />
                                        </picture>
                                        <div className='post_text'>
                                            <div className='post_date'>Insight | 15.06.25</div>
                                            <h3>Quellenhof Stiftung</h3>
                                            <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-6 col-lg-4 post_item'>
                                    <Link to={'/blog-detail'} className='post_inner'>
                                        <picture>
                                            <img src='./images/blog-schaer.png' className='w-100' alt='#' />
                                        </picture>
                                        <div className='post_text'>
                                            <div className='post_date'>Insight | 15.06.25</div>
                                            <h3>Schaer Energie</h3>
                                            <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-6 col-lg-4 post_item'>
                                    <Link to={'/blog-detail'} className='post_inner'>
                                        <picture>
                                            <img src='./images/blog-zurich.png' className='w-100' alt='#' />
                                        </picture>
                                        <div className='post_text'>
                                            <div className='post_date'>Insight | 15.06.25</div>
                                            <h3>The Zurich Chamber Singers</h3>
                                            <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='btn_block'>
                                <button type='button' id='loadMore' className='button border-0 theme_btn'>
                                    Weitere laden
                                    <svg width='40' height='15' viewBox='0 0 40 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M39.9424 7.06055L32.4659 14.1211L30.9535 12.5198L36.7333 7.06055L30.9535 1.60128L32.4659 0L39.9424 7.06055Z' fill='inherit' />
                                        <path d='M38.3375 5.95908V8.16201H0V5.95908H38.3375Z' fill='inherit' />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className='wi_full py_3 kom_data_sec'>
                <div className='container' data-aos='fade-up'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h2>Proin gravida nibh vel velit auctor</h2>
                        </div>
                        <div className='col-lg-6 mt-4 mt-lg-0'>
                            <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                            <div className='btn_block'>
                                <Link to={'/kontakt'} className='button theme_btn'>
                                    Kontaktieren Sie uns
                                    <svg width='40' height='15' viewBox='0 0 40 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M39.9424 7.06055L32.4659 14.1211L30.9535 12.5198L36.7333 7.06055L30.9535 1.60128L32.4659 0L39.9424 7.06055Z' fill='inherit' />
                                        <path d='M38.3375 5.95908V8.16201H0V5.95908H38.3375Z' fill='inherit' />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Blog