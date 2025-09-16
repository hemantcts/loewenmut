import React from 'react'
import { Link } from 'react-router-dom'

const Impressum = () => {
    return (
        <div className='page_content impressum_page'>
            <section className='wi_full inner_banner'>
                <div className='container'>
                    <div className='banner_content' data-aos='fade-up'>
                        <h1>Impressum</h1>
                        <p>Damit eine Marke stark werden, sich einprägen kann, müssen mehrere Elemente ineinandergreifen: die Markenstrategie, die visuelle und verbale Identität, das Markenerlebnis und die Kommunikation. Ein starkes Branding sorgt für die so zentrale Wiedererkennbarkeit, Emotionen und Vertrauen. Der Weg zu einer Marke gestaltet sich entsprechend der an sie gestellten Anforderungen. Deshalb ist es uns wichtig, in einer ersten gemeinsamen Auslegeordnung festzulegen, was gewünscht und was zu erledigen ist.</p>
                        <div className='wat_address'>
                            <h2>Unsere What3Words Adresse</h2>
                            <p><img src='./images/krimi-icon.svg' width='45px' />krimi.zahn.ausfüllen</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='wi_full py_3 pt-0 imp_copyright'>
                <div className='grey_bg wi_full pt-3 pb-3'>
                    <div className='container' data-aos='fade-up'>
                        <div className='row'>
                            <div className='col-md-4 imp_detail'>
                                <div className='item_inner text-center'>
                                    <address>
                                        <svg width="50" height="68" viewBox="0 0 50 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24.8545 0C38.5567 8.38322e-05 49.709 11.1522 49.709 24.8545C49.7088 38.1935 26.7136 66.3911 25.7275 67.5811C25.5123 67.8529 25.1952 67.9999 24.8555 68C24.5155 68 24.1978 67.853 23.9824 67.5811H23.9814C22.9957 66.3915 0.000179739 38.1942 0 24.8545C0 11.1522 11.1522 0 24.8545 0Z" fill="inherit"/>
                                        </svg>
                                        <h3>Adresse</h3>
                                        <p>Loewenmut Punkt GmbH<br />Ida-Sträuli-Strasse 95<br /> CH-8404 Winterthur</p>
                                    </address>
                                </div>
                            </div>
                            <div className='col-md-4 imp_detail'>
                                <div className='item_inner text-center'>
                                    <Link to={'tel: 0522247788'}>
                                        <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M47.8035 36.2198L56.8976 41.6904C58.6068 42.7165 59.749 44.4742 59.992 46.4535C60.235 48.4327 59.5519 50.4147 58.1424 51.8241C56.2712 53.6953 54.0894 55.8744 52.4693 57.4729C50.4361 59.5089 47.5198 60.3946 44.6983 59.8356H44.6902C41.1368 59.1228 37.7858 58.2101 34.6457 57.0976C15.7069 50.3958 4.22807 36.4494 0.151095 15.3097V15.3016C-0.38084 12.4934 0.510218 9.60421 2.53265 7.58452L8.21656 1.89791C9.62608 0.48839 11.608 -0.194701 13.5872 0.0482726C15.5665 0.29399 17.3242 1.43346 18.353 3.14271L23.8209 12.2368C25.3546 14.7857 24.9577 18.053 22.8516 20.1591C22.1846 20.8288 21.4691 21.5389 20.8669 22.168C20.8588 22.1788 20.8453 22.1923 20.8345 22.2004C20.3026 22.7351 20.0866 23.51 20.2729 24.2418C22.3493 32.3397 27.5448 37.4833 35.8018 39.7437C36.5443 39.9435 37.3436 39.7329 37.8863 39.1847L39.8817 37.1893C41.9879 35.0858 45.2545 34.686 47.8035 36.2198Z" fill="inherit"/>
                                        </svg>
                                        <h3>Telefon</h3>
                                        <p>052 224 77 88</p>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-md-4 imp_detail'>
                                <div className='item_inner text-center'>
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
                    </div>
                </div>
                <div className='container' data-aos='fade-up'>
                    <h2 className='mt_3'>Copyright</h2>
                    <p>Sämtliche Texte, Bilder, Grafiken und sonstige Inhalte dieser Website sowie deren Anordnung sind durch das Urheberrecht und andere Schutzgesetze geschützt. Es darf keine Vervielfältigung, Veränderung oder Verwendung der genannten Inhalte in anderen elektronischen oder gedruckten Publikationen ohne vorherige Zustimmung durch die Loewenmut Punkt GmbH erfolgen.</p>
                    <h2 className='mt_3'>Datenschutz</h2>
                    <p>Die Loewenmut Punkt GmbH misst dem Schutz Ihrer personenbezogenen Daten einen hohen Stellenwert bei. Die Beachtung und Einhaltung der gesetzlichen Bestimmungen über den Datenschutz und die Datensicherheit sind für uns selbstverständlich. Ihre personenbezogenen Daten werden von uns nur mit Ihrem Wissen und Ihrer Einwilligung erhoben, gespeichert und genutzt.</p>
                </div>
            </section>
        </div>
    )
}

export default Impressum