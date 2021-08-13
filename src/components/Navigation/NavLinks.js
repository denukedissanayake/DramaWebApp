import React from 'react';

import { NavLink } from 'react-router-dom';

import './NavLinks.css'

const NavLinks = props => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>Gallery</NavLink>
        </li>
        <li>
            <NavLink to="/actors">Actors</NavLink>
        </li>
        <li>
            <NavLink to="/u1/favItems">Favourites</NavLink>
        </li>
        <li>
            <NavLink to="/u1/myItems">My Items</NavLink>
        </li>
        <li>
            <NavLink to="/auth">Sign Up</NavLink>
        </li>
        <li>
            <NavLink to="/profile">Profile</NavLink>
        </li>
    </ul>
}

export default NavLinks;