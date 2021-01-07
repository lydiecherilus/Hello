import React from 'react';
import { NavLink } from 'react-router-dom';

import '../App.css';

function Nav() {
    return (
        <nav className='navlink'>
            <NavLink activeClassName='active-navlink' className='navlink-items' to='/' exact>Home</NavLink>
            <NavLink activeClassName='active-navlink' className='navlink-items' to='/projects'>Projects</NavLink>
            <NavLink activeClassName='active-navlink' className='navlink-items' to='/education'>Education</NavLink>
            <NavLink activeClassName='active-navlink' className='navlink-items' to='/contact'>Contact</NavLink>
        </nav>
    );
};

export default Nav;
