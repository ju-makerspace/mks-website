import distance from '../../asset/featured/detector.jpg';
const SocialDistance = () => {
    return (
        <div className='featured'>
            <h1 className='featured_title'>
                Social Distance Badge & Face Mask Detector
            </h1>
            <p className='featured_desc featured-item'>
                <b>Amid Covid Pandemic</b> in month of April 2021, JU Maker
                Space students have made two significant innovations to solve
                the problem of social distancing and wearing a mask namely{' '}
                <b> Social Distance Badge & Face Mask Detector</b>. This work
                was much-admiredand published in Rajasthan Patrika Newspaper and
                run in various National News Channel Like{' '}
                <b>ABP News, News Nation, News 18 and ETV India</b>.
            </p>
            <div className='featured-item'>
                <div className='featured-covid-badge'>
                    <img className='f-box' src={distance} alt='covid-distance dectector' />
                    <div className='youtube-embed'>
                        <iframe
                            className='f-box'
                            width='100%'
                            height='100%'
                            src='https://www.youtube.com/embed/FxBzNgSiT64'
                            title='YouTube video player'
                            frameborder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowfullscreen
                        ></iframe>
                        <iframe
                            className='f-box'
                            width='100%'
                            height='100%'
                            src='https://www.youtube.com/embed/dpZNg-8CeA4'
                            title='YouTube video player'
                            frameborder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialDistance;
