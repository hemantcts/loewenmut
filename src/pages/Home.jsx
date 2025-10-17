import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useTheme } from '../context/ThemeContext';
import Referenzen from '../components/Referenzen';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import ColoredSVG from '../components/ColoredSVG';

const Home = () => {
    const { theme } = useTheme();

    const [curretTheme, setCurrentTheme] = useState('yellow');

    // useEffect(() => {
    //     setCurrentTheme(theme);
    // }, [theme]);


    // https://backend.loewenmut.ch/api/startseite?populate[ueberschriftenbereich][populate]=*&populate[Kompetenzen_Abschnitt][populate]=*&populate[Referenzen_Abschnitt][populate]=*&populate[Titel_Button_Abschnitt][populate]=*


    const navigate = useNavigate()


    const [pageData, setPageData] = useState([])
    const [headingData, setHeadingData] = useState([])
    const [skillSection, setSkillSection] = useState([])
    const [referenceSection, setReferenceSection] = useState([])
    const [lastSection, setLastSection] = useState([])



    const getPageData = async () => {
        const response = await fetch('https://backend.loewenmut.ch/api/startseite?populate[ueberschriftenbereich][populate]=*&populate[Kompetenzen_Abschnitt][populate][kompetenzens][populate]=icon&populate[Referenzen_Abschnitt][populate][referenzens][populate]=Bild&populate[Referenzen_Abschnitt][populate][button][populate]=*&populate[Titel_Button_Abschnitt][populate]=*');
        const data = await response.json();
        console.log(data);

        if (data.data) {
            setPageData(data?.data);
            setHeadingData(data?.data?.ueberschriftenbereich);
            setSkillSection(data?.data?.Kompetenzen_Abschnitt);
            setReferenceSection(data?.data?.Referenzen_Abschnitt);
            setLastSection(data?.data?.Titel_Button_Abschnitt);
        }

    }


    useEffect(() => {
        getPageData();
    }, [])

    const data = [
        "1", "2", "3", "4", "5"
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

    useEffect(() => {
        function updatePaths() {
            const dot1 = (el) => {
                const rect = el.getBoundingClientRect();
                return {
                    x: rect.left,
                    y: rect.top
                };
            };

            const dot2 = (el) => {
                const rect = el.getBoundingClientRect();
                return {
                    x: rect.right,
                    y: rect.top
                };
            };

            const dot3 = (el) => {
                const rect = el.getBoundingClientRect();
                return {
                    x: rect.left,
                    y: rect.bottom
                };
            };

            const dot4 = (el) => {
                const rect = el.getBoundingClientRect();
                return {
                    x: rect.right,
                    y: rect.bottom
                };
            };

            const svg = document.querySelector("#svg-lines");
            const svgRect = svg.getBoundingClientRect();

            const bannerVideo = document.querySelector(".banner_video");

            const rel = (pt) => ({
                x: pt.x - svgRect.left,
                y: pt.y - svgRect.top
            });

            const dot_1 = rel(dot1(bannerVideo));
            const dot_2 = rel(dot2(bannerVideo));
            const dot_3 = rel(dot3(bannerVideo));
            const dot_4 = rel(dot4(bannerVideo));

            if (true) {
                document.querySelector("#line1").setAttribute("d",
                    `M ${dot_1.x - 130} ${dot_1.y - 30} 
                    L ${dot_2.x + 130} ${dot_2.y - 30} `
                );

                document.querySelector("#line2").setAttribute("d",
                    `M ${dot_3.x - 130} ${dot_3.y + 30} 
                    L ${dot_4.x + 130} ${dot_4.y + 30}  `
                );

                document.querySelector("#line3").setAttribute("d",
                    `M ${dot_1.x - 30} ${dot_1.y - 130} 
                    L ${dot_3.x - 30} ${dot_3.y + 130}  `
                );

                document.querySelector("#line4").setAttribute("d",
                    `M ${dot_2.x + 30} ${dot_2.y - 130} 
                    L ${dot_4.x + 30} ${dot_4.y + 130}  `
                );
            }
        }

        setTimeout(() => {
            updatePaths();
        }, 1200);


        // Run on window resize
        window.addEventListener("resize", updatePaths);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener("resize", updatePaths);
        };

    }, [])


    return (
        <div className='page_content homepage'>
            <section className='banner_sec main_banner wi_full' style={{ position: 'relative' }}>
                <svg id="svg-lines" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }} xmlns="http://www.w3.org/2000/svg">
                    <path id='line1' stroke="#E4E4E4" fill="none" stroke-width="1" strokeDasharray={2200} strokeDashoffset={2200} style={{
                        animation: 'drawLeftToRight 1.2s ease 1.3s forwards',
                    }} />
                    <path id='line2' stroke="#E4E4E4" fill="none" stroke-width="1" strokeDasharray={2200} strokeDashoffset={2200} style={{
                        animation: 'drawRightToLeft 1.2s ease 1.3s forwards',
                    }} />
                    <path id='line3' stroke="#E4E4E4" fill="none" stroke-width="1" strokeDasharray={2200} strokeDashoffset={2200} style={{
                        animation: 'drawTopToBottom 1.2s ease 1.3s forwards',
                    }} />
                    <path id='line4' stroke="#E4E4E4" fill="none" stroke-width="1" strokeDasharray={2200} strokeDashoffset={2200} style={{
                        animation: 'drawBottomToTop 1.2s ease 1.3s forwards',
                    }} />
                    <style>
                        {`
          @keyframes drawLeftToRight {
            from { stroke-dashoffset: var(--len, 2200); }
            to { stroke-dashoffset: 0; }
          }

          @keyframes drawRightToLeft {
            from { stroke-dashoffset: var(--len, -2200); }
            to { stroke-dashoffset: 0; }
          }

          @keyframes drawTopToBottom {
            from { stroke-dashoffset: var(--len, 2200); }
            to { stroke-dashoffset: 0; }
          }

          @keyframes drawBottomToTop {
            from { stroke-dashoffset: var(--len, -2200); }
            to { stroke-dashoffset: 0; }
          }
        `}
                    </style>
                </svg>
                <div className='container' data-aos='fade-up'>
                    <div className='banner_data py-3'>

                        <video src={`./videos/logo_video_${curretTheme}.mp4`} autoPlay loop muted className='w-100 banner_video' />
                    </div>
                    <div className='btn_block btn_grid'>
                        <div className="theme_btn_wrap">
                            <Link to="/angebot" className='button theme_btn'>
                                Unser Angebot
                                <svg width="40" height="15" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39.9424 7.06055L32.4659 14.1211L30.9535 12.5198L36.7333 7.06055L30.9535 1.60128L32.4659 0L39.9424 7.06055Z" fill="inherit" />
                                    <path d="M38.3375 5.95908V8.16201H0V5.95908H38.3375Z" fill="inherit" />
                                </svg>
                            </Link>
                        </div>
                        <Link to="/kontakt" className='button dark_btn'>
                            Kontakt
                            <svg width="40" height="15" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.9424 7.06055L32.4659 14.1211L30.9535 12.5198L36.7333 7.06055L30.9535 1.60128L32.4659 0L39.9424 7.06055Z" fill="inherit" />
                                <path d="M38.3375 5.95908V8.16201H0V5.95908H38.3375Z" fill="inherit" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
            <section className='wi_full py_3 info_sec bg_theme cursor-dark-zone'>
                <div className='container'>
                    {headingData?.ueberschrift && <BlocksRenderer content={headingData?.ueberschrift} />}
                    {/* <h2 data-aos='fade-up'>{headingData?.ueberschrift}</h2> */}
                    {/* <h2 data-aos='fade-up'>Gestalten Sie mit <Link to="/"><span>Loewenmut.</span></Link><br /> die digitale Zukunft Ihres Unternehmens.</h2> */}
                </div>
            </section>
            <section className='wi_full py_3 approach_sec' data-aos='zoom-in'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7'>
                            <h2 className='fs_50'>{skillSection?.Titel}</h2>
                        </div>
                    </div>
                </div>
                <div className='sec_bg position-relative'>
                    <div className='container position-relative'>
                        <div className='row sec_row'>
                            {skillSection?.kompetenzens?.map((item, index) => (
                                <div className='col-sm-6 col-lg-4 col_item' key={index}>
                                    <Link to={`/kompetenzen/${item?.slug}`} className='col_inner'>
                                        <div className='item_icon'>
                                            {/* <img className='svg-img' src={`https://backend.loewenmut.ch${item?.icon?.url}`} alt="" /> */}
                                            <ColoredSVG
                                                url={`https://backend.loewenmut.ch${item?.icon?.url}`}
                                                color="inherit"
                                            />
                                            {/* <svg width="106" height="89" viewBox="0 0 106 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M106 21.6269L89.3153 89H16.6847L0 21.6269L32.4283 37.0711L53 0L73.5717 37.0711L106 21.6269Z" fill="inherit" />
                                            </svg> */}
                                        </div>
                                        <div className='item_content'>
                                            <h3>{item?.Titel}</h3>
                                            <p>{item?.Untertitel}</p>
                                            <div className='arrow_btn'>
                                                <svg width="40" height="15" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M39.9424 7.06055L32.4659 14.1211L30.9535 12.5198L36.7333 7.06055L30.9535 1.60128L32.4659 0L39.9424 7.06055Z" fill="inherit" />
                                                    <path d="M38.3375 5.95908V8.16201H0V5.95908H38.3375Z" fill="inherit" />
                                                </svg>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className='wi_full py_3 refrenzen_sec grey_bg'>
                <div className='container'>
                    <div className='sec_flex row' data-aos='fade-up'>
                        <div className='col-lg-7'>
                            <h2 className='fs_50'>{referenceSection?.Titel}</h2>
                        </div>
                        <div className='col-lg-4 pl-lg-0 ms-auto'>
                            <div className='btn_block btn_grid ms-auto'>
                                {referenceSection?.button?.map((item, index) => (
                                    <div className="theme_btn_wrap" key={index}>
                                        <Link to={item?.button_link} className={`button ${index === 0 ? 'theme_btn' : 'dark_btn'} `} >
                                            {item?.button_text}
                                            <svg width="40" height="15" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M39.9424 7.06055L32.4659 14.1211L30.9535 12.5198L36.7333 7.06055L30.9535 1.60128L32.4659 0L39.9424 7.06055Z" fill="inherit" />
                                                <path d="M38.3375 5.95908V8.16201H0V5.95908H38.3375Z" fill="inherit" />
                                            </svg>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='slider_wrapper home_refer_carousel mt-5' data-aos='fade-up'>
                        {referenceSection?.referenzens && <Referenzen references={referenceSection?.referenzens} />}
                    </div>
                </div>
            </section>
            <section className='wi_full py_3 info_sec_2' data-aos='fade-up'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 title_col'>
                            <h2>{lastSection?.Titel}</h2>
                        </div>
                        <div className='col-lg-6 content_col'>
                            <p>{lastSection?.Beschreibung}</p>
                            <div className='btn_block'>
                                <div className="theme_btn_wrap">
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
                </div>
            </section>
        </div>
    )
}

export default Home