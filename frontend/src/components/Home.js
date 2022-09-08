import React from 'react';

const Home = () => {
    return (
        <>
            <div className='hero'>
                <img
                    className='gear'
                    src={process.env.PUBLIC_URL + '/images/octicon_gear-16.png'}
                />
                <img
                    className='chip'
                    src={process.env.PUBLIC_URL + '/images/uil_circuit.png'}
                />
                <img
                    className='laptop'
                    src={
                        process.env.PUBLIC_URL +
                        '/images/icon-park-solid_code-laptop.png'
                    }
                />
                <div className='hero-text'>
                    Building community for{' '}
                    <span className='grad1'>Everyone</span>
                </div>
            </div>
            <div className='domain'>
                <div className='domain-text'>
                    Domains available in{' '}
                    <span className='grad2'>Makerspace</span>
                </div>
                <div className='domain_list'>
                    <div className='domain_item'>Robotics</div>
                    <div className='domain_item'>Robotics</div>
                    <div className='domain_item'>Robotics</div>
                    <div className='domain_item'>Robotics</div>
                    <div className='domain_item'>Robotics</div>
                    <div className='domain_item'>Robotics</div>
                </div>
                <div className='domain_desc'>
                    Creating cool stuffs, with amazing team <span><img src={process.env.PUBLIC_URL + '/images/idea.png'} /></span>
                </div>
            </div>
        </>
    );
};

export default Home;
