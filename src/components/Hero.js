import logo from '../assets/Logo.svg'; // Import your logo image
import '../css/Hero.css'; // Import CSS
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="main-page">
            <div className="navbarHero w-nav">
                <div className="container-navigation">
                    <div className="navigation-left">
                        <a href="/index.html" className="brand w-nav-brand w--current">
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
                            <a href="/tim" className="nav-link w-nav-link">Tim</a>
                            <a href="/raspored" className="nav-link w-nav-link">Raspored</a>
                            <a href="/historija" className="nav-link w-nav-link">Klub</a>
                            <a href="/" className="nav-link w-nav-link">Članske kartice</a>
                        </nav>
                    </div>
                    <div className="navigation-right">
                        <div className="navigation-button-wrap">
                            <a href="/index.html" className="nav-link w-nav-link">Kontakt</a>
                        </div>
                        <div className="menu-button w-nav-button">
                            <div className="w-icon-nav-menu"></div>
                        </div>
                    </div>
                </div>
            </div>

    <div id="Home" className="main">
        <div className="columns w-row">
            <div className="text-column w-col w-col-7">
                <h1 className="main-heading">KK Željezničar</h1>
                <p className="main-subtitle">103 godine uspješnog rada. To je moj tim!</p>
            </div>
            <div className="image-column w-col w-col-5">
                <img width="362" src={logo} alt="Logo" className="main-image"/>
            </div>
        </div>
    </div>
        <div className="triangles">
            <div id="triangles1" className="triangle triangle2"></div>
            <div id="triangles2" className="triangle"></div>
        </div>

        </section>
    );
};

export default Hero;
