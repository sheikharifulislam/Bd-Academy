import React from 'react';
import './header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
       <header>
           <div className="header-section">
                <div className="header-container">
                    <div className="academy-logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="menu">
                        <ul>
                            <li>
                                <a href="/home">Home</a>
                            </li>
                            <li>
                                <a href="/courses">Courses</a>
                            </li>                  
                            <li>
                                <a href="/about">About</a>
                            </li>
                            <li>
                                <a href="/about">About</a>
                            </li>
                        </ul>
                    </div>
                </div>                
            </div>
       </header>
    );
};

export default Header;