/* eslint-disable react/no-unescaped-entities */

"use client"
import React, { Suspense, useEffect, useRef, useState } from 'react';
import Throttle from '../utilities/Throttle';
import TopBar from '../components/TopBar';
import dynamic from 'next/dynamic';
import Image from 'next/image';

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
const Footer = dynamic(
    () => import('../components/Footer'),
    { ssr: true, loading: () => <></> }
);
const Fish = dynamic(
    () => import('../components/Fish'),
    { ssr: true, loading: () => <></> }
);



const Home = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0); // Initialized with window.innerWidth
    const [screenHeight, setScreenHeight] = useState(0); // Initialized with window.innerHeight
    const phrases = ['a Software Developer. ', 'a Tech Lover. ', 'an Artist. ', 'an Avid Gamer. ', 'a Health Enthusiast. ', ' a Self Starter. ',];
    const [currentPhrase, setCurrentPhrase] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const homeRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);



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
                            isEven={1 % 2 === 0}

                        />
                        <Project
                            projectName="VS Code Extension"
                            images={[
                                { url: 'https://i.imgur.com/vd78xiw.png', title: 'Avaliable on VScode' },
                                { url: 'https://i.imgur.com/YsJ7Zwb.gif', title: 'Complex Code Generation' },
                                { url: 'https://i.imgur.com/B73mnGD.gif', title: 'Context Aware' },
                                { url: 'https://i.imgur.com/vRPRj0i.gif', title: 'Great at algorithms' }
                            ]} // Array of image URLs
                            projectDetails="This extension revolutionizes your coding experience by introducing context-aware functionality. It intelligently recognizes the programming language you're working in and utilizes your comments to generate optimal code snippets/Full Documents."
                            liveSiteUrl="https://marketplace.visualstudio.com/items?itemName=SerbByteDevelopment.gpt-code-generator"
                            githubUrl="https://github.com/Austin1serb/GPT-Generator-vsCodeExtension"
                            isEven={2 % 2 === 0}
                        />
                        <Project
                            projectName="Payment Form"
                            images={[
                                { url: 'https://i.imgur.com/GOncx4t.png', title: 'Square Payment Form' },
                                { url: 'https://i.imgur.com/VeBprNm.png', title: 'Card validation by Square Payment SDK' },
                            ]}
                            projectDetails="Enhance your e-commerce platform with our streamlined Square Payment Component. It offers a reuseable, secure, user-friendly checkout component, ensuring smooth and efficient transactions for both merchants and customers."
                            liveSiteUrl={null}
                            githubUrl="https://github.com/Austin1serb/SQUARE_PAYMENT_FORM"
                            isEven={3 % 2 === 0}
                        />

                        <Project
                            projectName="Task Manager"
                            images={[
                                { url: 'https://private-user-images.githubusercontent.com/128577470/297871420-4b9b85c2-67c0-42f3-9be0-48ff6eed17a8.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDU2MjIwMDMsIm5iZiI6MTcwNTYyMTcwMywicGF0aCI6Ii8xMjg1Nzc0NzAvMjk3ODcxNDIwLTRiOWI4NWMyLTY3YzAtNDJmMy05YmUwLTQ4ZmY2ZWVkMTdhOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMTE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDExOFQyMzQ4MjNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lYWJiZDYzODkzY2QxODc1MjU0MjU0NzM0NjJmY2M2YTNmMmE4OWFjYTljNWMwNzExNzNjNDI3ZGI5MThlNDc1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.5SPAwUBXWC6Qk-9puwN_fZ3GzJ9UWgil1AH78U5ZRxI', title: 'Dashboard' },
                                { url: 'https://private-user-images.githubusercontent.com/128577470/297871511-d61d1c87-ac93-4ad5-9d8d-fbfaed69cda1.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDU2MjIwMDMsIm5iZiI6MTcwNTYyMTcwMywicGF0aCI6Ii8xMjg1Nzc0NzAvMjk3ODcxNTExLWQ2MWQxYzg3LWFjOTMtNGFkNS05ZDhkLWZiZmFlZDY5Y2RhMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMTE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDExOFQyMzQ4MjNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kOWI5NzEzZGY1Yjk0YTYxZDJmMzNjNzYxMTgzOWFmYWVkNmI0NzUxYWYzYWRjM2NmNDQ0MDU5OGU2NDgxOTNhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.Jw4fa9tE0EE73_N494BTO42OVQFy-E1p04-y0nDoBxo', title: 'User Task List' },
                                { url: 'https://private-user-images.githubusercontent.com/128577470/297871632-f38ed904-d268-4a55-8bc7-36118af5ee76.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDU2MjIwMDMsIm5iZiI6MTcwNTYyMTcwMywicGF0aCI6Ii8xMjg1Nzc0NzAvMjk3ODcxNjMyLWYzOGVkOTA0LWQyNjgtNGE1NS04YmM3LTM2MTE4YWY1ZWU3Ni5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMTE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDExOFQyMzQ4MjNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yMDIyNTRhZTI5MmM2ZWY3YjY3YWE4YjJkODE0MDQ1ZmM3YTY3YTViOTNjZWFiNmZiYzAzMDk3YjI2MTcyZDBjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.nvQ3-Al3gKXbrsFJPnIITuiORNbXFzthx3PU6RHyDJg', title: 'Modify Task Form' },
                            ]}
                            projectDetails="Task Manager is a sleek, full-stack web application utilizing the MERN stack for efficient task management. It features user-friendly account creation, task addition, editing, and viewing, streamlining the way users organize and track their tasks."
                            liveSiteUrl={null}
                            githubUrl="https://github.com/Austin1serb/MERN-APP"
                            isEven={4 % 2 === 0}
                        />
                    </div>
                </section>
                <section className='about'>
                    <div ref={contactRef} className='my-work-container'>
                        <h2 className='about-title'>Contact</h2>
                        <div className='about-title-underline'></div>
                    </div>
                    <div className='contact-container' >
                        {/*<ContactForm />*/}
                        <Suspense fallback={''}>
                            <Fish />
                        </Suspense>

                    </div>
                </section>
                <Footer homeRef={homeRef} />

            </main>

        </div>

    );
};

export default Home;
