import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Datenschutz = () => {

    // https://backend.loewenmut.ch/api/datenschutzerklaerung

    const isMobile = window.innerWidth < 1200;  

    const [pageData, setPageData] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const getPageData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                'https://backend.loewenmut.ch/api/datenschutzerklaerung?populate[erweiterbare_Daten][populate]=*'
            );
            const data1 = await response.json();
            console.log(data1)
            if (data1) {
                setPageData(data1?.data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }

    }


    useEffect(() => {
        getPageData();
    }, [])

    return (
        <div className='page_content daten_page'>
            <section className='wi_full inner_banner'>
                <div className='container'>
                    <div className='banner_content' data-aos={!isMobile ? 'fade-up' : undefined}>
                        <h1>{pageData?.Titel}</h1>
                        <p>{pageData?.Beschreibung}</p>
                    </div>
                </div>
            </section>
            <section className='wi_full py_3 pt-0 daten_accordion'>
                <div className='container'>
                    <div className="accordion" id="accordion" data-aos={!isMobile ? 'fade-up' : undefined}>
                        {pageData?.erweiterbare_Daten && pageData?.erweiterbare_Daten.map((item, index) => (
                            <div className="accordion-item" key={index}>
                                <div className="accordion-header" id={`daten${index}`}>
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`}>{item?.Titel}</button>
                                </div>
                                <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`daten${index}`} data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        {/* <p>{item?.Beschreibung}</p> */}
                                        {item?.Beschreibung && <BlocksRenderer content={item?.Beschreibung} />}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Datenschutz