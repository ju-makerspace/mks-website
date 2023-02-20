import { TwitterTweetEmbed } from 'react-twitter-embed';
import covid_news1 from '../../asset/featured/covid-news-1.jpg';
import covid_news2 from '../../asset/featured/covid-news-2.jpg';

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
                    <div className='featured-tweet'>
                        <TwitterTweetEmbed
                            className='f-box'
                            options={{ theme: 'light' }}
                            tweetId='1248130891118825472'
                        />
                    </div>
                    <img className='f-box' src={covid_news1} alt='news1' />
                    <img className='f-box' src={covid_news2} alt='news2' />
                </div>
            </div>
        </div>
    );
};

export default Covid;
