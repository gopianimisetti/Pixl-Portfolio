import React from 'react';
import { Link } from 'react-router-dom';
import pixl from '../assets/pixl.png';

const Navbar = () => {

    return (
        <nav className={`navbar sticky-top navbar-expand-lg bg-light`}>
            <div className="container">
                <Link className="navbar-brand" to={'/'}>
                    <img src={pixl} alt="Logo" width="100" />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
