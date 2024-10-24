import '../css/News Page.css';
import leftLines from '../assets/Left_lines.svg';
import rightLines from '../assets/Right_lines.svg';
import klupa from '../assets/Zeljo klupa.jpg';
import slika from '../assets/utakmica.jpg';
import React from 'react';

const NewsSection = () => {
    const newsItems = [
        {
            imgSrc: slika,
            title: "Povratak seniorske selekcije KK Željezničar",
            date: "26.10.2024.",
        },
        {
            imgSrc: klupa,
            title: "Povratak seniorske selekcije KK Željezničar",
            date: "26.10.2024.",
        },
        {
            imgSrc: slika,
            title: "Povratak seniorske selekcije KK Željezničar",
            date: "26.10.2024.",
        },
        {
            imgSrc: slika,
            title: "Povratak seniorske selekcije KK Željezničar",
            date: "26.10.2024.",
        },
        {
            imgSrc: klupa,
            title: "Povratak seniorske selekcije KK Željezničar",
            date: "26.10.2024.",
        },
        {
            imgSrc: slika,
            title: "Povratak seniorske selekcije KK Željezničar",
            date: "26.10.2024.",
        }
    ];

    const createRows = (items) => {
        const rows = [];
        const itemsPerRow = 4;

        for (let i = 0; i < items.length; i += itemsPerRow) {
            const rowItems = items.slice(i, i + itemsPerRow);
            rows.push(
                <div className="row" key={i}>
                    {rowItems.map((item) => (
                        <article className="single_news" key={`${item.title}-${item.date}`}>
                            <img src={item.imgSrc} className="NewsPhoto-image" alt={item.title} loading="lazy" />
                            <p className="Novost">Novosti</p>
                            <h4>{item.title}</h4>
                            <p className="date">{item.date}</p>
                        </article>
                    ))}
                </div>
            );
        }

        return rows;
    };

    return (
        <section className="news_section">
            <div className="heading">
                <img src={leftLines} className="Line-left" alt="Line left" />
                <h2>Novosti</h2>
                <img src={rightLines} className="Line-right" alt="Line right" />
            </div>
            {createRows(newsItems)}
        </section>
    );
};

export default NewsSection;
