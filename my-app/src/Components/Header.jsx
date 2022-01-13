import React from 'react'
import './Header.css';

function Header() {
  
    return (
        <header id="header">
            <div className="container-fluid">
                <div className="logo">
                    <h1><a href="">Siimple</a></h1>
                </div>
                <button type="button" className="nav-toggle "><i className="bx bx-menu"></i></button>
                <nav className="nav-menu">
                    <ul>
                        <li className="active"><a href="#header" className="scrollto">Home</a></li>
                        <li><a href="#about" className="scrollto">About Us</a></li>
                        <li><a href="#why-us" className="scrollto">Why Us</a></li>
                        <li className="drop-down"><a href="">Drop Down</a>
                            <ul>
                                <li><a href="#">Drop Down 1</a></li>
                                <li className="drop-down"><a href="#">Drop Down 2</a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Drop Down 3</a></li>
                                <li><a href="#">Drop Down 4</a></li>
                                <li><a href="#">Drop Down 5</a></li>
                            </ul>
                        </li>
                        <li><a href="#contact" className="scrollto">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
