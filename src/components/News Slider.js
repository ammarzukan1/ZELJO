import React, { useState, useEffect } from "react";
import klupa from '../assets/Zeljo klupa.jpg';
<<<<<<< HEAD
import utakmica from '../assets/utakmica.jpg';
=======
>>>>>>> 5626796 (new commit)
import '../css/News Slider.css';

const NewsSlider = () => {
    const [slideIndex, setSlideIndex] = useState(1);
<<<<<<< HEAD
    const [slides] = useState([
=======
    const [slides, setSlides] = useState([
>>>>>>> 5626796 (new commit)
        {
            image: klupa,
            title: "Povratak seniorske selekcije KK Željezničar nakon pet godina",
            date: "24.09.2024.",
        },
        {
<<<<<<< HEAD
            image: utakmica,
=======
            image: klupa,
>>>>>>> 5626796 (new commit)
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

<<<<<<< HEAD
    const handleTouchStart = (event) => {
        const startPosition = event.touches[0].clientX;
        const handleTouchEnd = (event) => {
            const endPosition = event.changedTouches[0].clientX;
            const swipeDistance = endPosition - startPosition;
            if (swipeDistance > 50) {
                plusSlides(-1);
            } else if (swipeDistance < -50) {
                plusSlides(1);
            }
        };
        document.addEventListener('touchend', handleTouchEnd);
    };

    return (
        <section className="section">
            <div className="slideshow-container" onTouchStart={handleTouchStart}>
                <div className="slider-wrapper" style={{ transform: `translateX(-${(slideIndex - 1) * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`mySlides ${slideIndex === index + 1 ? "active" : ""}`}
                        >
                            <div className="sliderWrapper">
                                <div className="NewsPhoto">
                                    <img src={slide.image} className="NewsPhoto-image" alt="News" />
                                    <div className="overlay"></div>
                                </div>
                                <div className="text">
                                    <h3 className="Naslov">{slide.title}</h3>
                                    <p className="date">{slide.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

=======
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
>>>>>>> 5626796 (new commit)
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

<<<<<<< HEAD
export default NewsSlider;
=======
export default NewsSlider;
>>>>>>> 5626796 (new commit)
