import '../../styles/desktop/featured/Featured.css';
import Covid from './Covid';
import SocialDistance from './SocialDistance';

const Featured = () => {
    return (
        <div>
            <section className='featured-sec'>
                <p className='featured-heading'>
                    Let's talk about places we got <span>Featured</span> ✨
                </p>
                <Covid />
                <SocialDistance />
            </section>
        </div>
    );
};

export default Featured;
