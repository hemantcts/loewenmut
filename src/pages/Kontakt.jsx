import React from 'react'
import { Link } from 'react-router-dom'

const Kontakt = () => {
    return (
        <div className='page_content kontakt_page'>
            <section className='wi_full kontakt_sec'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 addres_col' data-aos='fade-right'>
                            <h1>Kontakt</h1>
                            <p>Mit uns können Sie sich sehen lassen.</p>
                            <div className='addres_info'>
                                <div className='info_item'>
                                    <address>
                                        <svg width="50" height="68" viewBox="0 0 50 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24.8545 0C38.5567 8.38322e-05 49.709 11.1522 49.709 24.8545C49.7088 38.1935 26.7136 66.3911 25.7275 67.5811C25.5123 67.8529 25.1952 67.9999 24.8555 68C24.5155 68 24.1978 67.853 23.9824 67.5811H23.9814C22.9957 66.3915 0.000179739 38.1942 0 24.8545C0 11.1522 11.1522 0 24.8545 0Z" fill="inherit"/>
                                        </svg>
                                        <h3>Adresse</h3>
                                        <p>Loewenmut Punkt GmbH<br />Ida-Sträuli-Strasse 95<br /> CH-8404 Winterthur</p>
                                    </address>
                                </div>
                                <div className='info_item'>
                                    <Link to={'tel: 0522247788'}>
                                        <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M47.8035 36.2198L56.8976 41.6904C58.6068 42.7165 59.749 44.4742 59.992 46.4535C60.235 48.4327 59.5519 50.4147 58.1424 51.8241C56.2712 53.6953 54.0894 55.8744 52.4693 57.4729C50.4361 59.5089 47.5198 60.3946 44.6983 59.8356H44.6902C41.1368 59.1228 37.7858 58.2101 34.6457 57.0976C15.7069 50.3958 4.22807 36.4494 0.151095 15.3097V15.3016C-0.38084 12.4934 0.510218 9.60421 2.53265 7.58452L8.21656 1.89791C9.62608 0.48839 11.608 -0.194701 13.5872 0.0482726C15.5665 0.29399 17.3242 1.43346 18.353 3.14271L23.8209 12.2368C25.3546 14.7857 24.9577 18.053 22.8516 20.1591C22.1846 20.8288 21.4691 21.5389 20.8669 22.168C20.8588 22.1788 20.8453 22.1923 20.8345 22.2004C20.3026 22.7351 20.0866 23.51 20.2729 24.2418C22.3493 32.3397 27.5448 37.4833 35.8018 39.7437C36.5443 39.9435 37.3436 39.7329 37.8863 39.1847L39.8817 37.1893C41.9879 35.0858 45.2545 34.686 47.8035 36.2198Z" fill="inherit"/>
                                        </svg>
                                        <h3>Telefon</h3>
                                        <p>052 224 77 88</p>
                                    </Link>
                                </div>
                                <div className='info_item'>
                                    <Link to={'mailto: info@loewenmut.ch'}>
                                        <svg width="63" height="42" viewBox="0 0 63 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M62.9996 0.831543V40.7648L39.1855 19.1969L62.9996 0.831543Z" fill="inherit"/>
                                            <path d="M61.7124 41.7797H1.28711L25.1141 20.1989L31.0078 24.7421C31.2981 24.9661 31.7019 24.9661 31.9922 24.7421L37.8859 20.1989L61.7124 41.7797Z" fill="inherit"/>
                                            <path d="M23.8141 19.1969L0 40.7648V0.831543L23.8141 19.1969Z" fill="inherit"/>
                                            <path d="M61.4397 0.00012207L37.4358 18.5077L31.501 23.0857L25.5759 18.5172L25.5664 18.5077L1.5625 0.000188314L61.4397 0.00012207Z" fill="inherit"/>
                                        </svg>
                                        <h3>E-Mail</h3>
                                        <p>info@loewenmut.ch</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-7 form_col mt-4 mt-lg-0' data-aos='fade-left'>
                            <div className='grey_bg'>
                                <div className='subtitle'>Starten Sie jetzt Ihren Countdown</div>
                                <h2>Wie können wir Sie unterstützen?</h2>
                                <form>
                                    <div className='row'>
                                        <div className='col-12 form-group'>
                                            <div className='inline_radio_btns'>
                                                <div className='radio_item'>
                                                    <input type="radio" id="strategie" value="strategie" name='unterstutzen' />
                                                    <label for="strategie">Strategie</label>
                                                </div>
                                                <div className='radio_item'>
                                                    <input type="radio" id="beratung" value="beratung" name='unterstutzen' />
                                                    <label for="beratung">Beratung</label>
                                                </div>
                                                <div className='radio_item'>
                                                    <input type="radio" id="branding" value="branding" name='unterstutzen' />
                                                    <label for="branding">Branding</label>
                                                </div>
                                                <div className='radio_item'>
                                                    <input type="radio" id="website" value="website" name='unterstutzen' />
                                                    <label for="website">Online / Website</label>
                                                </div>
                                                <div className='radio_item'>
                                                    <input type="radio" id="print" value="print" name='unterstutzen' />
                                                    <label for="print">Print</label>
                                                </div>
                                                <div className='radio_item'>
                                                    <input type="radio" id="betrieb" value="betrieb" name='unterstutzen' />
                                                    <label for="betrieb">Betrieb</label>
                                                </div>
                                                <div className='radio_item'>
                                                    <input type="radio" id="content" value="content" name='unterstutzen' />
                                                    <label for="content">Content</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-sm-6 form-group'>
                                            <input type='text' className='form-control' placeholder='Vorname' />
                                        </div>
                                        <div className='col-sm-6 form-group'>
                                            <input type='text' className='form-control' placeholder='Nachname' />
                                        </div>
                                        <div className='col-sm-6 form-group'>
                                            <input type='text' className='form-control' placeholder='E-Mail' />
                                        </div>
                                        <div className='col-sm-6 form-group'>
                                            <input type='text' className='form-control' placeholder='Telefon' />
                                        </div>
                                        <div className='col-sm-12 form-group'>
                                            <input type='text' className='form-control' placeholder='Betreff' />
                                        </div>
                                        <div className='col-sm-12 form-group'>
                                            <textarea rows={5} className='form-control' placeholder='Nachricht'></textarea>
                                        </div>
                                        <div className='col-md-6 form-group'>
                                            <div className='google_captcha'>
                                                <img src='./images/captcha-img.jpg' />
                                            </div>
                                        </div>
                                        <div className='col-md-6 form-group'>
                                            <div className='form_btn'>
                                                <button type='submit' className='button theme_btn'>Senden
                                                    <svg width="40" height="15" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M39.9424 7.06055L32.4659 14.1211L30.9535 12.5198L36.7333 7.06055L30.9535 1.60128L32.4659 0L39.9424 7.06055Z" fill="inherit"/>
                                                        <path d="M38.3375 5.95908V8.16201H0V5.95908H38.3375Z" fill="inherit"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>     
                    </div>
                </div>
            </section>
            <section className='wi_full map_sec'>
                <img src='./images/google -map.jpg' className='w-100' alt='#' data-aos='zoom-in' />
            </section>
        </div>
    )
}

export default Kontakt