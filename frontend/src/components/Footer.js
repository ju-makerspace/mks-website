import '../styles/Footer.css';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-logo'>
                    <section className='Hero'>
                        <img
                            className='footer-logo-img'
                            src={process.env.PUBLIC_URL + '/images/mks.png'}
                        />
                        <ul>
                            <li>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        '/images/twitter.png'
                                    }
                                ></img>
                            </li>
                            <li>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        '/images/github.png'
                                    }
                                ></img>
                            </li>
                            <li>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        '/images/insta.png'
                                    }
                                ></img>
                            </li>
                            <li>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        '/images/discord.png'
                                    }
                                ></img>
                            </li>
                        </ul>
                    </section>

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
