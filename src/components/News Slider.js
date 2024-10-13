import React, { useState, useEffect } from "react";
import klupa from '../assets/Zeljo klupa.jpg';
import '../css/News Slider.css';

const NewsSlider = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    const [slides, setSlides] = useState([
        {
            image: klupa,
            title: "Povratak seniorske selekcije KK Željezničar nakon pet godina",
            date: "24.09.2024.",
        },
        {
            image: klupa,
            title: "Povratak seniorske selekcije KK Željezničar nakon pet godina",
            date: "24.09.2024.",
        },
        {
            image: klupa,
            title: "Povratak seniorske selekcije KK Željezničar",
            date: "24.09.2024.",
        },
    ]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            plusSlides(1);
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

    const plusSlides = (n) => {
        setSlideIndex((prevIndex) => {
            const newIndex = prevIndex + n;
            if (newIndex > slides.length) return 1;
            if (newIndex < 1) return slides.length;
            return newIndex;
        });
    };

    const currentSlide = (n) => {
        setSlideIndex(n);
    };

    return (
        <section className="section">
            <div className="slideshow-container">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`mySlides fade ${slideIndex === index + 1 ? "active" : ""}`}
                    >
                        <div className="sliderWrapper">
                            <div className="NewsPhoto">
                                <img src={slide.image} className="NewsPhoto-image" />
                                <div className="overlay"></div>
                            </div>
                            <div className="text">
                                <h3>{slide.title}</h3>
                                <p className="date">{slide.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div style={{ textAlign: "center" }}>
                    {slides.map((slide, index) => (
                        <span
                            key={index}
                            className={`dot ${slideIndex === index + 1 ? "active" : ""}`}
                            onClick={() => currentSlide(index + 1)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsSlider;