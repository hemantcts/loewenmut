import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
import ColoredSVG from '../components/ColoredSVG';

const Kompetenzen = () => {

    const isMobile = window.innerWidth < 1200;

    const [pageData, setPageData] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const getPageData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                'https://backend.loewenmut.ch/api/kompetenzen-page?populate[kompetenzens][populate]=*'
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
            }, 500);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [index, pageData]);

    const [visibleSections, setVisibleSections] = useState([]);

    useEffect(() => {
        if (!pageData?.kompetenzens) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.getAttribute("data-id");
                    console.log(id, entry.isIntersecting);
                    if (entry.isIntersecting) {
                        setVisibleSections((prev) => [...new Set([...prev, id])]);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "300px 0px 0px 0px",
            }

        );

        const sections = document.querySelectorAll(".common_kompet_count");
        sections.forEach((sec) => observer.observe(sec));

        return () => observer.disconnect();
    }, [pageData]);

    return (
        <div className='page_content kompetenzen_page'>
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
                                <Skeleton count={4} />
                            )}
                        </p>
                    </div>
                </div>
            </section>
            <section className='common_kompet_sec'>
                {pageData?.kompetenzens?.map((skill, index) => (
                    <div key={index} data-id={index} id={index} className='wi_full py_3 common_kompet_count'>
                        <div className='container'>
                            <div className='sec_width' data-aos={!isMobile ? 'fade-up' : undefined}>
                                <h2>{skill?.Titel}</h2>
                                <h3>{skill?.Untertitel}</h3>
                                <p>{skill?.Beschreibung}</p>
                                <div className='btn_block'>
                                    <Link to={`/kompetenzen/${skill?.slug}`} className='button border_btn'>
                                        <span>Mehr erfahren
                                            <svg width="40" height="15" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M39.9424 7.06055L32.4659 14.1211L30.9535 12.5198L36.7333 7.06055L30.9535 1.60128L32.4659 0L39.9424 7.06055Z" fill="inherit" />
                                                <path d="M38.3375 5.95908V8.16201H0V5.95908H38.3375Z" fill="inherit" />
                                            </svg></span>
                                    </Link>
                                </div>
                            </div>
                            {/* <div className='icon_right'> */}
                            <div className={`icon_right ${visibleSections.includes(String(index)) ? "visible" : ""}`}>
                                <ColoredSVG
                                    svg={skill?.icon}
                                    url={`https://backend.loewenmut.ch${skill?.icon?.url}`}
                                    color="inherit"
                                />
                                {/* <svg width="201" height="168" viewBox="0 0 201 168" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M200.663 40.8237L169.168 168H32.068L0.573242 40.8237L61.7862 69.9769L100.618 0L139.45 69.9769L200.663 40.8237Z" fill="inherit" />
                                </svg> */}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Kompetenzen