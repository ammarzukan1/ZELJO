import React from 'react';
import '../css/History.css';
import '../css/Team Page.css';
import leftLines from '../assets/Left_lines.svg';
import rightLines from '../assets/Right_lines.svg';
import Portret1 from "../assets/Man.jpeg";


function PlayersSection() {
    const players = [
        { _id: 1, imgSrc: Portret1, position: "Uprava", name: "Nuko", surname: "Grebović" },
        { _id: 2, imgSrc: Portret1, position: "Uprava", name: "Tarik", surname: "Kečo" },
        { _id: 3, imgSrc: Portret1, position: "Uprava", name: "Farik", surname: "Kečo" },
        { _id: 4, imgSrc: Portret1, position: "Uprava", name: "Mirza", surname: "" },
        { _id: 5, imgSrc: Portret1, position: "Trener", name: "Bagoje", surname: "Šojić" },
    ];

    return (
        <section className="news_section">
            <div className="heading">
                <img src={leftLines} className="Line-left" alt="left-line" />
                <h2>Stručni štab</h2>
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
