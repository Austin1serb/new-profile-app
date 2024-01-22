import React from 'react'
import '../styles/footer.scss'
import Icon from './Icon';
// Define the props interface
interface FooterProps {
    homeRef: React.RefObject<HTMLDivElement>;
}

// Use the interface in your Footer component
const Footer: React.FC<FooterProps> = ({ homeRef }) => {
    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop,
                behavior: 'smooth'
            });
        }
    };
    return (
        <footer className='footer'>
            <div className='footer-up-icon' onClick={() => scrollToRef(homeRef)} >
                <Icon name='up' className='footer-svg-up' height='50' width='50' />
            </div>
            <div className='footer-icons'>
                <div>
                    <a href="https://github.com/Austin1serb" target="_blank" rel="noopener noreferrer">
                        <Icon name='github' className='footer-svg-github' height='50' width='50' />
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/austin-serb/" target="_blank" rel="noopener noreferrer">
                        <Icon name='linkedin' className='footer-svg' height='70' width='70' />
                    </a>
                </div>
                <div>
                    <a href="https://www.facebook.com/austin.serb" target="_blank" rel="noopener noreferrer">
                        <Icon name='facebook' className='footer-svg' height='52' width='52' />
                    </a>
                </div>
                <div>
                    <a href="mailto:austin.serb@icloud.com">
                        <Icon name='email' className='footer-svg' height='60' width='60' />
                    </a>
                </div>
            </div>

            <div className='footer-text'>
                <p>Austin Serb ©2024</p>
            </div>
        </footer>
    )
}

export default Footer