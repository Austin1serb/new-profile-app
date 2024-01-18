import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import '../styles/project.css'

const Project = ({ projectName, images, projectDetails, liveSiteUrl, githubUrl, }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        //responsive: [
        //    {
        //        breakpoint: 1024,
        //        settings: {
        //            slidesToShow: 1,
        //            slidesToScroll: 1,
        //            infinite: true,
        //            dots: true
        //        }
        //    },
        //    {
        //        breakpoint: 600,
        //        settings: {
        //            slidesToShow: 1,
        //            slidesToScroll: 1
        //        }
        //    },

        //],

        // You can add more settings as per your requirement
    };

    return (
        <div className="project-container">
            <div className='mobile-project-title'>
                <h3 className='text-outline text-outline-hover' data-text={projectName}>{projectName}</h3>
            </div>
            <div className="project-slider">
                <Slider {...settings}>
                    {images.map((item, index) => (
                        <div key={item.title} className='carousel-inner'>
                            <div className="image-title">{item.title}</div>
                            <div className='image-img-container' >
                                <Image
                                    src={item.url}
                                    alt={`Website ${item.title}`}
                                    height={359}
                                    width={500}
                                    className='carousel-img'
                                    loading='lazy'
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="project-details">
                <h3 className='text-outline text-outline-hover' data-text={projectName}>{projectName}</h3>
                <div className='project-details-cont'>
                    <span>
                        {projectDetails}
                    </span>
                    <a className='text-outline text-outline-hover' data-text='Live Site' href={liveSiteUrl} target="_blank" rel="noopener noreferrer">Live Site</a>
                    <a className='text-outline text-outline-hover' data-text='GitHub Repo' href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                </div>
            
            </div>
            <div className='project-details-mobile'>
                    <a className='text-outline text-outline-hover' data-text='Live Site' href={liveSiteUrl} target="_blank" rel="noopener noreferrer">Live Site </a>
                    <span> | </span>
                    <a className='text-outline text-outline-hover' data-text='GitHub Repo' href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
        </div>
    );
};

export default Project;
