import '../css/Footer.css'; // Import the CSS file
import logo from '../assets/Logo 1.svg';
import logo from '../assets/Logo.svg';

import logo from '../assets/Logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faPhone, faEnvelope, faLocationDot, faCircle } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <section id="Footer" className="footer">
            <div className="padding-large">
                <div className="footer_wrap">
                    <div id="footer_wrap1" className="footer_left-wrap">

                        <a href="/" className="logo-footer w-nav-brand">

                        <a href="/index.html" className="logo-footer w-nav-brand">

                        <a href="/index.html" className="logo-footer w-nav-brand">
                            <img
                                width="123"
                                loading="lazy"
                                src={logo}
                                className="footer_logo"
                                alt="logo"
                            />
                        </a>
                        <div className="footer_social-wrap">

                            <a href="https://www.facebook.com/profile.php?id=61562897978963&locale=hr_HR"
                               className="footer_social-wrap w-inline-block">
                                <FontAwesomeIcon icon={faFacebook}/>
                            <a href="/index.html" className="footer_social-wrap w-inline-block">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="/index.html" className="footer_social-wrap w-inline-block">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="/" className="footer_social-wrap w-inline-block">
                                <FontAwesomeIcon icon={faYoutube}/>
                            <a href="/index.html" className="footer_social-wrap w-inline-block">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="/index.html" className="footer_social-wrap w-inline-block">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="/index.html" className="footer_social-wrap w-inline-block">
                                <FontAwesomeIcon icon={faYoutube} />
                            <a href="/index.html" className="footer_social-wrap w-inline-block">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </div>
                    </div>

                    <div className="footer_link-wrap">
                        <div className="text-weight-medium">Kontakt</div>
                        <a href="/" className="navbar_link w-inline-block">

                        <a href="/index.html" className="navbar_link w-inline-block">
                        <a href="/index.html" className="navbar_link w-inline-block">
                            <FontAwesomeIcon icon={faPhone}/>
                            <div className="text-block">+387 62 848 579</div>
                        </a>

                        <a href="/" className="navbar_link w-inline-block">
                            <FontAwesomeIcon icon={faEnvelope}/>
                            <div className="text-block">zeljeznicar@gmail.com</div>
                        </a>

                        <a href="/" className="navbar_link w-inline-block">
                            <FontAwesomeIcon icon={faLocationDot}/>
                        <a href="/index.html" className="navbar_link w-inline-block">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <div className="text-block">zeljeznicar@gmail.com</div>
                        </a>

                        <a href="/index.html" className="navbar_link w-inline-block">
                            <FontAwesomeIcon icon={faLocationDot} />
                        <a href="/index.html" className="navbar_link w-inline-block">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <div className="text-block">zeljeznicar@gmail.com</div>
                        </a>

                        <a href="/index.html" className="navbar_link w-inline-block">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <div className="text-block">Adresa</div>
                        </a>
                    </div>


                    <div className="Right-footer-wrap">
                    <div className="text-weight-medium">Menu</div>
                    <div className="footer_div-wrap">
                        <div className="footer_link-wrap">
                            <a href="/" className="navbar_link w-inline-block">
                                <FontAwesomeIcon icon={faCircle} className="icon"/>
                                <div className="text-block">Početna</div>
                            </a>
                    <div className="footer_link-wrap">
                        <div className="text-weight-medium">Menu</div>
                        <a href="/index.html" className="navbar_link w-inline-block">
                            <FontAwesomeIcon icon={faCircle} />
                            <div className="text-block">Početna</div>
                        </a>

                        <a href="/index.html" className="navbar_link w-inline-block">
                            <FontAwesomeIcon icon={faCircle} />
                            <div className="text-block">Klub</div>
                        </a>

                        <a href="/index.html" className="navbar_link w-inline-block">
                            <FontAwesomeIcon icon={faCircle} />
                            <div className="text-block">Raspored</div>
                        </a>

                        <a href="/index.html" className="navbar_link w-inline-block">
                            <FontAwesomeIcon icon={faCircle} />
                            <div className="text-block">Tim</div>
                        </a>

                        <a href="/index.html" className="navbar_link w-inline-block">
                            <FontAwesomeIcon icon={faCircle} />
                            <div className="text-block">Članske kartice</div>
                        </a>
                    </div>
                </div>
                </div>

                    <div className="footer_link-wrap">
                        <div className="text-weight-medium">Menu</div>
                        <a href="/index.html" className="navbar_link w-inline-block">
                            <FontAwesomeIcon icon={faCircle} />
                            <div className="text-block">Početna</div>
                        </a>

                        <a href="/index.html" className="navbar_link w-inline-block">
                            <FontAwesomeIcon icon={faCircle} />
                            <div className="text-block">Klub</div>
                        </a>

                        <a href="/index.html" className="navbar_link w-inline-block">
                            <FontAwesomeIcon icon={faCircle} />
                            <div className="text-block">Raspored</div>
                        </a>

                        <a href="/index.html" className="navbar_link w-inline-block">
                            <FontAwesomeIcon icon={faCircle} />
                            <div className="text-block">Tim</div>
                        </a>

                        <a href="/index.html" className="navbar_link w-inline-block">
                            <FontAwesomeIcon icon={faCircle} />
                            <div className="text-block">Članske kartice</div>
                        </a>
                    </div>
                </div>

                <div className="text-color-secondary">©2024 KK Zeljeznicar. All rights reserved</div>
            </div>
        </section>
    );
};

export default Footer;

