import React, { useState } from 'react';
import './ResultsSection.css';
import reviews from './ReviewData';
import { Link } from 'react-router-dom';
import chevron from "../../../Assets/icons/chevronupright.svg";

const ResultsSection = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const visibleCards = 3;

    const next = () => {
        setCurrentIndex((prev) =>
            prev + visibleCards >= reviews.length ? 0 : prev + 1
        );
    };

    const prev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? reviews.length - visibleCards : prev - 1
        );
    };

    return (
        <section className="results-section">
            <div className="wrapper">
                <h2 className="text-dark">оқушыларымыздың <span className="text-gradient">нәтижелері</span></h2>
                <div className="review-slider-container">
                    <button className="slider-button left" onClick={prev}>
                        ←
                    </button>
                    <div className="review-slider-track">
                        {reviews
                            .slice(currentIndex, currentIndex + visibleCards)
                            .map((review, idx) => (
                                <div className="review-card" key={idx}>
                                    <div className="review-card-content">
                                        <div className="review-header">
                                            <img
                                                src={review.avatar}
                                                alt={review.name}
                                                className="review-avatar"
                                            />
                                            <div className="review-user-info">
                                                <p className="review-name">{review.name}</p>
                                                <p className="review-score p-small">Точка A: {review.pointA} балл</p>
                                                <p className="review-score-bold">
                                                    Точка B: {review.pointB} балл
                                                </p>
                                            </div>
                                            <Link to={review.link} className="review-link">
                                                Толық көру
                                                <img src={chevron} alt=">" className="link-icon"/>
                                            </Link>
                                        </div>
                                        <p className="review-text p-small">{review.text}</p>
                                    </div>
                                    <div className="review-image">
                                        <img src={review.certificate} alt="Certificate"/>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <button className="slider-button right" onClick={next}>
                        →
                    </button>
                </div>
            </div>

        </section>

    );

};

export default ResultsSection;