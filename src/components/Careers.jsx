import React from 'react';
import { useLocation } from 'react-router';

function Careers(props) {

    const location = useLocation();
    console.log("Hash Data",location.hash);
    console.log("Path Name",location.pathname);
    console.log("Search Data",location.search);
    console.log("Stata at corur page:",location.state);
    return (
        <div>
            <h1>Welcome to Carears Page.</h1>
            <ul>
                Open Job Roles:
                <li>Web Devloper Intern</li>
                <li>Mern Stack Developer 1+ Year exp</li>
                <li>Full Stack Developer 3+ Year exp</li>
                <li>Mern Stack Developer 2+ Year exp</li>
                <li>DevOps fresher</li>
               
            </ul>
        </div>
    );
}

export default Careers;