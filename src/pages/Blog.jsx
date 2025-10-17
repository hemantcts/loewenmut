import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AllReferenzens from '../components/AllReferenzens'
import ColoredSVG from '../components/ColoredSVG'

const Blog = () => {

    const isMobile = window.innerWidth < 1200;

    const [bannerSection, setBannerSection] = useState([])
    const [lastSection, setLastSection] = useState([])
    const [blogs, setBlogs] = useState([])

    const [categories, setCategories] = useState([{ value: "", label: "Alle" }]);
    const [selectedCategory, setSelectedCategory] = useState({ value: "", label: "Alle" });

    // const [filteredReferenzens, setFilteredReferenzens] = useState([{ value: "", label: "Alle" }]);
    // const [selectedFilteredReferenzen, setSelectedFilteredReferenzen] = useState("");

    const [activeIndex, setActiveIndex] = useState(0);



    const getPageData = async () => {
        const response = await fetch('https://backend.loewenmut.ch/api/blog-page?populate[Bannerbereich][populate]=*&populate[Titel_Button_Abschnitt][populate][button][populate]=*');
        const data = await response.json();

        if (data.data) {
            setBannerSection(data?.data?.Bannerbereich);
            setLastSection(data?.data?.Titel_Button_Abschnitt);
        }

    }




    const getBlogs = async () => {
        const response = await fetch(`https://backend.loewenmut.ch/api/blog-posts?populate=*&pagination[limit]=100&sort[0]=Titel`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setBlogs(data.data);
            const uniqueCategories = [...new Set(data.data.map(blog => blog.Kategorie))];
            const formattedOptions = uniqueCategories.map(Kategorie => ({
                value: Kategorie,
                label: Kategorie,
            }));

            setCategories((prev) =>
                prev.length === 1 ? [...prev, ...formattedOptions] : prev
            )

        }
    }


    useEffect(() => {
        getPageData();
        getBlogs();
    }, [])


    const handleChange = (type) => {
        setSelectedCategory(type);
    };



    return (
        <div className='page_content blog_page'>
            <section className='wi_full inner_banner'>
                <div className='container'>
                    <div className='single_baner_data' data-aos={!isMobile ? 'zoom-in' : undefined}>
                        <div className='banner_content'>
                            <h1>{bannerSection?.Titel}</h1>
                            <p>{bannerSection?.Beschreibung}</p>
                        </div>
                        <div className='angebot_icon'>
                            {/* <img className='svg-img' src={`https://backend.loewenmut.ch/${bannerSection?.icon?.url}`} alt="" /> */}
                            {bannerSection?.icon?.url && <ColoredSVG
                                url={`https://backend.loewenmut.ch${bannerSection?.icon?.url}`}
                                color="inherit"
                            />}
                        </div>
                    </div>
                </div>
            </section>
            <section className='wi_full blog_posts_sec'>
                <div className='container'>
                    {/* <ul className='nav nav-tabs' id='myTab' role='tablist' data-aos='zoom-in'>
                        <li className='nav-item' role='presentation'>
                            <button className='nav-link active' id='tab_1' data-bs-toggle='tab' data-bs-target='#tab1' type='button' role='tab'>Alle</button>
                        </li>
                        <li className='nav-item' role='presentation'>
                            <button className='nav-link' id='tab_2' data-bs-toggle='tab' data-bs-target='#tab2' type='button' role='tab'>Wissenswertes</button>
                        </li>
                        <li className='nav-item' role='presentation'>
                            <button className='nav-link' id='tab_3' data-bs-toggle='tab' data-bs-target='#tab3' type='button' role='tab'>Insights</button>
                        </li>
                        <li className='nav-item' role='presentation'>
                            <button className='nav-link' id='tab_4' data-bs-toggle='tab' data-bs-target='#tab4' type='button' role='tab'>Projekte</button>
                        </li>
                    </ul> */}
                    <ul className='nav nav-tabs' id='myTab' role='tablist' data-aos={!isMobile ? 'zoom-in' : undefined}>
                        {categories.map((type, index) => {
                            const isActive = index === activeIndex;

                            return (
                                <li key={index} className='nav-item' role='presentation'>
                                    <button
                                        className={`nav-link ${isActive ? 'active' : ''}`}
                                        id={`tab_${index + 1}`}
                                        data-bs-toggle='tab'
                                        data-bs-target={`#tab${index + 1}`}
                                        type='button'
                                        role='tab'
                                        onClick={() => {
                                            setActiveIndex(index);
                                            handleChange(type);
                                        }}
                                    >
                                        {type.label}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                    <div className='tab-content mt-4 blog_list_wrapper' id='myTabContent' data-aos={!isMobile ? 'fade-up' : undefined}>
                        <div className='tab-pane fade show active' role='tabpanel' aria-labelledby='tab_1'>
                            <AllReferenzens referenzens={blogs} selectedCategory={selectedCategory} type={'blogs'} />
                            <div className='btn_block'>
                                <button type='button' id='loadMore' className='button border-0 theme_btn'>
                                    Weitere laden
                                    <svg width='40' height='15' viewBox='0 0 40 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M39.9424 7.06055L32.4659 14.1211L30.9535 12.5198L36.7333 7.06055L30.9535 1.60128L32.4659 0L39.9424 7.06055Z' fill='inherit' />
                                        <path d='M38.3375 5.95908V8.16201H0V5.95908H38.3375Z' fill='inherit' />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className='wi_full py_3 kom_data_sec'>
                <div className='container' data-aos={!isMobile ? 'fade-up' : undefined}>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h2>{lastSection?.Titel}</h2>
                        </div>
                        <div className='col-lg-6 mt-4 mt-lg-0'>
                            <p>{lastSection?.Beschreibung}</p>
                            <div className='btn_block'>
                                <Link to={lastSection?.button?.button_link} className='button theme_btn'>
                                    {lastSection?.button?.button_text}
                                    <svg width='40' height='15' viewBox='0 0 40 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M39.9424 7.06055L32.4659 14.1211L30.9535 12.5198L36.7333 7.06055L30.9535 1.60128L32.4659 0L39.9424 7.06055Z' fill='inherit' />
                                        <path d='M38.3375 5.95908V8.16201H0V5.95908H38.3375Z' fill='inherit' />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Blog