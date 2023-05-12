import React from 'react';
import { Link } from "react-router-dom"

const Header = () => {
    return ( 
        <div className='header'>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/toolbox">Toolbox</Link></li>
                <li><Link to="/interests">Interests</Link></li>
            </ul>
        </nav>

        </div>

     );
}
 
export default Header;