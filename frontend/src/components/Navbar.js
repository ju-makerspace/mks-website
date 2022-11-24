import '../styles/desktop/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <navbar>
            <img src={process.env.PUBLIC_URL + '/images/mks.png'} />
            <div className='nav-links'>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/featured'>Featured</NavLink>
                    </li>
                    <li>
                        <NavLink to='/mentors'>Mentors</NavLink>
                    </li>
                    <li>
                        <NavLink to='/alumni'>Alumni</NavLink>
                    </li>
                </ul>
            </div>
        </navbar>
    );
};

export default Navbar;
