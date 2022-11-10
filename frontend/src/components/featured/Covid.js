import { TwitterTweetEmbed } from 'react-twitter-embed';

const Covid = () => {
    return (
        <div className='featured'>
            <h1 className='featured_title'>Covid-19 Face shield</h1>
            <p className='featured_desc featured-item'>
                Amid Pandemic JU Maker Space launched{' '}
                <b>#Save_The_Saviours Initiative</b> which was applauded by{' '}
                <b>Hon'ble CM of Rajasthan, Sh. Ashok Gehlot</b> on his social
                media handles. In the initiative JU Makerspace had committed
                itself towards manufacturing <b>5000+ face shields</b> for
                hospitals of Delhi NCR to help our doctors, paramedics &
                sanitation workers so that they protect them from infection as
                they fight it out on the frontline.
            </p>
            <div className='featured-item'>
                <div className='featured-proof'>
                    <TwitterTweetEmbed tweetId='1248130891118825472' />
                    <img src='https://jecrcuniversity.edu.in/umakerspace12345/Page-8-Image-12.jpg?width=400' />
                    <img src='https://jecrcuniversity.edu.in/umakerspace12345/Page-5-Image-5.jpg' />
                </div>
            </div>
        </div>
    );
};

export default Covid;
