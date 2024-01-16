/* eslint-disable react/no-unescaped-entities */
// pages/index.js
"use client"
import React, { useEffect, useRef, useState } from 'react';
import '../styles/index.css'
import Throttle from '../utilities/Throttle';
import TopBar from '../components/TopBar';
import './globals.css';
import dynamic from 'next/dynamic';
import StaticCanvasDots from '../components/StaticCanvasDots';
import Icon from '../components/Icon';
import Image from 'next/image';
import profilePicture from '../assets/profile.jpg';
// Dynamically import the component, disable SSR
const CanvasDots = dynamic(
    () => import('../components/CanvasDots'),
    { ssr:false, loading: () => <StaticCanvasDots screenHeight={'100vh'} screenWidth={'100vw'} isMobile={true} /> }
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
            <div className='canvas-container'>
               <CanvasDots isMobile={isMobile} screenHeight={screenHeight} screenWidth={screenWidth}/>
            </div>
            <div className='header-container'>
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
            </div>
            <div className="separation"></div>
            <div id="my-work" className='my-work' >
                <TopBar
                    homeRef={homeRef}
                    aboutRef={aboutRef}
                    projectsRef={projectsRef}
                    contactRef={contactRef}
                />
                <div ref={aboutRef} className='my-work-container'>
                    <h2 className='about-title'>About</h2>
                    <div className='about-title-underline'></div>
                </div>
                <div className='about-container'>
                    <div className='profile-picture-container'>
                        <div className="profile-picture">
                            <div className="profile-box">
                                <div className="profile-box-color">

                                    <div className="profile-picture-image">
                                        <Image
                                            src={profilePicture}
                                            alt="Profile"
                                            height={367} width={320}
                                            className='profile-color'
                                            placeholder="blur"
                                            blurDataURL="https://i.imgur.com/Vd9UEt7.jpg"
                                            priority
                                        />
                                    </div>
                                </div>
                                <div className="profile-picture-image">
                                    <Image
                                        src={profilePicture}
                                        alt="Profile"
                                        height={367} width={320}
                                        className='profile-gray'
                                        placeholder="blur"
                                        blurDataURL="https://i.imgur.com/Vd9UEt7.jpg"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='profile-description'>

                            <h2>
                                Fully committed to the philosophy of life-long learning, I’m a full stack developer with a deep passion for JavaScript, React and all things web development. The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development. When I’m not at my computer I like to spend my time drawing, keeping fit and being social.</h2>
                        </div>
                    </div>
                    <div className="skills-section">
                        <h3>Languages</h3>
                        <div className="skills-grid">
                            {/* HTML */}
                            <div className="skill-icon">
                                <h6>HTML</h6>
                                <div className="box">
                                    <div className="box-color">
                                        <Icon className='color' name='html' height={50} width={50} />
                                    </div>
                                    <Icon className='gray' name='html' height={50} width={50} />
                                </div>
                            </div>

                            {/* CSS */}
                            <div className="skill-icon">
                                <h6>CSS</h6>
                                <div className="box">
                                    <div className="box-color">
                                        <Icon className='color' name='css' height={50} width={50} />
                                    </div>
                                    <Icon className='gray' name='css' height={50} width={50} />
                                </div>
                            </div>

                            {/* JavaScript */}
                            <div className="skill-icon">
                                <h6>JAVASCRIPT</h6>
                                <div>
                                    <div className="box">
                                        <div className="box-color">
                                            <Icon height='40px' width='40px' className='color' name='javascript' />
                                        </div>
                                        <Icon height='40px' width='40px' className='gray' name='javascript' />
                                    </div>
                                </div>
                            </div>

                            {/* PYTHON */}
                            <div className="skill-icon">
                                <h6>PYTHON</h6>
                                <div className="box">
                                    <div className="box-color">
                                        <Icon className='color' name='python' height={50} width={50} />
                                    </div>
                                    <Icon className='gray' name='python' height={50} width={50} />
                                </div>
                            </div>

                            {/* JAVA */}
                            <div className="skill-icon">
                                <h6>JAVA</h6>
                                <div className="box">
                                    <div className="box-color">
                                        <Icon className='color' name='java' height={50} width={50} />
                                    </div>
                                    <Icon className='gray' name='java' height={50} width={50} />
                                </div>
                            </div>
                        </div>

                        {/* Databases */}
                        <h3>Databases</h3>
                        <div className="skills-grid">
                            {/* MONGODB */}
                            <div className="skill-icon">
                                <h6>MONGODB</h6>
                                <div className="box">
                                    <div className="box-color">
                                        <Icon className='color' name='mongodb' height={50} width={50} />
                                    </div>
                                    <Icon className='gray' name='mongodb' height={50} width={50} />
                                </div>
                            </div>

                            {/* MYSQL */}
                            <div className="skill-icon">
                                <h6>MYSQL</h6>
                                <div className="box" >
                                    <div className="box-color">
                                        <Icon className='color' name='mysql' height={50} width={50} />
                                    </div>
                                    <Icon className='gray' name='mysql' height={50} width={50} />
                                </div>
                            </div>

                            {/* ...other databases... */}
                        </div>

                        {/* Libraries & Frameworks */}
                        <h3>Libraries & Frameworks</h3>
                        <div className="skills-grid">
                            {/* REACT */}
                            <div className="skill-icon">
                                <h6>REACT</h6>
                                <div className="box">
                                    <div className="box-color">
                                        <Icon className='color' name='react' height={50} width={50} />
                                    </div>
                                    <Icon className='gray' name='react' height={50} width={50} />
                                </div>
                            </div>

                            {/* Express.js */}
                            <div className="skill-icon">
                                <h6>Express.js</h6>
                                <div className="box">

                                    <Icon className='gray' name='express' height={50} width={50} />
                                </div>
                            </div>

                            {/* NEXT.js */}
                            <div className="skill-icon" >
                                <h6>NEXT.js</h6>
                                <div className="box">
                                    <Icon className='next-icon' name='next' height={50} width={50} />
                                </div>
                            </div>

                            {/* NODE.js */}
                            <div className="skill-icon">
                                <h6>NODE.js</h6>
                                <div className="box">
                                    <div className="box-color">
                                        <Icon className='color' name='node' height={50} width={50} />
                                    </div>
                                    <Icon className='gray' name='node' height={50} width={50} />
                                </div>
                            </div>

                            {/* GIT */}
                            <div className="skill-icon">
                                <h6>GIT</h6>
                                <div className="box">
                                    <div className="box-color">
                                        <Icon className='color' name='git' height={50} width={50} />
                                    </div>
                                    <Icon className='gray' name='git' height={50} width={50} />
                                </div>
                            </div>

                            {/* MATERIAL UI */}
                            <div className="skill-icon">
                                <h6>MATERIAL UI</h6>
                                <div className="box">
                                    <div className="box-color">
                                        <Icon className='color' name='mui' height={50} width={50} />
                                    </div>
                                    <Icon className='gray' name='mui' height={50} width={50} />
                                </div>
                            </div>

                            {/* AWS EC2 */}
                            <div className="skill-icon">
                                <h6>AWS EC2</h6>
                                <div className="box">
                                    <div className="box-color">
                                        <Icon className='color' name='aws' height={50} width={50} />
                                    </div>
                                    <Icon className='gray' name='aws' height={50} width={50} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div ref={projectsRef} className='my-work-container'>
                    <h2 className='about-title'>Projects</h2>
                    <div className='about-title-underline'></div>
                </div>
                <div className='projects-container'>

                </div>

            </div>

        </div>

    );
};

export default Home;
