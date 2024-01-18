import React from 'react'
import Icon from '../components/Icon';
import profilePicture from '../assets/profile.jpg';
import Image from 'next/image';
import '../styles/index.css'


const About = () => {
  return (
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
                                {/* TypeScript */}
                                <div className="skill-icon">
                                    <h6>TYPESCRIPT</h6>
                                    <div>
                                        <div className="box" style={{ transform: 'translateY(-5px)' }}>
                                            <div className="box-color">
                                                <Icon height='45' width='45' className='color' name='typescript' />
                                            </div>
                                            <Icon height='45' width='45' className='gray' name='typescript' />
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
                                {/* MYSQL */}
                                <div className="skill-icon">
                                    <h6>POSTGRESQL</h6>
                                    <div className="box" style={{ transform: 'translateX(-5px)' }}>
                                        <div className="box-color">
                                            <Icon className='color' name='postgresql' height={50} width={50} />
                                        </div>
                                        <Icon className='gray' name='postgresql' height={50} width={50} />
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
  )
}

export default About