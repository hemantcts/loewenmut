import React, { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
import ColoredSVG from '../components/ColoredSVG';

const Angebot = () => {
    const [pageData, setPageData] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const isMobile = window.innerWidth < 1200;


    const getPageData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                'https://backend.loewenmut.ch/api/unser-angebot?populate[dienstleistungens][populate]=*'
            );
            const data1 = await response.json();
            console.log(data1)
            if (data1) {
                setPageData(data1?.data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            // setTimeout(() => {
            setIsLoading(false);

            // }, 1000);
        }

    }


    useEffect(() => {
        getPageData();
    }, [])



    const [searchParams] = useSearchParams();
    const index = searchParams.get("i");

    // 👇 Scroll to the right section when index changes
    useEffect(() => {
        if (index !== undefined) {
            setTimeout(() => {
                const section = document.getElementById(index);
                if (section) {
                    section.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 500); // wait for content to load
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [index, pageData]);


    const [visibleSections, setVisibleSections] = useState([]);

    // useEffect(() => {
    //     if (!pageData?.dienstleistungens) return;

    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 const id = entry.target.getAttribute("data-id");
    //                 console.log(id, entry.isIntersecting);
    //                 if (entry.isIntersecting) {
    //                     setVisibleSections((prev) => [...new Set([...prev, id])]);
    //                 }
    //             });
    //         },
    //         {
    //             threshold: 0.1,
    //             rootMargin: "300px 0px 0px 0px",
    //         }

    //     );

    //     const sections = document.querySelectorAll(".common_angbot_count");
    //     sections.forEach((sec) => observer.observe(sec));

    //     return () => observer.disconnect();
    // }, [pageData]);


    return (
        <div className='page_content angebot_page'>
            <section className='wi_full inner_banner'>
                <div className='container'>
                    <div className='banner_content' data-aos={!isMobile ? 'fade-up' : undefined}>
                        <h1>
                            {!isLoading ? (
                                pageData?.Titel
                            ) : (
                                <Skeleton count={2} />
                            )}
                        </h1>
                        <p>
                            {!isLoading ? (
                                pageData?.Beschreibung
                            ) : (
                                <Skeleton count={3} />
                            )}
                        </p>
                        {/* <p>{pageData?.Beschreibung}</p> */}
                    </div>
                </div>
            </section>



            <section className='common_angebot_sec'>
                {pageData?.dienstleistungens?.map((service, index) => (
                    <div className='wi_full py_3 common_angbot_count' data-id={index} id={index} key={index}>
                        {/* <div className='wi_full py_3 common_angbot_count' id={service?.documentId} key={index}> */}
                        <div className='container position-relative'>
                            <div className='sec_heading'>
                                <div className='heading_left' data-aos={!isMobile ? 'fade-up' : undefined}>
                                    <h2>
                                        {!isLoading ? (
                                            service?.Titel
                                        ) : (
                                            <Skeleton count={1} />
                                        )}
                                    </h2>
                                    <p>
                                        {!isLoading ? (
                                            service?.Beschreibung
                                        ) : (
                                            <Skeleton count={3} />
                                        )}
                                    </p>
                                </div>
                                {/* <div className='icon_right'> */}
                                <div className={`icon_right ${visibleSections.includes(String(index)) ? "visible" : ""}`}>
                                    <ColoredSVG
                                        url={`https://backend.loewenmut.ch${service?.icon?.url}`}
                                        color="inherit"
                                    />
                                    {/* <img className='svg-img' src={`https://backend.loewenmut.ch${service?.icon?.url}`} alt="" /> */}
                                </div>
                            </div>
                            <div className='sec_body'>
                                <div className='row'>
                                    {service?.kategoriens?.map((category, i) => (
                                        <div key={i} className='col-md-6 col_item' data-aos={!isMobile ? 'fade-right' : undefined}>
                                            <div className='col_inner'>
                                                <h3>
                                                    {!isLoading ? (
                                                        category?.Titel
                                                    ) : (
                                                        <Skeleton count={1} />
                                                    )}
                                                </h3>
                                                {/* <h3>{category?.Titel}</h3> */}
                                                <p>
                                                    {!isLoading ? (
                                                        category?.Beschreibung
                                                    ) : (
                                                        <Skeleton count={1} />
                                                    )}
                                                </p>
                                                {/* <p>{category?.Beschreibung}</p> */}
                                                <div className='btn_block'>
                                                    <Link to={`/angebot/${category?.slug}`} className='button border_btn'>
                                                        <span>Mehr erfahren
                                                            <svg width="40" height="15" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M39.9424 7.06055L32.4659 14.1211L30.9535 12.5198L36.7333 7.06055L30.9535 1.60128L32.4659 0L39.9424 7.06055Z" fill="inherit" />
                                                                <path d="M38.3375 5.95908V8.16201H0V5.95908H38.3375Z" fill="inherit" />
                                                            </svg></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Angebot