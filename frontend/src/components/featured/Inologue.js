import collab1 from '../../asset/featured/collab1.jpg';
const Inologue = () => {
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
                <div className='featured-collab'>
                    <img width={500} src={collab1} alt='collab' />
                </div>
            </div>
        </div>
    );
};

export default Inologue;
