import '../../styles/desktop/home/Community.css';
import { Link } from 'react-router-dom';

const Community = () => {
    return (
        <>
            <div className='community'>
                <div className='community-text'>
                    Become a part of an exclusive <span className='grad3'>Community</span>
                </div>
            </div>
            <Link to='/join-now'>
                <div className='join-community'>Join Now</div>
            </Link>
        </>
    );
};

export default Community;
