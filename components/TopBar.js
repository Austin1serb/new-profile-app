// components/TopBar.js
import React, { useRef } from 'react';
import styles from '../styles/TopBar.css'


const TopBar = ({homeRef, aboutRef, projectsRef, contactRef}) => {
    const containerRef = useRef(null);

    const scrollToRef = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth'
        });
    };

    const toggleActive = () => {
        const container = containerRef.current;
        if (container) {
            container.classList.toggle('active');
        }
    };
    return (
        <div className='topBar'>

            <div className='leftLinks'>
                <button onClick={() => scrollToRef(homeRef)}>Home</button>
                <button onClick={() => scrollToRef(aboutRef)}>About</button>
                <button onClick={() => scrollToRef(projectsRef)}>Projects</button>
                <button onClick={() => scrollToRef(contactRef)}>Contact</button>
            </div>
            <div className='rightLinks'>
                <div
                    ref={containerRef}
                    className={`topBar-container ${styles.animationContainer}`}
                    onClick={toggleActive}
                    aria-label='links'
                    role='nav-links'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 200 200">
                        <g strokeWidth="6.5" strokeLinecap="round">
                            <path
                                d="M72 82.286h28.75"
                                fill="#009100"
                                fillRule="evenodd"
                                stroke="#fff"
                            />
                            <path
                                d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                                fill="none"
                                stroke="#fff"
                            />
                            <path
                                d="M72 125.143h28.75"
                                fill="#009100"
                                fillRule="evenodd"
                                stroke="#fff"
                            />
                            <path
                                d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                                fill="none"
                                stroke="#fff"
                            />
                            <path
                                d="M100.75 82.286h28.75"
                                fill="#009100"
                                fillRule="evenodd"
                                stroke="#fff"
                            />
                            <path
                                d="M100.75 125.143h28.75"
                                fill="#009100"
                                fillRule="evenodd"
                                stroke="#fff"
                            />
                        </g>
                    </svg>
                </div>

            </div>
        </div>
    );
};

export default TopBar;
