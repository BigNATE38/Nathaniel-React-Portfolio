import React from 'react';

// takes in the handlePageChange functionality in order to allow the links to work 
function Nav ({ handlePageChange }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navColor">
            <div id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <span className="nav-link theCursor" onClick={() => handlePageChange('About Me')}>
                            About Me
                        </span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link theCursor" onClick={() => handlePageChange('Portfolio')}>
                            Portfolio
                        </span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link theCursor" onClick={() => handlePageChange('Resume')}>
                            Resume
                        </span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link theCursor" onClick={() => handlePageChange('Contact')}>
                            Contact
                        </span>
                    </li>
                </ul>
            </div>
        </nav> 
    );
}

export default Nav;