import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './MainSection.css';
import slide1 from '../../../Assets/images/homebackground.jpg';
import slide2 from '../../../Assets/images/homebackground2.jpg';

const slides = [
    {
        id: 1,
        image: slide1,
        alt: 'Slide 1',
        title: 'ҰБТ-ға Dostyq.ONLINE-пен дайындал!',
        subtext: 'Барлық пәндер бойынша \n' +
            'ҰТО (Ұлттық Тестілеу Орталығы) бекіткен \n' +
            'тақырыптарды 0-ден бастап меңгер!',
        linkTo: 'pricing'
    },
    {
        id: 2,
        image: slide2,
        alt: 'Slide 2',
        title: 'Сенің жетістігің — біздің миссиямыз!',
        subtext: 'Курс жүйесі арқылы\nнәтиже мен мотивацияны бірге арттырамыз.',
        linkTo: 'course-system'
    }
];

const MainSection = () => {
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
            setFadeClass('');              // Убираем класс через 600мс (как в CSS)
        }, 800);
    };

    useEffect(() => {
        resetTimeout();

        return () => {
            resetTimeout();
        };
    }, [currentSlide],[fadeClass]);

    const handleManualSlideChange = () => {
        goToNextSlide();
        resetTimeout();
    };


    const current = slides[currentSlide];

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
                        {current.title.includes('Dostyq.ONLINE') ? (
                            <>
                                {current.title.split('Dostyq.ONLINE')[0]}
                                <span className="text-gradient">Dostyq.ONLINE</span>
                                {current.title.split('Dostyq.ONLINE')[1]}
                            </>
                        ) : (
                            current.title
                        )}
                    </h1>

                    <p className="main-subtext">
                        {current.subtext.split('\n').map((line, index) => (
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
                            ДАЙЫНДЫҚТЫ ҚАЗІРДЕН БАСТА!
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
