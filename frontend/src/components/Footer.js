import '../styles/desktop/Footer.css';
import { IoMailSharp } from 'react-icons/io5';
import { SiInstagram, SiGithub, SiTwitter } from 'react-icons/si';
import { TfiLinkedin } from 'react-icons/tfi';
import { IconContext } from 'react-icons/lib';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-logo'>
                    <IconContext.Provider
                        className='social-icons'
                        value={{ color: 'rgb(143, 143, 143)', size: '1.4rem' }}
                    >
                        <section className='Hero'>
                            <img
                                className='footer-logo-img'
                                src={process.env.PUBLIC_URL + '/images/mks.png'}
                            />
                            <ul>
                                <li>
                                    {/* <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            '/images/twitter.png'
                                        }
                                    ></img> */}
                                    <SiTwitter />
                                </li>
                                <li>
                                    {/* <SlSocialLinkedin /> */}
                                    {/* <TiSocialLinkedinCircular /> */}
                                    <a
                                        target='_blank'
                                        href='https://www.linkedin.com/company/ju-makerspace/'
                                    >
                                        <TfiLinkedin />
                                    </a>
                                    {/* <TfiLinkedin /> */}
                                </li>
                                <li>
                                    {/* <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            '/images/github.png'
                                        }
                                    ></img> */}
                                    <a
                                        target='_blank'
                                        href='https://github.com/ju-makerspace'
                                    >
                                        <SiGithub />
                                    </a>
                                </li>
                                <li>
                                    {/* <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        '/images/insta.png'
                                    }
                                ></img> */}
                                    <a
                                        target='_blank'
                                        href='https://www.instagram.com/jumakerspace/'
                                    >
                                        <SiInstagram />
                                    </a>
                                </li>
                                <li>
                                    {/* <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        '/images/discord.png'
                                    }
                                ></img> */}
                                    <IoMailSharp />
                                    {/* <IoMailOutline className='social-icons' /> */}
                                </li>
                            </ul>
                        </section>
                    </IconContext.Provider>

                    <div className='sec-container'>
                        <section className='Domain'>
                            <h1>Explore</h1>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Mentors</li>
                                <li>Almuni</li>
                            </ul>
                        </section>

                        <section className='Domain'>
                            <h1>Visit</h1>
                            <ul>
                                <li>JECRC University</li>
                                <li>Join Community</li>
                                <li>Contact Us</li>
                                <li>Feedback</li>
                            </ul>
                        </section>
                    </div>
                </div>
                <hr />
                <div className='copy-rights'>
                    <p>© JU Makerspce 2022</p>
                    <p>|</p>
                    <p>All rights reserved</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
