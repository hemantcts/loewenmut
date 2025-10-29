import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const AllReferenzens = ({ referenzens, selectedCategory, selectedFilteredReferenzen, type }) => {

    const filteredReferenzens = referenzens?.filter(ref => {
        const matchCategory = selectedCategory.value
            ? ref?.dienstleistungen?.Titel === selectedCategory.value || ref?.Kategorie === selectedCategory.value
            : true;

        const matchBranch = selectedFilteredReferenzen
            ? ref?.Branchen === selectedFilteredReferenzen
            : true;

        return matchCategory && matchBranch;
    });
    // Show all if no category selected

    const filterTitle = (title) => {
        return title.toLowerCase().replace(/\s+/g, '-');
    }

    if (!Array.isArray(filteredReferenzens)) {
        return null;
    }


    return (
        <div className='row align-items-center'>
            {filteredReferenzens.length > 0 && filteredReferenzens.map((item, index) => (
                <div className='col-6 col-lg-4 post_item' key={index}>
                    <Link to={type==='blogs' ? `/blog/${item.slug}` : `/referenzen/${item.slug}`} className='post_inner custom_cursor_click weiterlesen_cursor_text'>
                        <picture>
                            <img src={`https://backend.loewenmut.ch${item?.Bild?.url}`} className='w-100' alt='#' />
                        </picture>
                        <div className='post_text'>
                            <div className='post_date'>Insight | 15.06.25</div>
                            <h3>{item?.Titel}</h3>
                            <p>{item?.Beschreibung}</p>
                        </div>
                    </Link>
                </div>

                // <div className='col-6 col-lg-4 post_item'>
                //     <Link to={'/referenzen-detail'} className='post_inner'>
                //         <picture>
                //             <img src='./images/blog-zurich.png' className='w-100' alt='#' />
                //         </picture>
                //         <div className='post_text'>
                //             <div className='post_date'>Insight | 15.06.25</div>
                //             <h3>The Zurich Chamber Singers</h3>
                //             <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                //         </div>
                //     </Link>
                // </div>



                // <div className='col-6 col-lg-4 post_item'>
                //     <Link to={'/blog-detail'} className='post_inner'>
                //         <picture>
                //             <img src='./images/blog-zurich.png' className='w-100' alt='#' />
                //         </picture>
                //         <div className='post_text'>
                //             <div className='post_date'>Insight | 15.06.25</div>
                //             <h3>The Zurich Chamber Singers</h3>
                //             <p>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                //         </div>
                //     </Link>
                // </div>
            ))}
        </div>
    )
}

export default AllReferenzens