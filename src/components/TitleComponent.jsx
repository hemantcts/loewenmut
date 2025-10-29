import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ColoredSVG from './ColoredSVG';

const TitleComponent = ({ title, description, icon, isLoading }) => {
    const isMobile = window.innerWidth < 1200;

    return (
        <div className='container'>
            <div className='single_baner_data'>
                <div className='banner_content' style={{width: '100%'}} data-aos={!isMobile ? 'fade-up' : undefined}>
                    <h1>
                        {!isLoading ? (
                            title
                        ) : (
                            <Skeleton count={1} />
                        )}
                    </h1>
                    <p>
                        {!isLoading ? (
                            description
                        ) : (
                            <Skeleton count={6} />
                        )}
                    </p>
                </div>
                <div className='angebot_icon'>
                    {!isLoading && <ColoredSVG
                        url={`https://backend.loewenmut.ch${icon?.url}`}
                        color="inherit"
                    />}
                </div>
            </div>
        </div>
    )
}

export default TitleComponent