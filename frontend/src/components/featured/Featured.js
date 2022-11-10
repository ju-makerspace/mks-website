import '../../styles/desktop/featured/Featured.css';
import Covid from './Covid';

const Featured = () => {
    return (
        <div>
            <section className='featured-sec'>
                <p className='featured-heading'>
                    Let's talk about places we got <span>Featured</span> ✨
                </p>
                <Covid />
                <Covid />
            </section>
        </div>
    );
};

export default Featured;
