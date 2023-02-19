import Projects from './home/Projects';
import Hero from './home/Hero';
import Domain from './home/Domain';
import Community from './home/Community';

const Home = () => {
    return (
        <div className='home'>
            <Hero />
            <Domain />
            <Projects />
            <Community />
        </div>
    );
};

export default Home;
