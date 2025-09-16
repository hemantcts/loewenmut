import React from 'react'
import { Link } from 'react-router-dom'

const Referenzen = () => {
    return (
        <div className='page_content referenzen_page'>
            <section className='wi_full inner_banner'>
                <div className='container'>
                    <div className='banner_content' data-aos='zoom-in'>
                        <h1>Getane Arbeit. Der beste Beweis unserer Fähigkeiten.</h1>
                    </div>
                </div>
            </section>
            <section className='wi_full referenzen_sec'>
                <div className='container'>
                    <div className='data_filters'>
                        <ul className='nav nav-tabs' id='myTab' role='tablist' data-aos='zoom-in'>
                            <li className='nav-item' role='presentation'>
                                <button className='nav-link active' id='tab_1' data-bs-toggle='tab' data-bs-target='#tab1' type='button' role='tab'>Alle</button>
                            </li>
                            <li className='nav-item' role='presentation'>
                                <button className='nav-link' id='tab_2' data-bs-toggle='tab' data-bs-target='#tab2' type='button' role='tab'>Branding</button>
                            </li>
                            <li className='nav-item' role='presentation'>
                                <button className='nav-link' id='tab_3' data-bs-toggle='tab' data-bs-target='#tab3' type='button' role='tab'>Online / Website</button>
                            </li>
                            <li className='nav-item' role='presentation'>
                                <button className='nav-link' id='tab_4' data-bs-toggle='tab' data-bs-target='#tab4' type='button' role='tab'>Print</button>
                            </li>
                            <li className='nav-item' role='presentation'>
                                <button className='nav-link' id='tab_5' data-bs-toggle='tab' data-bs-target='#tab5' type='button' role='tab'>Content</button>
                            </li>
                        </ul>
                        <div className='select-search'>
                            <fieldset className='col--branch'>
                                <select class="selct_custom" name="so_branch">
                                    <option value="">Alle</option>
                                    <option value="Gesundheit und Pflege">Gesundheit und Pflege</option>
                                    <option value="Immobilien und Bauwesen">Immobilien und Bauwesen</option>
                                    <option value="Marke und Unternehmen">Marke und Unternehmen</option>
                                    <option value="Verbände und Öffentliche Hand">Verbände und Öffentliche Hand</option>
                                </select>
                            </fieldset>
                            <fieldset className='col--search'>
                                <input type='text' name='so_search' maxlength="50" className='srch--field' placeholder='Suchbegriff' />
                            </fieldset>
                        </div>
                    </div>
                    <div className='tab-content mt-4 blog_list_wrapper' id='myTabContent' data-aos='fade-up'>
                        <div className='tab-pane fade show active' id='tab1' role='tabpanel' aria-labelledby='tab_1'>
                            <div className='row align-items-center'>
                                <div className='col-6 col-lg-4 post_item'>
                                    <Link to={'/'} className='post_inner'>
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
                                    <Link to={'/'} className='post_inner'>
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
                                    <Link to={'/'} className='post_inner'>
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
                                    <Link to={'/'} className='post_inner'>
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
                                    <Link to={'/'} className='post_inner'>
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
                                    <Link to={'/'} className='post_inner'>
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
                                    <Link to={'/'} className='post_inner'>
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
                                    <Link to={'/'} className='post_inner'>
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
                                    <Link to={'/'} className='post_inner'>
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
                                    <Link to={'/'} className='post_inner'>
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
                                    <Link to={'/'} className='post_inner'>
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
                                    <Link to={'/'} className='post_inner'>
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
                                    <Link to={'/'} className='post_inner'>
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
                                    <Link to={'/'} className='post_inner'>
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
                                    <Link to={'/'} className='post_inner'>
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
                        <div className='tab-pane fade' id='tab5' role='tabpanel' aria-labelledby='tab_5'>
                            <div className='row align-items-center'>
                                <div className='col-6 col-lg-4 post_item'>
                                    <Link to={'/'} className='post_inner'>
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
                                    <Link to={'/'} className='post_inner'>
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
                                    <Link to={'/'} className='post_inner'>
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
                                <Link to='' className='button theme_btn'>
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

export default Referenzen