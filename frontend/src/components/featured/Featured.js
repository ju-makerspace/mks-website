import '../../styles/desktop/featured/Featured.css';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';

const Featured = () => {
    return (
        <div>
            <div className='featured'>
                <h1 className='featured_heading featured-item'>
                    Covid-19 Face sheild
                </h1>
                <p className='featured_desc featured-item'>
                    Hon'ble Chief Minister of Rajasthan compliments JU
                    Makerspace
                </p>
                <div className='featured-item'>
                    <TwitterTweetEmbed tweetId='1248130891118825472' />
                </div>
            </div>
        </div>
    );
};

export default Featured;
