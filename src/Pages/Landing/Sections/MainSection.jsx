import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from 'react-scroll';
import './MainSection.css';
import slide1 from '../../../Assets/images/homebackground.jpg';
import slide2 from '../../../Assets/images/homebackground2.jpg';

const MainSection = () => {
    const { t } = useTranslation();
    const slides = [
        {
            id: 1,
            image: slide1,
            alt: 'Slide 1',
            titleKey: 'landing.main_section.slide1.title',
            subtextKey: 'landing.main_section.slide1.subtext',
            linkTo: 'pricing'
        },
        {
            id: 2,
            image: slide2,
            alt: 'Slide 2',
            titleKey: 'landing.main_section.slide2.title',
            subtextKey: 'landing.main_section.slide2.subtext',
            linkTo: 'course-system'
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const timeoutRef = useRef(null);
    const [fadeClass, setFadeClass] = useState('');

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    const goToNextSlide = () => {
        setFadeClass('fade-in');
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setTimeout(() => {
            setFadeClass('');
        }, 800);
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(goToNextSlide, 5000);
        return () => {
            resetTimeout();
        };
    }, [currentSlide, fadeClass]);

    const handleManualSlideChange = () => {
        goToNextSlide();
        resetTimeout();
    };


    const current = slides[currentSlide];
    const title = t(current.titleKey);

    return (
        <section className="main-section">
            <div className="wrapper slider">
                <div
                    className="main-slider"
                    onClick={handleManualSlideChange}
                    role="button"
                    aria-label="Next slide"
                >
                    <img
                        src={current.image}
                        alt={current.alt}
                        className={`main-slide-image ${fadeClass}`}
                    />
                </div>
                <div className={`main-slide-content ${fadeClass}`} onClick={handleManualSlideChange}>
                    <h1 className="main-title">
                        {title.includes('Dostyq.ONLINE') ? (
                            <>
                                {title.split('Dostyq.ONLINE')[0]}
                                <span className="text-gradient">Dostyq.ONLINE</span>
                                {title.split('Dostyq.ONLINE')[1]}
                            </>
                        ) : (
                            title
                        )}
                    </h1>

                    <p className="main-subtext">
                        {t(current.subtextKey).split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}<br />
                            </React.Fragment>
                        ))}
                    </p>

                    <div className="main-button-wrapper">
                        <ScrollLink
                            to={current.linkTo}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="main-button"
                        >
                            {t('landing.main_section.start_button')}
                        </ScrollLink>
                    </div>
                </div>

                <div className="main-slider-dots">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`main-dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MainSection;
