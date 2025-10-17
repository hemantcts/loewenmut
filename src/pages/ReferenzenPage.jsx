import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AllReferenzens from '../components/AllReferenzens'

const ReferenzenPage = () => {

    const isMobile = window.innerWidth < 1200;

    // https://backend.loewenmut.ch/api/referenzen-page?populate[Titel_Button_Abschnitt][populate][button][populate]=*

    const [pageData, setPageData] = useState([])
    const [lastSection, setLastSection] = useState([])
    const [referenzens, setReferenzens] = useState([])

    const [categories, setCategories] = useState([{ value: "", label: "Alle" }]);
    const [selectedCategory, setSelectedCategory] = useState({ value: "", label: "Alle" });

    const [filteredReferenzens, setFilteredReferenzens] = useState([{ value: "", label: "Alle" }]);
    const [selectedFilteredReferenzen, setSelectedFilteredReferenzen] = useState("");

    const [activeIndex, setActiveIndex] = useState(0);

    

    const getPageData = async () => {
        const response = await fetch('https://backend.loewenmut.ch/api/referenzen-page?populate[Titel_Button_Abschnitt][populate][button][populate]=*');
        const data = await response.json();
        // console.log(data);

        if (data.data) {
            setPageData(data?.data);
            setLastSection(data?.data?.Titel_Button_Abschnitt);
        }

    }


    const getCategories = async () => {
        const response = await fetch('https://backend.loewenmut.ch/api/services?populate=*');
        const data = await response.json();
        // console.log(data);

        // if (data.data) {
        //     const uniqueCategories = [...new Set(data.data.map(kategorie => kategorie.Titel))];
        //     const formattedOptions = uniqueCategories.map(Kategorie => ({
        //         value: Kategorie,
        //         label: Kategorie,
        //     }));
        //     setCategories((prev) =>
        //         prev.length === 1 ? [...prev, ...formattedOptions] : prev
        //     )
        // }

    }
    



    const getReferenzens = async () => {
        const response = await fetch(`https://backend.loewenmut.ch/api/referenzens?populate=*&pagination[limit]=100&sort[0]=Titel`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setReferenzens(data.data);
            const uniqueCategories = [...new Set(data.data.map(ref => ref.dienstleistungen.Titel))];
            const formattedOptions = uniqueCategories.map(Kategorie => ({
                value: Kategorie,
                label: Kategorie,
            }));

            setCategories((prev) =>
                prev.length === 1 ? [...prev, ...formattedOptions] : prev
            )

            const uniqueCategories2 = [...new Set(data.data.map(ref => ref.Branchen))];
            const formattedOptions2 = uniqueCategories2.map(Kategorie => ({
                value: Kategorie,
                label: Kategorie,
            }));

            setFilteredReferenzens((prev) =>
                prev.length === 1 ? [...prev, ...formattedOptions2] : prev
            )
        }
    }


    useEffect(() => {
        getPageData();
        getReferenzens();
        getCategories()
    }, [])


    const handleChange = (type) => {
        setSelectedCategory(type);
    };

    


    return (
        <div className='page_content referenzen_page'>
            <section className='wi_full inner_banner'>
                <div className='container'>
                    <div className='banner_content' data-aos={!isMobile ? 'zoom-in' : undefined}>
                        <h1>{pageData?.Titel}</h1>
                    </div>
                </div>
            </section>
            <section className='wi_full referenzen_sec'>
                <div className='container'>
                    <div className='data_filters'>
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
                        <div className='select-search'>
                            <fieldset className='col--branch'>
                                <select class="selct_custom" name="so_branch" value={selectedFilteredReferenzen} onChange={(e) => setSelectedFilteredReferenzen(e.target.value)}>
                                    {filteredReferenzens.length > 0 && filteredReferenzens.map((item, index) => (
                                        <option value={item.value} key={index}>{item.label}</option>
                                    ))}
                                    {/* <option value="Gesundheit und Pflege">Gesundheit und Pflege</option>
                                    <option value="Immobilien und Bauwesen">Immobilien und Bauwesen</option>
                                    <option value="Marke und Unternehmen">Marke und Unternehmen</option>
                                    <option value="Verbände und Öffentliche Hand">Verbände und Öffentliche Hand</option> */}
                                </select>
                            </fieldset>
                            <fieldset className='col--search'>
                                <input type='text' name='so_search' maxlength="50" className='srch--field' placeholder='Suchbegriff' />
                            </fieldset>
                        </div>
                    </div>
                    <div className='tab-content mt-4 blog_list_wrapper' id='myTabContent' data-aos={!isMobile ? 'fade-up' : undefined}>
                        <div className='tab-pane fade show active' role='tabpanel' aria-labelledby='tab_1'>
                            <AllReferenzens referenzens={referenzens} selectedCategory={selectedCategory} selectedFilteredReferenzen={selectedFilteredReferenzen} />
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
        </div >
    )
}

export default ReferenzenPage