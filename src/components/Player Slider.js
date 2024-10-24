import React, { useState, useRef, useEffect } from "react";
import '../css/Player Slider.css'; // Import your CSS
import Portret1 from "../assets/portret1.webp";
import Portret2 from "../assets/portret2.webp";
import Portret3 from "../assets/portret3.webp";
import Portret4 from "../assets/portret3.webp"; // Example images (adjust as needed)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Roster = () => {
    const players = [
        { imgSrc: Portret1, position: "Bek", name: "Šejla", surname: "Bujak" },
        { imgSrc: Portret2, position: "Bek", name: "Ester", surname: "Koffler" },
        { imgSrc: Portret3, position: "Bek", name: "Iman", surname: "Alimanović" },
        { imgSrc: Portret4, position: "Centar", name: "Zerina", surname: "Alispahić" },
        { imgSrc: Portret2, position: "Bek", name: "Nejla", surname: "Dević" },
        { imgSrc: Portret3, position: "Bek", name: "Sorraja", surname: "Salihagić" },
    ];

    // Group players into slides with 3 players per slide
    const groupedPlayers = [];
    for (let i = 0; i < players.length; i += 3) {
        groupedPlayers.push(players.slice(i, i + 3));
    }

    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    // Function to update the slide position
    const showSlide = (index) => {
        if (index >= groupedPlayers.length) {
            setCurrentIndex(0); // Loop back to the first slide
        } else if (index < 0) {
            setCurrentIndex(groupedPlayers.length - 1); // Go to the last slide
        } else {
            setCurrentIndex(index);
        }
        const slide = document.querySelectorAll(".player-slider");
        slide.forEach((slide, i) => {
            if (i === currentIndex) {
                slide.classList.remove("hidden"); // Show the active slide
            } else {
                slide.classList.add("hidden"); // Hide the other slides
            }
        });
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            const slideWidth = slider.offsetWidth;
            slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }
    }, [currentIndex]);

    return (
        <section id="Tim" className="section cc-roster">
            <div id="roster" className="container">
                <div className="heading-wrapper">
                    <h1 className="h1 cc-schedule-heading">Naš tim</h1>
                    <a href="/seniorke" className="button cc-tertiary w-button">Pročitaj više</a>
                </div>

                <div className="slider w-slider">
                    <div className="mask w-slider-mask" ref={sliderRef}>
                        {groupedPlayers.map((group, index) => (
                            <div key={index} className={`player-slider ${currentIndex === index ? '' : 'hidden'}`}>
                                {group.map((player, idx) => (
                                    <div key={idx} className="player-wrapper">
                                        <img src={player.imgSrc} alt={player.name} className="portret" />
                                        <div className="position-wrapper">
                                            <h3 className="h3 cc-pos-heading">{player.position}</h3>
                                            <div className="name">{player.name}</div>
                                        </div>
                                        <div className="surname">{player.surname}</div>
                                    </div>
                                ))}
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
