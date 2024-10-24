import leftLines from '../assets/Left_lines.svg';
import rightLines from '../assets/Right_lines.svg';
import'../css/InProgress.css';
import logo from '../assets/MediumLogo.png';
import React from "react";
const InProgress = () => {
    return(
        <section className="about-section">
            <div className="heading">
                <img src={leftLines} className="Line-left" alt="left-line"/>
                <img src={rightLines} className="Line-right" alt="right-line"/>
            </div>
            <div className="container">
                <h1>🚧 Stranica u izradi 🚧</h1>
                <p>Radimo na nečemu sjajnom. Ostanite s nama!</p>
                <a href="/" className="button cc-tertiary w-button">Povratak na početnu stranicu</a>
                <img src={logo} alt="Logo" className="logo"/>
            </div>
        </section>
    );
};

export default InProgress;