import React from 'react'
import { Link } from 'react-router-dom'
import Referenzen from '../components/Referenzen'
import Testimonial from '../components/Testimonial'
import VideoSlider from '../components/VideoSlider'

const SingleKompetenzen = () => {
    return (
        <div className='page_content kompetezen_detail'>
            <section className='wi_full inner_banner'>
                <div className='container'>
                    <div className='single_baner_data' data-aos='fade-up'>
                        <div className='banner_content'>
                            <h1>Marke & Design</h1>
                            <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                        </div>
                        <div className='angebot_icon'>
                            <svg width="279" height="233" viewBox="0 0 279 233" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M278.09 56.6186L234.409 233H44.2642L0.583984 56.6186L85.4805 97.0513L139.337 0L193.193 97.0513L278.09 56.6186Z" fill="inheirt"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
            <section className='wi_full py_3 grey_bg angebot_pdf_sec'>
                <div className='container'>
                    <div className='sec_max_width' data-aos='fade-up'>
                        <h2>Sie suchen eine einfache, günstige, aber effiziente Lösung?</h2>
                        <p>Ein lupenreines Corporate Design und Kommunikationsmassnahmen, welche die gewünschte Wirkung erzielen: Dafür halten wir für Sie standardisierte Produkte bereit. Diese passen wir mit hoher Effizienz Ihren Bedürfnissen an, um Ihnen innert nützlicher Frist und zu einem bescheidenen Budget eine saubere Lösung zu präsentieren, mit der Sie sofort loslegen können.</p>
                        <div className='btn_block btn_grid'>
                            <Link to="" className='button theme_btn'>
                                Download PDF
                                <svg width="40" height="15" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39.9424 7.06055L32.4659 14.1211L30.9535 12.5198L36.7333 7.06055L30.9535 1.60128L32.4659 0L39.9424 7.06055Z" fill="inherit" />
                                    <path d="M38.3375 5.95908V8.16201H0V5.95908H38.3375Z" fill="inherit" />
                                </svg>
                            </Link>
                            <Link to="" className='button text_btn'>
                                <span>Grundrisse
                                <svg width="40" height="15" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39.9424 7.06055L32.4659 14.1211L30.9535 12.5198L36.7333 7.06055L30.9535 1.60128L32.4659 0L39.9424 7.06055Z" fill="inherit" />
                                    <path d="M38.3375 5.95908V8.16201H0V5.95908H38.3375Z" fill="inherit" />
                                </svg></span>
                            </Link>
                            <Link to="" className='button text_btn'>
                                <span>Plans
                                <svg width="40" height="15" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39.9424 7.06055L32.4659 14.1211L30.9535 12.5198L36.7333 7.06055L30.9535 1.60128L32.4659 0L39.9424 7.06055Z" fill="inherit" />
                                    <path d="M38.3375 5.95908V8.16201H0V5.95908H38.3375Z" fill="inherit" />
                                </svg></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className='wi_full py_3 ang_kontakt_sec'>
                <div className='position-relative'>
                    <div className='container'>
                        <div className='sec_max_width' data-aos='fade-right'>
                            <h2>Sie suchen eine herausragende, überraschende und in jeder Hinsicht stringente Lösung?</h2>
                            <p>Eine klare Abgrenzung zu Ihren Mitbewerbenden, Botschaften, die auf dem Punkt sind, eine überraschende Inszenierung, kreative Einfälle noch und noch oder aufwendige Produktionen. Auch das können wir und sind an Ihrer Seite: Wir denken mit, begleiten Ihre Gedankengänge, hinterfragen an den richtigen Stellen und kontern, wenn nötig. Immer mit dem Anspruch, Ihnen die Werbemittel oder Kampagnen zu präsentieren, die Aufmerksamkeit schaffen, Aktionen auslösen und Ihre Kundinnen und Kunden bei der Stange halten.</p>
                            <div className='btn_block'>
                                <Link to="" className='button theme_btn'>
                                    Kontakt
                                    <svg width="40" height="15" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M39.9424 7.06055L32.4659 14.1211L30.9535 12.5198L36.7333 7.06055L30.9535 1.60128L32.4659 0L39.9424 7.06055Z" fill="inherit" />
                                        <path d="M38.3375 5.95908V8.16201H0V5.95908H38.3375Z" fill="inherit" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <img src='./images/image-angebot.png' alt='#' className='img_pos' />
                </div>
            </section>
            <section className='wi_full py_3 pt-0 ang_video_sec'>
                <VideoSlider />
            </section>
            <section className='wi_full py_3 refrenzen_sec grey_bg'>
                <Referenzen />
            </section>
            <section className='wi_full py_3 kom_data_sec'>
                <div className='container' data-aos='fade-up'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h2>Proin gravida nibh vel velit auctor</h2>
                        </div>
                        <div className='col-lg-6 mt-4 mt-lg-0'>
                            <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                            <div className='btn_block'>
                                <Link to="" className='button theme_btn'>
                                    Kontaktieren Sie uns
                                    <svg width="40" height="15" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M39.9424 7.06055L32.4659 14.1211L30.9535 12.5198L36.7333 7.06055L30.9535 1.60128L32.4659 0L39.9424 7.06055Z" fill="inherit" />
                                        <path d="M38.3375 5.95908V8.16201H0V5.95908H38.3375Z" fill="inherit" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SingleKompetenzen