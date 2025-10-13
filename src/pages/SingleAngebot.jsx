import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Referenzen from '../components/Referenzen'
import Testimonial from '../components/Testimonial'
import VideoSlider from '../components/VideoSlider'
import TextWithImage from '../components/TextWithImage'
import TitleComponent from '../components/TitleComponent'
import TitleWithButtons from '../components/TitleWithButtons'

const SingleAngebot = () => {

    let { title } = useParams();
    const navigate = useNavigate()



    const [modules, setModules] = useState([])
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState(null)


    const getPageData = async () => {
        const response = await fetch('https://backend.loewenmut.ch/api/categories?populate[modules][on][modules.references][populate][referenzens][populate]=Bild&populate[modules][on][modules.title-with-button-and-image][populate][Bild]=true&populate[modules][on][modules.title-with-button-and-image][populate][button]=true&populate[modules][on][modules.gallery][populate][Bilder]=true&populate[modules][on][modules.text-module][populate]=*&populate[modules][on][modules.text-with-buttons-module][populate]=*&populate[modules][on][modules.quote-bild-logo][populate][quotes][populate]=Bild&populate[modules][on][modules.quote-bild-logo][populate][quotes][populate]=icon');
        const data = await response.json();
        console.log(data);

        if (data.data) {
            setCategories(data?.data);
        }

    }


    useEffect(() => {
        getPageData();
    }, [])

    useEffect(() => {

        if (categories?.length > 0 && title) {
            const matchedCategory = categories?.find((category) => category.slug === title);
            // console.log(category);
            if (matchedCategory) {
                setCategory(matchedCategory);
                setModules(matchedCategory?.modules)

            } else {
                navigate("/error"); // Redirect to trigger the catch-all error route
            }
        }


    }, [categories, title]);



    return (
        <div className='page_content angebot_detail'>

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
                            <div className='container'>
                                <div className='sec_flex row' data-aos='fade-up'>
                                    <div className='col-lg-10'>
                                        <h2 className='fs_50 mb-4'>Proin gravida nibh vel velit auctor aliquet.</h2>
                                    </div>
                                </div>
                                <div className='slider_wrapper refer_carousel mt-3' data-aos='fade-up'>
                                    <Referenzen references={module?.referenzens} />
                                </div>
                            </div>
                        </section>
                    }
                    {module?.__component === 'modules.quote-bild-logo' &&
                        <section className='wi_full py_3 testimonial_sec'>
                            <Testimonial quotesData={module?.quotes} />
                        </section>
                    }
                </React.Fragment>
            ))}

            {/* <section className='wi_full inner_banner'>
                <TitleComponent />
            </section> */}
            {/* <section className='wi_full py_3 grey_bg angebot_pdf_sec'>
                <TitleWithButtons />
            </section>
            <section className='wi_full py_3 ang_kontakt_sec'>
                <TextWithImage />
            </section> */}
            {/* <section className='wi_full py_3 pt-0 ang_video_sec'>
                <VideoSlider />
            </section> */}
            {/* <section className='wi_full py_3 refrenzen_sec grey_bg'>
                <Referenzen />
            </section> */}
            {/* <section className='wi_full py_3 testimonial_sec'>
                <Testimonial />
            </section> */}
        </div>
    )
}

export default SingleAngebot