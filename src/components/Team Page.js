import React from 'react';
import '../css/History.css';
import '../css/Team Page.css';
import leftLines from '../assets/Left_lines.svg';
import rightLines from '../assets/Right_lines.svg';
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

function PlayersSection() {
    // Staticki podaci o igračima
    const players = [
        { _id: 1, imgSrc: Portret1, position: "Bek", name: "Šejla", surname: "Bujak" },
        { _id: 2, imgSrc: Portret2, position: "Bek", name: "Ester", surname: "Koffler" },
        { _id: 3, imgSrc: Portret3, position: "Bek", name: "Iman", surname: "Alimanović" },
        { _id: 4, imgSrc: Portret4, position: "Centar", name: "Zerina", surname: "Alispahić" },
        { _id: 5, imgSrc: Portret5, position: "Bek", name: "Nejla", surname: "Dević" },
        { _id: 6, imgSrc: Portret6, position: "Bek", name: "Sorraja", surname: "Salihagić" },
        { _id: 7, imgSrc: Portret7, position: "Centar", name: "Edna", surname: "Lisica" },
        { _id: 8, imgSrc: Portret8, position: "Bek", name: "Ena", surname: "Zagorac" },
        { _id: 9, imgSrc: Portret9, position: "Bek", name: "Neira", surname: "Alispahić" },
        { _id: 10, imgSrc: Portret10, position: "Centar", name: "Arnela", surname: "Torlak" },
        { _id: 11, imgSrc: Portret11, position: "Bek", name: "Iman", surname: "Turković" },
        { _id: 12, imgSrc: Portret12, position: "Bek", name: "Dija", surname: "Prezime" },
        { _id: 13, imgSrc: Portret13, position: "Centar", name: "Zara", surname: "Hrapović" },
        { _id: 14, imgSrc: Portret14, position: "Bek", name: "Lejla", surname: "Hodžić" },
        { _id: 15, imgSrc: Portret15, position: "Bek", name: "Hanadi", surname: "Prezime" },
        { _id: 16, imgSrc: Portret16, position: "Centar", name: "Berina", surname: "Prezime" }
    ];

    return (
        <section className="news_section">
            <div className="heading">
                <img src={leftLines} className="Line-left" alt="left-line" />
                <h2>Prvi tim</h2>
                <img src={rightLines} className="Line-right" alt="right-line" />
            </div>

            <div className="row player_row">
                {players.map((player) => (
                    <div className="single_player playerInfo" key={player._id}>
                        <img src={player.imgSrc} className="portret Page" alt={player.name} />
                        <div className="position-wrapper player-wrap-w">
                            <h3 className="h3 cc-pos-heading player_box">{player.position}</h3>
                            <div className="name">{`${player.name} ${player.surname}`}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PlayersSection;
