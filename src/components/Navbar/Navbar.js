import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

const navbar = ( props ) => {
    return (
        <nav className={classes.Navbar}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
            </ul>
        </nav>
    );
}

export default navbar;