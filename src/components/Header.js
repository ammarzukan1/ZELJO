<<<<<<< HEAD
import React, { useState } from 'react';
import '../css/Header.css'; // Import the CSS file
import logo from '../assets/SmallLogo.png';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    // State to track which dropdown is open
    const [dropdownOpen, setDropdownOpen] = useState(null);

    // Function to handle the click event for toggling dropdowns
    const toggleDropdown = (dropdown) => {
        setDropdownOpen(dropdownOpen === dropdown ? null : dropdown); // Toggle the dropdown
    };

=======
import '../css/Header.css'; // Import the CSS file
import logo from '../assets/Logo.svg';

const Navbar = () => {
>>>>>>> 5626796 (new commit)
    return (
        <section className="main-page">
            <div className="navbar w-nav">
                <div className="container-navigation">
                    <div className="navigation-left">
<<<<<<< HEAD
                        <a href="/" className="brand w-nav-brand w--current">
=======
                        <a href="/index.html" className="brand w-nav-brand w--current">
>>>>>>> 5626796 (new commit)
                            <img
                                width="49"
                                loading="lazy"
                                alt="logo"
                                src={logo}
                                className="logo-2"
                            />
                        </a>
                    </div>
                    <div className="navigation-middle">
                        <nav role="navigation" className="nav-menu w-nav-menu">
                            <a href="/" className="nav-link w-nav-link">Početna</a>
                            <a href="/novosti" className="nav-link w-nav-link">Novosti</a>
<<<<<<< HEAD

                            {/* Prvi tim dropdown */}
                            <div
                                className={`nav-link w-nav-link ${dropdownOpen === 'prvi-tim' ? 'active' : ''}`}
                                onClick={() => toggleDropdown('prvi-tim')}
                                onMouseEnter={() => setDropdownOpen('prvi-tim')}
                                onMouseLeave={() => setDropdownOpen(null)}
                            >
                                Prvi tim <FontAwesomeIcon icon={faCaretDown}/>
                                <ul className={`dropdown-menu ${dropdownOpen === 'prvi-tim' ? 'show' : ''}`}>
                                    <li><a href="/seniorke" className="dropdown-item">Seniorke</a></li>
                                    <li><a href="/seniori" className="dropdown-item">Seniori</a></li>
                                    <li><a href="/strucnistab" className="dropdown-item">Stručni štab</a></li>
                                </ul>
                            </div>

                            {/* Raspored dropdown */}
                            <div
                                className={`nav-link w-nav-link ${dropdownOpen === 'raspored' ? 'active' : ''}`}
                                onClick={() => toggleDropdown('raspored')}
                                onMouseEnter={() => setDropdownOpen('raspored')}
                                onMouseLeave={() => setDropdownOpen(null)}
                            >
                                Raspored <FontAwesomeIcon icon={faCaretDown}/>
                                <ul className={`dropdown-menu ${dropdownOpen === 'raspored' ? 'show' : ''}`}>
                                    <li><a href="/seniorke-raspored" className="dropdown-item">Seniorke A1</a></li>
                                    <li><a href="/seniori-raspored" className="dropdown-item">Seniori A1</a></li>
                                </ul>
                            </div>

=======
                            <a href="/tim" className="nav-link w-nav-link">Tim</a>
                            <a href="/raspored" className="nav-link w-nav-link">Raspored</a>
>>>>>>> 5626796 (new commit)
                            <a href="/historija" className="nav-link w-nav-link">Klub</a>
                            <a href="/" className="nav-link w-nav-link">Članske kartice</a>
                        </nav>
                    </div>
                    <div className="navigation-right">
                        <div className="navigation-button-wrap">
<<<<<<< HEAD
                            <a href="/kontakt" className="nav-link w-nav-link">Kontakt</a>
=======
                            <a href="/index.html" className="nav-link w-nav-link">Kontakt</a>
>>>>>>> 5626796 (new commit)
                        </div>
                        <div className="menu-button w-nav-button">
                            <div className="w-icon-nav-menu"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
