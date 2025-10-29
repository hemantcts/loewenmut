import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ColoredSVG from '../components/ColoredSVG'

const Uberuns = () => {


    const navigate = useNavigate()


    const [pageData, setPageData] = useState([])
    const [bannerData, setBannerData] = useState([])
    const [aboutSection, setAboutSection] = useState([])
    const [aboutSection2, setAboutSection2] = useState([])
    const [lastSection, setLastSection] = useState([])


    const getPageData = async () => {
        const response = await fetch('https://backend.loewenmut.ch/api/ueber-un?populate[Bannerbereich][populate]=icon&populate[ueber_uns_abschnitt][populate]=Bilder&populate[ueber_uns_abschnitt_2][populate][Quotenbereich][populate]=icon&populate[Titel_Button_Abschnitt][populate][button][populate]=*');
        const data = await response.json();
        console.log(data);

        if (data.data) {
            setPageData(data?.data);
            setBannerData(data?.data?.Bannerbereich);
            setAboutSection(data?.data?.ueber_uns_abschnitt);
            setAboutSection2(data?.data?.ueber_uns_abschnitt_2);
            setLastSection(data?.data?.Titel_Button_Abschnitt);
        }

    }


    useEffect(() => {
        getPageData();
    }, [])




    return (
        <div className='page_content uber_page'>
            <section className='wi_full inner_banner'>
                <div className='container'>
                    <div className='single_baner_data'>
                        <div className='banner_content'>
                            <h1>{bannerData?.Titel}</h1>
                            <p>{bannerData?.Beschreibung}</p>
                        </div>
                        <div className='angebot_icon'>
                            {/* <img className='svg-img' src={`https://backend.loewenmut.ch${bannerData?.icon?.url}`} alt="" /> */}
                            {bannerData?.icon?.url && <ColoredSVG url={`https://backend.loewenmut.ch${bannerData?.icon?.url}`} color="inherit" />}
                        </div>
                    </div>
                </div>
            </section>
            <section className='wi_full py_3 uber_uns_sec position-relative'>
                <div className='container'>
                    <div className='max_sec'>
                        <h2>{aboutSection?.Titel}</h2>
                        <p>{aboutSection?.Beschreibung}</p>
                    </div>
                    <div className='row justify-content-center'>
                        {aboutSection?.Bilder?.map((img, index) => (
                            <div className='col-6 mt-4' key={index}>
                                {/* <ColoredSVG url={`https://backend.loewenmut.ch${img?.url}`} color="inherit" /> */}
                                <img src={`https://backend.loewenmut.ch${img?.url}`} alt='#' className='w-100' />
                            </div>
                        ))}
                        {/* <div className='col-6 mt-4'>
                            <img src='./images/uber-img-1.jpg' alt='#' className='w-100' />
                        </div>
                        <div className='col-6 mt-4'>
                            <img src='./images/uber-img-2.jpg' alt='#' className='w-100' />
                        </div>
                        <div className='col-6 mt-4'>
                            <img src='./images/uber-img-3.jpg' alt='#' className='w-100' />
                        </div> */}
                    </div>
                </div>
            </section>
            <section className='wi_full py_3 uber_data_sec pt-0'>
                <div className='container'>
                    <div className='sec_content'>
                        <h2>{aboutSection2?.Titel}</h2>
                        <p>{aboutSection2?.Beschreibung}</p>
                    </div>
                    <div className='row justify-content-center'>
                        {aboutSection2?.Quotenbereich?.map((item, index) => (
                            <div className='col-lg-4 col-md-6' key={index}>
                                <div className='udc_item'>
                                    <div className='udc_inner'>
                                        <div className='svg_icon'>
                                            {/* <img className='svg-img' src={`https://backend.loewenmut.ch${item?.icon?.url}`} alt="" /> */}
                                            <ColoredSVG
                                                url={`https://backend.loewenmut.ch${item?.icon?.url}`}
                                                color="inherit"
                                            />
                                        </div>
                                        <h3>{item?.Titel}</h3>
                                        <p>{item?.Beschreibung}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className='wi_full py_3 kom_data_sec'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h2>{lastSection?.Titel}</h2>
                        </div>
                        <div className='col-lg-6 mt-4 mt-lg-0'>
                            <p>{lastSection?.Beschreibung}</p>
                            <div className='btn_block'>
                                <Link to={lastSection?.button?.button_link} className='button theme_btn'>
                                    {lastSection?.button?.button_text}
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

export default Uberuns