import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { BlocksRenderer } from '@strapi/blocks-react-renderer'

const SingleReferenzen = () => {

    let { title } = useParams();
    const navigate = useNavigate()

    const isMobile = window.innerWidth < 1200;

    const [modules, setModules] = useState([])
    const [referenzen, setReferenzen] = useState(null)
    const [referenzens, setReferenzens] = useState([])


    const getReferenzens = async () => {
        const response = await fetch(`https://backend.loewenmut.ch/api/referenzens?[populate][Bild][populate]=*&[populate][Bild_2][populate]=*&[populate][Referenzen_Abschnitt][populate]=*&[populate][Media][populate]=*&pagination[limit]=100&sort[0]=Titel`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setReferenzens(data.data);
        }
    }


    useEffect(() => {
        getReferenzens();
    }, [])

    
    useEffect(() => {

        if (referenzens?.length > 0 && title) {
            const matchedCategory = referenzens?.find((category) => category.slug === title);
            // console.log(category);
            if (matchedCategory) {
                setReferenzen(matchedCategory);
                setModules(matchedCategory?.modules)

            } else {
                navigate("/error"); // Redirect to trigger the catch-all error route
            }
        }


    }, [referenzens, title]);


    return (
        <div className='page_content referenzen_detail'>
            <section className='wi_full single_referenzen_sec grey_bg'>
                <div className='container' data-aos={!isMobile ? 'zoom-in' : undefined}>
                    <div className='row align-items-center' data-aos={!isMobile ? 'zoom-in' : undefined}>
                        <div className='col-lg-5'>
                            <h1>{referenzen?.Titel}</h1>
                        </div>
                        <div className='col-lg-7 text-lg-end'>
                            {referenzen?.Bild && <img src={`https://backend.loewenmut.ch${referenzen?.Bild?.url}`} alt='#' />}
                        </div>
                    </div>
                </div>
            </section>
            <section className='wi_full mt_3 ref_zeninfo_sec'>
                <div className='container'>
                    <div className='row' data-aos={!isMobile ? 'zoom-in' : undefined}>
                        {referenzen?.Referenzen_Abschnitt?.map((info, index) => (
                            <div className='col-md-4 col_item' key={index}>
                                <div className='item_inner'>
                                    <h3>{info?.Titel}</h3>
                                    <p>{info?.Beschreibung}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className='refzen_detail_sec'>
                <div className='wi_full py_3'>
                    <div className='container'>
                        <div className='max_width_content' data-aos={!isMobile ? 'fade-in' : undefined}>
                            {referenzen?.Referenzen_Inhalt && <BlocksRenderer content={referenzen?.Referenzen_Inhalt} />}
                        </div>
                    </div>
                </div>
                <div className='full_grey_sec' data-aos={!isMobile ? 'zoom-in' : undefined}>
                    <div className='container text-center positon-relative'>
                        {referenzen?.Bild_2 && <img src={`https://backend.loewenmut.ch${referenzen?.Bild_2?.url}`} alt='#' />}
                    </div>
                </div>
                <div className='wi_full py_3 ref_images_sec'>
                    <div className='container'>
                        <div className='row align-items-center'>
                            {referenzen?.Media?.Bilder?.map((img, index) => (
                                <div className='col-6 img_col' key={index} data-aos={isMobile ? index % 2 === 0 ? 'fade-right' : 'fade-left' : undefined}>
                                    <img src={`https://backend.loewenmut.ch${img?.url}`} alt='#' className='w-100' />
                                </div>
                            ))}
                            {/* <div className='col-6 img_col' data-aos='fade-right'>
                                <img src='./images/schear-img-3.png' alt='#' className='w-100' />
                            </div>
                            <div className='col-6 img_col' data-aos='fade-left'>
                                <img src='./images/schear-img-4.png' alt='#' className='w-100' />
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SingleReferenzen