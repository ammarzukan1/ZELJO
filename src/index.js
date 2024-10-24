import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Hero from './components/Hero';
import Slider from "./components/Player Slider";
import AboutUs from "./components/About Us";
import Schedule from "./components/Schedule";
import NewsSlider from "./components/News Slider";
import History from './components/History';
import Header from "./components/Header";
import SchedulePage from  "./components/Schedule Page";
import NewsPage from "./components/News Page";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero />
                        <NewsSlider />
                        <Schedule />
                        <AboutUs />
                        <Slider />
                    </>
                } />

                {/* History Route */}
                <Route
                    path="/history"
                    element={
                        <>
                            <Header />
                            <History />
                        </>
                    }
                />

                {/* Schedule Route */}
                <Route
                    path="/raspored"
                    element={
                        <>
                            <Header />
                            <SchedulePage />
                        </>
                    }
                />

                {/* Schedule Route */}
                <Route
                    path="/novosti"
                    element={
                        <>
                            <Header />
                            <NewsPage />
                        </>
                    }
                />

            </Routes>

            <Footer />  {/* Footer appears on all pages */}
        </Router>
    </React.StrictMode>
);

reportWebVitals();
