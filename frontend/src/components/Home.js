
import Carousel from './home/Carousel';
import Hero from './home/Hero';
import Domain from './home/Domain';
import Community from './home/Community';

const Home = () => {
    return (
        <div className='home'>
            <Hero />
            <Domain />
            <Carousel />
            <Community />
        </div>
    );
};

export default Home;
