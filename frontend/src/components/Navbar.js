import '../styles/desktop/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <navbar>
            <img src={process.env.PUBLIC_URL + '/images/mks.png'} />
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/mentors'>Mentors</Link>
                </li>
                <li>
                    <Link to='/featured'>Featured</Link>
                </li>
            </ul>
        </navbar>
    );
};

export default Navbar;
