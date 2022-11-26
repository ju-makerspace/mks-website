import '../styles/desktop/Navbar.css';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { HiMenu, HiMenuAlt3 } from 'react-icons/hi';
import { useState } from 'react';
import { IconContext } from 'react-icons/lib';

const Navbar = () => {
    const [color, setColor] = useState('black');
    const [popdown, setPopdown] = useState(false);
    const toggle = () => {
        popdown ? setPopdown(false) : setPopdown(true);
        color === 'black' ? setColor('red') : setColor('black');
    };
    return (
        <navbar>
            <div className='nav-icons'>
                <img src={process.env.PUBLIC_URL + '/images/mks.png'} />
                <IconContext.Provider
                    className={`menu  ${popdown ? 'menuIconDown' : ''}`}
                    value={{ size: '3rem' }}
                >
                    {popdown ? (
                        <HiMenu className='menu' onClick={toggle} />
                    ) : (
                        <HiMenuAlt3 className='menu' onClick={toggle} />
                    )}
                </IconContext.Provider>
            </div>
            <div className={`nav-links ${popdown ? 'menuDown' : ''}`}>
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
