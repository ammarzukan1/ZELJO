import React, { useState, useRef, useEffect } from "react";
import '../css/Player Slider.css'; // Import your CSS
import Portret1 from "../assets/portret1.webp";
import Portret2 from "../assets/portret2.webp";
import Portret3 from "../assets/portret3.webp";
import Portret4 from "../assets/portret3.webp";
import Portret5 from "../assets/portret3.webp";
import Portret6 from "../assets/portret3.webp";
import Portret7 from "../assets/portret3.webp";
import Portret8 from "../assets/portret3.webp";
import Portret9 from "../assets/portret3.webp";
import Portret10 from "../assets/portret3.webp";
import Portret11 from "../assets/portret3.webp";
import Portret12 from "../assets/portret3.webp";
import Portret13 from "../assets/portret3.webp";
import Portret14 from "../assets/portret3.webp";
import Portret15 from "../assets/portret3.webp";
import Portret16 from "../assets/portret3.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Roster = () => {
    const players = [
        { imgSrc: Portret1, position: "Bek", name: "Šejla", surname: "Bujak" },
        { imgSrc: Portret2, position: "Bek", name: "Ester", surname: "Koffler" },
        { imgSrc: Portret3, position: "Bek", name: "Iman", surname: "Alimanović" },
        { imgSrc: Portret4, position: "Centar", name: "Zerina", surname: "Alispahić" },
        { imgSrc: Portret5, position: "Bek", name: "Nejla", surname: "Dević" },
        { imgSrc: Portret6, position: "Bek", name: "Sorraja", surname: "Salihagić" },
        { imgSrc: Portret7, position: "Centar", name: "Edna", surname: "Lisica" },
        { imgSrc: Portret8, position: "Bek", name: "Ena", surname: "Zagorac" },
        { imgSrc: Portret9, position: "Bek", name: "Neira", surname: "Alispahić" },
        { imgSrc: Portret10, position: "Centar", name: "Arnela", surname: "Torlak" },
        { imgSrc: Portret11, position: "Bek", name: "Iman", surname: "Turković" },
        { imgSrc: Portret12, position: "Bek", name: "Dija", surname: "Prezime" },
        { imgSrc: Portret13, position: "Centar", name: "Zara", surname: "Hrapović" },
        { imgSrc: Portret14, position: "Bek", name: "Lejla", surname: "Hodžić" },
        { imgSrc: Portret15, position: "Bek", name: "Hanadi", surname: "Prezime" },
        { imgSrc: Portret16, position: "Centar", name: "Berina", surname: "Prezime" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const showSlide = (index) => {
        if (index >= players.length - 3) {
            setCurrentIndex(0); // Loop back to the first player
        } else if (index < 0) {
            setCurrentIndex(currentIndex - 1); // Go to the last player
        } else {
            setCurrentIndex(index);
        }
    };

    // Autoplay effect
    useEffect(() => {
        const interval = setInterval(() => {
            showSlide(currentIndex + 1); // Move to the next player every 3 seconds
        }, 2000); // Change player every 2 seconds
        return () => clearInterval(interval); // Clear the interval on component unmount
    }, [currentIndex]);

    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            // Get the width of a single player slide
            const playerWidth = slider.firstChild.offsetWidth;
            slider.style.transition = 'transform 0.5s ease-in-out 0.5s';
            // Adjust the slide position based on the current player index and its width
            slider.style.transform = `translateX(-${currentIndex * playerWidth}px)`;
        }
    }, [currentIndex, players.length]);

    return (
        <section id="Tim" className="section cc-roster">
            <div id="roster" className="container">
                <div className="heading-wrapper">
                    <h1 className="h1 cc-schedule-heading">Naš tim</h1>
                    <a href="/seniorke" className="button cc-tertiary w-button">Pročitaj više</a>
                </div>

                <div className="slider w-slider">
                    <div className="mask w-slider-mask" ref={sliderRef} style={{ display: 'flex', transition: 'transform 0.5s ease-in-out' }}>
                        {players.map((player, index) => (
                            <div key={index} className="player-slider" style={{ minWidth: `${100 / players.length}%` }}>
                                <div className="player-wrapper">
                                    <img src={player.imgSrc} alt={player.name} className="portret" />
                                    <div className="position-wrapper">
                                        <h3 className="h3 cc-pos-heading">{player.position}</h3>
                                        <div className="name">{`${player.name} ${player.surname}`}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="left-arrow w-slider-arrow-left" onClick={() => showSlide(currentIndex - 1)}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </div>
                    <div className="right-arrow w-slider-arrow-right" onClick={() => showSlide(currentIndex + 1)}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roster;
