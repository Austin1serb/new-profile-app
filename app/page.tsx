/* eslint-disable react/no-unescaped-entities */

"use client"
import React, { useEffect, useRef, useState } from 'react';
import './globals.css';
import '../styles/index.css'
import Throttle from '../utilities/Throttle';
import TopBar from '../components/TopBar';
import dynamic from 'next/dynamic';
import Image from 'next/image';
//import Loader from '../assets/ajax-loader.gif'
//import Project from '../components/Project';
const CanvasDots = dynamic(
    () => import('../components/CanvasDots'),
    { ssr: false, loading: () => <Image src={'https://i.imgur.com/ORzQeVw.png'} width={1200} height={800} alt="backgound" className="connecting-dots-static" priority /> }
);
const About = dynamic(
    () => import('../components/About'),
    { ssr: true, loading: () => <></> }
);

const Project = dynamic(
    () => import('../components/Project'),
    { ssr: false, loading: () => <></> }
);


const Home = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0); // Initialized with window.innerWidth
    const [screenHeight, setScreenHeight] = useState(0); // Initialized with window.innerHeight
    const phrases = ['a Software Developer.', 'a Tech Lover', 'an Artist.', 'an Avid Gamer.', 'a Health Enthusiast.', ' a Human.',];
    const [currentPhrase, setCurrentPhrase] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);



    useEffect(() => {
        let timer: string | number | NodeJS.Timeout | undefined;
        const current = phrases[loopNum % phrases.length];

        if (isDeleting) {
            setTypingSpeed(70); // Speed up for deleting
            timer = setTimeout(() => {
                setCurrentPhrase(current.substring(0, currentPhrase.length - 1));
            }, typingSpeed);
        } else {
            timer = setTimeout(() => {
                setCurrentPhrase(current.substring(0, currentPhrase.length + 1));
            }, typingSpeed);
        }

        // Check if the phrase is completely typed out
        if (!isDeleting && currentPhrase === current) {
            // Wait for 1 second before starting to delete
            timer = setTimeout(() => {
                setIsDeleting(true);
                setTypingSpeed(150); // Reset speed for typing next phrase
            }, 1000); // 1 second delay before deleting
        } else if (isDeleting && currentPhrase === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
        }

        return () => clearTimeout(timer);
    }, [currentPhrase, isDeleting, loopNum, phrases, typingSpeed]);


    useEffect(() => {

        function handleResize() {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                setIsMobile(true);
            } else {
                setIsMobile(false)
            }
            setScreenWidth(window.innerWidth); // Update screenWidth state
            setScreenHeight(window.innerHeight); // Update screenHeight state
        }
        const throttledResize = Throttle(handleResize, 200);
        window.addEventListener('resize', throttledResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', throttledResize);
        };
    }, []);

    const scrollToMyWork = () => {
        const section = document.getElementById('my-work');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (

        <div className='main-container'>
            <div className='top-container' ref={homeRef}></div>
            <header className='header-container'>
                <h1 className='header-index'>
                    Hello, I'm <span className='name-index'>Austin.</span> <br />
                    I'm <span className="phrase">{currentPhrase}</span>
                    <span className="cursor">|</span> {/* Add a cursor */}
                    <br />
                    <div className="center-container">

                        <button onClick={scrollToMyWork} className="btn">
                            <svg className='btn-outline' width="200px" height="60px" viewBox="0 0 200 60" >
                                <polyline points="199,1 199,59 1,59 1,1 199,1" className="bg-line" />
                                <polyline points="199,1 199,59 1,59 1,1 199,1" className="hl-line" />
                            </svg>
                            <span>VIEW MY WORK   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                            </svg> </span>

                        </button>

                    </div>
                </h1>
            </header>
            <section className='canvas-container'>
                <CanvasDots isMobile={isMobile} screenHeight={screenHeight} screenWidth={screenWidth} />
            </section>
            <div className="separation"></div>
            <main id="my-work" className='my-work' >
                <TopBar
                    homeRef={homeRef}
                    aboutRef={aboutRef}
                    projectsRef={projectsRef}
                    contactRef={contactRef}
                />
                <section className="about-section" >
                    <div ref={aboutRef} className='my-work-container'>
                        <h2 className='about-title'>About</h2>
                        <div className='about-title-underline'></div>
                    </div>
                    <About />
                </section>
                <section className='projects'>
                    <div ref={projectsRef} className='my-work-container'>
                        <h2 className='about-title'>Projects</h2>
                        <div className='about-title-underline'></div>
                    </div>
                    <div className='projects-container'>
                        <Project
                            projectName="Ecommerce Website"
                            images={[
                                { url: 'https://i.imgur.com/dkswWBC.gif', title: 'Home Page & DropDown' },
                                { url: 'https://i.imgur.com/ifEoNri.gif', title: 'Shop Page & CheckOut' },
                                { url: 'https://i.imgur.com/ccGzdP6.gif', title: 'Admin Dashboard' }
                            ]} // Array of image URLs
                            projectDetails='Full product management, User Auth, Payment processing | React | Node.js | Express.js | MongoDB | Square SDK | Clouninary API | Google API'
                            liveSiteUrl="https://herbanaturalco.com/"
                            githubUrl="https://github.com/Austin1serb/Xhale-Vapor-N-Smoke"

                        />
                    </div>
                </section>
                <section className='contact'>
                    <div ref={contactRef} className='my-work-container'>
                        <h2 className='contact-title'>Contact</h2>
                        <div className='contact-title-underline'></div>
                    </div>
                    <div className='contact-container'>
                    </div>
                </section>
            </main>

        </div>

    );
};

export default Home;
