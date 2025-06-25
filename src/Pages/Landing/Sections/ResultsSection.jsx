import React, { useState } from 'react';
import './ResultsSection.css';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import chevron from "../../../Assets/icons/chevronupright.svg";
import cert1 from '../../../Assets/images/certificate.jpg'; // Placeholder for certificates

const ResultsSection = () => {
    const { t } = useTranslation();
    const reviews = t('landing.resultsSection.reviews', { returnObjects: true });

    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 3;

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % (reviews.length - visibleCards + 1));
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + (reviews.length - visibleCards + 1)) % (reviews.length - visibleCards + 1));
    };

    const getVisibleReviews = () => {
        const end = currentIndex + visibleCards;
        return reviews.slice(currentIndex, end);
    };

    return (
        <section className="results-section">
            <div className="wrapper">
                <h2 className="text-dark">
                    <Trans i18nKey="landing.resultsSection.title">
                        оқушыларымыздың <span className="text-gradient">нәтижелері</span>
                    </Trans>
                </h2>
                <div className="review-slider-container">
                    <div className="review-slider-track">
                        {getVisibleReviews().map((review, idx) => (
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
                                            <p className="review-score p-small">
                                                {t('landing.resultsSection.reviewCard.pointA', { pointA: review.pointA })}
                                            </p>
                                            <p className="review-score-bold">
                                                {t('landing.resultsSection.reviewCard.pointB', { pointB: review.pointB })}
                                            </p>
                                        </div>
                                        <Link to={review.link} className="review-link">
                                            {t('landing.resultsSection.reviewCard.fullView')}
                                            <img src={chevron} alt=">" className="link-icon"/>
                                        </Link>
                                    </div>
                                    <p className="review-text p-small">{review.text}</p>
                                </div>
                                <div className="review-image">
                                    <img src={cert1} alt="Certificate"/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResultsSection;