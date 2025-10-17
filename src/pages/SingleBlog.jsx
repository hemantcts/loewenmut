import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ImageSlider from '../components/ImageSlider'
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

const SingleBlog = () => {

    let { title } = useParams();
    const navigate = useNavigate()

    const isMobile = window.innerWidth < 1200;


    // const [modules, setModules] = useState([])
    const [blog, setBlog] = useState(null)
    const [blogs, setBlogs] = useState([])


    const getBlogs = async () => {
        const response = await fetch(`https://backend.loewenmut.ch/api/blog-posts?[populate][Bild][populate]=*&[populate][Media][populate]=*&pagination[limit]=100&sort[0]=Titel`)
        const data = await response.json();
        console.log(data);
        if (data) {
            setBlogs(data.data);
        }
    }


    useEffect(() => {
        getBlogs();
    }, [])

    
    useEffect(() => {
        console.log(blogs, title);
        if (blogs?.length > 0 && title) {
            const matchedCategory = blogs?.find((category) => category.slug === title);
            // console.log( matchedCategory);
            if (matchedCategory) {
                setBlog(matchedCategory);
                // setModules(matchedCategory?.modules)

            } else {
                navigate("/error"); // Redirect to trigger the catch-all error route
            }
        }


    }, [blogs, title]);


    return (
        <div className='page_content blogs_detail'>
            <section className='wi_full py_3 single_blog_sec'>
                <div className='container'>
                    <div className='sec_max_width' data-aos={!isMobile ? 'zoom-in' : undefined}>
                        <div className='post_date'>Insight | 15.06.25</div>
                        <h1>{blog?.Titel}</h1>
                        <p>{blog?.Beschreibung}</p>
                        <picture className='my-3 d-block'>
                            {blog?.Media && <ImageSlider images={blog?.Media}/>}
                        </picture>
                        {blog?.Inhalt && <BlocksRenderer content={blog?.Inhalt} />}
                        <div className='btn_block'>
                            <Link to="" className='button theme_btn'>
                                zur Übersicht
                                <svg width="40" height="15" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39.9424 7.06055L32.4659 14.1211L30.9535 12.5198L36.7333 7.06055L30.9535 1.60128L32.4659 0L39.9424 7.06055Z" fill="inherit" />
                                    <path d="M38.3375 5.95908V8.16201H0V5.95908H38.3375Z" fill="inherit" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SingleBlog