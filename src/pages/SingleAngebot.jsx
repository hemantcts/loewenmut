import React from 'react'
import { Link } from 'react-router-dom'
import Referenzen from '../components/Referenzen'
import Testimonial from '../components/Testimonial'
import VideoSlider from '../components/VideoSlider'

const SingleAngebot = () => {
    return (
        <div className='page_content angebot_detail'>
            <section className='wi_full inner_banner'>
                <div className='container'>
                    <div className='single_baner_data'>
                        <div className='banner_content' data-aos='fade-up'>
                            <h1>Beratung <br /> Strategie</h1>
                            <p>Damit eine Marke stark werden, sich einprägen kann, müssen mehrere Elemente ineinandergreifen: die Markenstrategie, die visuelle und verbale Identität, das Markenerlebnis und die Kommunikation. Ein starkes Branding sorgt für die so zentrale Wiedererkennbarkeit, Emotionen und Vertrauen. Der Weg zu einer Marke gestaltet sich entsprechend der an sie gestellten Anforderungen. Deshalb ist es uns wichtig, in einer ersten gemeinsamen Auslegeordnung festzulegen, was gewünscht und was zu erledigen ist.</p>
                        </div>
                        <div className='angebot_icon'>
                            <svg width="244" height="234" viewBox="0 0 244 234" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M122.194 38.9333C104.764 38.9333 88.0398 45.8554 75.7118 58.1859C63.3815 70.5162 56.4592 87.2402 56.4592 104.668C56.4592 122.095 63.3812 138.821 75.7118 151.149C88.0421 163.48 104.766 170.402 122.194 170.402C139.621 170.402 156.347 163.48 168.675 151.149C181.006 138.819 187.928 122.095 187.928 104.668C187.908 87.2379 180.976 70.5343 168.655 58.2037C156.325 45.8834 139.622 38.9512 122.192 38.9313L122.194 38.9333ZM166.455 100.685L152.909 113.912C152.311 114.51 152.033 115.346 152.152 116.183L155.379 134.828C156.046 138.772 154.423 142.756 151.186 145.107C147.949 147.457 143.666 147.766 140.121 145.903L123.348 137.099C122.611 136.701 121.735 136.701 120.998 137.099L104.225 145.903C102.721 146.72 101.038 147.138 99.3248 147.138C96.2274 147.119 93.289 145.744 91.2972 143.374C89.3052 141.013 88.4486 137.886 88.9666 134.828L92.1935 116.143C92.323 115.326 92.0541 114.5 91.4764 113.912L78.0107 100.685C75.1522 97.8963 74.1264 93.7232 75.3613 89.9184C76.5863 86.1137 79.873 83.345 83.8272 82.7572L102.592 80.0481C103.418 79.9087 104.126 79.3908 104.504 78.6537L112.87 61.6822C114.643 58.1066 118.298 55.8356 122.292 55.8356C126.286 55.8356 129.942 58.1064 131.714 61.6822L140.081 78.6537C140.469 79.4007 141.196 79.9286 142.033 80.0481L160.757 82.7572C164.722 83.3349 168.008 86.1137 169.243 89.9284C170.468 93.753 169.383 97.9364 166.455 100.685ZM186.095 182.277C196.245 179.369 203.804 170.863 205.497 160.445C206.244 155.873 208.635 151.73 212.23 148.812C220.407 142.059 223.933 131.183 221.274 120.923C220.089 116.441 220.587 111.68 222.668 107.537C227.37 98.0847 226.174 86.7603 219.601 78.4925C216.792 74.8472 215.378 70.3056 215.617 65.7041C216.065 55.1466 210.368 45.2862 200.996 40.4058C196.882 38.2744 193.675 34.7186 191.992 30.406C188.137 20.5953 178.934 13.9122 168.407 13.2748C163.775 13.0058 159.393 11.0437 156.096 7.77701C148.557 0.386842 137.422 -1.97371 127.532 1.72138C123.209 3.35479 118.428 3.35479 114.106 1.72138C104.216 -1.97371 93.0803 0.38674 85.541 7.77701C82.2442 11.0437 77.8619 13.006 73.2306 13.2748C62.703 13.9122 53.4999 20.5953 49.6455 30.406C47.9622 34.7186 44.7551 38.2742 40.6418 40.4058C31.2695 45.2862 25.5724 55.1463 26.0206 65.7041C26.2796 70.3056 24.8653 74.8472 22.0366 78.4925C15.4631 86.7593 14.2678 98.0837 18.969 107.537C21.0507 111.68 21.5586 116.431 20.4033 120.923C17.7041 131.181 21.22 142.068 29.4069 148.812C32.9128 151.77 35.2336 155.903 35.9406 160.445C37.6737 170.863 45.2931 179.329 55.4619 182.158C59.9339 183.403 63.7983 186.241 66.3381 190.126C72.1446 198.97 82.5629 203.631 93.0313 202.077C97.603 201.4 102.274 202.396 106.178 204.866C115.083 210.554 126.477 210.554 135.381 204.866C139.285 202.396 143.956 201.4 148.527 202.077C158.986 203.611 169.394 198.95 175.221 190.126C177.78 186.281 181.643 183.492 186.095 182.277ZM122.352 178.293C102.791 178.333 84.0165 170.604 70.1613 156.79C56.307 142.985 48.5083 124.23 48.4885 104.67C48.4686 85.1114 56.2274 66.3453 70.0516 52.5002C83.8761 38.6658 102.63 30.8871 122.191 30.8871C141.753 30.8871 160.506 38.6658 174.331 52.5002C188.155 66.3446 195.914 85.1089 195.894 104.67C195.874 124.212 188.105 142.947 174.281 156.762C160.466 170.586 141.731 178.355 122.19 178.375L122.352 178.293ZM161.674 92.3976C161.963 93.3139 161.724 94.3099 161.037 94.9871L147.332 108.214C144.862 110.624 143.736 114.09 144.304 117.496L147.531 136.181C147.69 137.137 147.292 138.093 146.505 138.661C145.718 139.229 144.682 139.299 143.826 138.85L127.053 130.046C124.006 128.413 120.34 128.413 117.293 130.046L100.52 138.85C99.6736 139.309 98.6278 139.249 97.8409 138.671C97.064 138.103 96.6756 137.137 96.8548 136.181L100.042 117.496C100.63 114.09 99.4942 110.614 97.0142 108.214L83.4687 94.9871C82.7815 94.3098 82.5325 93.3038 82.8213 92.3876C83.1201 91.4613 83.9069 90.794 84.8631 90.6446L103.628 87.9355C107.064 87.4376 110.032 85.2961 111.596 82.1986L119.962 65.187C120.4 64.3105 121.296 63.7727 122.272 63.7926C123.239 63.7627 124.135 64.3105 124.543 65.187L132.91 82.1986C134.473 85.2861 137.451 87.4276 140.878 87.9355L159.602 90.6446C160.578 90.7642 161.395 91.4514 161.674 92.3976ZM69.3657 204.267L41.1197 232.513C40.3827 233.26 39.3867 233.689 38.3308 233.709C37.9623 233.748 37.5838 233.748 37.2153 233.709C35.8209 233.31 34.7452 232.175 34.4264 230.761L28.6497 205.263L3.11149 199.287C1.69717 198.968 0.561744 197.893 0.163474 196.498C-0.254836 195.084 0.143556 193.55 1.19931 192.514L28.7671 164.946C31.9244 177.038 41.2968 186.54 53.3481 189.846C55.9476 190.573 58.1985 192.217 59.6827 194.468C62.2026 198.372 65.4911 201.707 69.3657 204.267ZM243.505 196.299C243.107 197.694 241.972 198.77 240.557 199.088L215.019 205.064L209.242 230.403C208.924 231.817 207.848 232.952 206.454 233.351C206.085 233.39 205.707 233.39 205.338 233.351C204.282 233.331 203.286 232.902 202.549 232.155L173.625 203.392C176.952 200.981 179.82 197.983 182.071 194.547C183.555 192.296 185.806 190.653 188.405 189.926C201.054 186.43 210.696 176.161 213.385 163.312L242.666 192.593C243.622 193.649 243.941 195.143 243.503 196.497L243.505 196.299Z" fill="inherit"></path></svg>
                        </div>
                    </div>
                </div>
            </section>
            <section className='wi_full py_3 grey_bg angebot_pdf_sec'>
                <div className='container'>
                    <div className='sec_max_width' data-aos='fade-up'>
                        <h2>Sie suchen eine einfache, günstige, aber effiziente Lösung?</h2>
                        <p>Ein lupenreines Corporate Design und Kommunikationsmassnahmen, welche die gewünschte Wirkung erzielen: Dafür halten wir für Sie standardisierte Produkte bereit. Diese passen wir mit hoher Effizienz Ihren Bedürfnissen an, um Ihnen innert nützlicher Frist und zu einem bescheidenen Budget eine saubere Lösung zu präsentieren, mit der Sie sofort loslegen können.</p>
                        <div className='btn_block'>
                            <Link to="" className='button theme_btn'>
                                Download PDF
                                <svg width="40" height="15" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39.9424 7.06055L32.4659 14.1211L30.9535 12.5198L36.7333 7.06055L30.9535 1.60128L32.4659 0L39.9424 7.06055Z" fill="inherit" />
                                    <path d="M38.3375 5.95908V8.16201H0V5.95908H38.3375Z" fill="inherit" />
                                </svg>
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
            <section className='wi_full py_3 testimonial_sec'>
                <Testimonial />
            </section>
        </div>
    )
}

export default SingleAngebot