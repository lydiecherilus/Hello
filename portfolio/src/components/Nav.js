import React from 'react';
import { NavLink } from 'react-router-dom';

import '../App.css';

function Nav() {
    return (
        <header>
            <div>
                <nav>
                    <NavLink activeClassName='active-navlink' className='navlink' to='/' exact>Home</NavLink>
                    <NavLink activeClassName='active-navlink' className='navlink' to='/projects'>Projects</NavLink>
                    <NavLink activeClassName='active-navlink' className='navlink' to='/education'>Education</NavLink>
                    <NavLink activeClassName='active-navlink' className='navlink' to='/contact'>Contact</NavLink>
              </nav>
            </div>
        </header>
    );
};

export default Nav;
