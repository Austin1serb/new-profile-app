import React, { useState } from 'react';

const Project = ({ project }) => {
    const [selectedImage, setSelectedImage] = useState(project.images[0]);

    return (
        <div className="project">
            <div className="project-images">
                <img src={selectedImage} alt="Main" className="main-image" />
                <div className="image-scroller">
                    {project.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Project ${index}`}
                            onClick={() => setSelectedImage(image)}
                            className="thumb-image"
                        />
                    ))}
                </div>
            </div>
            <div className="project-links">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">View Live Site</a>
                <a href={project.moreInfoUrl} target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
        </div>
    );
};
