import '../css/Header.css'; // Import the CSS file
import logo from '../assets/Logo.svg';

const Navbar = () => {
    return (
        <section className="main-page">
            <div className="navbar w-nav">
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
        </section>
    );
};

export default Navbar;
