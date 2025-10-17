import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Referenzen from '../components/Referenzen'
import Testimonial from '../components/Testimonial'
import VideoSlider from '../components/VideoSlider'
import TitleComponent from '../components/TitleComponent'
import TitleWithButtons from '../components/TitleWithButtons'
import TextWithImage from '../components/TextWithImage'
import TitleWithSideButton from '../components/TitleWithSideButton'

const SingleKompetenzen = () => {

    let { title } = useParams();
    const navigate = useNavigate()

    const isMobile = window.innerWidth < 1200;


    const [modules, setModules] = useState([])
    const [skills, setSkills] = useState([])
    const [category, setCategory] = useState(null)


    const getPageData = async () => {
        const response = await fetch('https://backend.loewenmut.ch/api/kompetenzens?populate[modules][on][modules.references][populate][referenzens][populate]=Bild&populate[modules][on][modules.title-with-button-and-image][populate][Bild]=true&populate[modules][on][modules.title-with-button-and-image][populate][button]=true&populate[modules][on][modules.gallery][populate][Bilder]=true&populate[modules][on][modules.text-module][populate]=*&populate[modules][on][modules.text-with-buttons-module][populate]=*&populate[modules][on][modules.1-2-titel-text-call-to-action][populate]=*');
        const data = await response.json();
        console.log(data);

        if (data.data) {
            setSkills(data?.data);
        }

    }


    useEffect(() => {
        getPageData();
    }, [])

    useEffect(() => {

        if (skills?.length > 0 && title) {
            const matchedCategory = skills?.find((category) => category.slug === title);
            // console.log(category);
            if (matchedCategory) {
                setCategory(matchedCategory);
                setModules(matchedCategory?.modules)

            } else {
                navigate("/error"); // Redirect to trigger the catch-all error route
            }
        }


    }, [skills, title]);

    return (
        <div className='page_content kompetezen_detail'>
            {modules?.map((module, index) => (
                <React.Fragment key={index}>
                    {module?.__component === 'modules.text-module' &&
                        <section className='wi_full inner_banner'>
                            <TitleComponent title={module?.Titel} description={module?.Beschreibung} icon={module?.icon} />
                        </section>
                    }
                    {module?.__component === 'modules.gallery' &&
                        <section className='wi_full py_3 ang_video_sec'>
                            <VideoSlider images={module?.Bilder} />
                        </section>
                    }
                    {module?.__component === 'modules.text-with-buttons-module' &&
                        <section className='wi_full py_3 grey_bg angebot_pdf_sec'>
                            <TitleWithButtons title={module?.Titel} description={module?.Beschreibung} button={module?.button} />
                        </section>
                    }
                    {module?.__component === 'modules.title-with-button-and-image' &&
                        <section className='wi_full py_3 ang_kontakt_sec'>
                            <TextWithImage title={module?.Titel} description={module?.Beschreibung} button={module?.button} image={module?.Bild} />
                        </section>
                    }
                    {module?.__component === 'modules.references' &&
                        <section className='wi_full py_3 refrenzen_sec grey_bg'>
                            <section className='wi_full py_3 refrenzen_sec grey_bg'>
                                <div className='container'>
                                    <div className='sec_flex row' data-aos={!isMobile ? 'fade-up' : undefined}>
                                        <div className='col-lg-10'>
                                            <h2 className='fs_50 mb-4'>Proin gravida nibh vel velit auctor aliquet.</h2>
                                        </div>
                                    </div>
                                    <div className='slider_wrapper refer_carousel mt-3' data-aos={!isMobile ? 'fade-up' : undefined}>
                                        <Referenzen references={module?.referenzens} />
                                    </div>
                                </div>
                            </section>
                        </section>
                    }{module?.__component === 'modules.1-2-titel-text-call-to-action' &&
                        <section className='wi_full py_3 kom_data_sec'>
                            <TitleWithSideButton title={module?.Titel} description={module?.Beschreibung} button={module?.button} />
                        </section>
                    }
                </React.Fragment>
            ))}

        </div>
    )
}

export default SingleKompetenzen