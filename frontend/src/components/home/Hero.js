import '../../styles/desktop/home/Hero.css';

const Hero = () => {
    return (
        <div className='hero'>
            <img
                className='gear'
                src={process.env.PUBLIC_URL + '/images/octicon_gear-16.png'}
                alt='utilities'
            />
            <img
                className='chip'
                src={process.env.PUBLIC_URL + '/images/uil_circuit.png'}
                alt='utilities'
            />
            <img
                className='laptop'
                src={
                    process.env.PUBLIC_URL +
                    '/images/icon-park-solid_code-laptop.png'
                }
                alt='utilities'
            />
            <div className='hero-text'>
                Building community for <span className='grad1'>Everyone</span>
            </div>
        </div>
    );
};

export default Hero;
