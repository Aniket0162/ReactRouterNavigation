import React from 'react';
import {Link} from 'react-router';

function Navbar(props) {
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='careers'>Careers</Link>
                <Link to='/services'>Services</Link>
                <Link to='/contactus'>Contact</Link>
            </nav>
        </div>
    );
}

export default Navbar;