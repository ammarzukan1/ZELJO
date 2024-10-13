import '../css/About Us.css';
import doubleLines from '../assets/DoubleLines.svg';
<<<<<<< HEAD
import history from '../assets/historja.jpeg';

const AboutUs = () => {
    return (
        <section id="o-nama" className="section about">
=======

const AboutUs = () => {
    return (
        <section id="o-nama" className="about-section">
>>>>>>> 5626796 (new commit)
            <div className="about-wrapper">
                <div className="about-column">
                    <div className="about-square">
                        <div id="left-side-about-square" className="left-line">
                            <img src={doubleLines} loading="lazy" alt="Double lines graphic" />
                        </div>
                        <h1 className="heading-games heading-champs">Šampioni Bosne i Hercegovine</h1>
                        <p className="years2">1995, 1998, 1999, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011</p>
                    </div>
                </div>
<<<<<<< HEAD
                    <div className="about-square image">
                        <a href="/historija" className="Trophy"><img src={history} loading="lazy" alt="Trophy" className="Trophy" /></a>
                    </div>
=======
                <div className="about-column">
                    <div className="about-square">
                        <img src="../assets/" loading="lazy" alt="Trophy" />
                    </div>
                </div>
>>>>>>> 5626796 (new commit)
                <div className="about-column">
                    <div className="about-square">
                        <div id="right-side-about-square" className="right-line">
                            <img src={doubleLines} loading="lazy" alt="Double lines graphic" />
                        </div>
                        <h1 className="heading-games heading-champs">Osvajači Kupa Bosne i Hercegovine</h1>
                        <p className="years">1998, 1999, 2003, 2004, 2005, 2006, 2007</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
