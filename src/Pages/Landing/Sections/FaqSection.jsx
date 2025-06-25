import React, { useState } from 'react';
import './FaqSection.css';
import chevronIcon from '../../../Assets/icons/chevrondown.svg';
import ContactForm from './Components/ContactForm.jsx';
import { useTranslation } from 'react-i18next';

const FaqSection = () => {
    const { t } = useTranslation();
    const faqData = t('landing.faqSection.faq', { returnObjects: true });
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleIndex = (index) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };

    return (
        <section className="faq-section">
            <div className="wrapper container">
                <h2 className="faq-title text-dark">{t('landing.faqSection.title')}</h2>
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'open' : ''}`}
                            onClick={() => toggleIndex(index)}
                        >
                            <div className="faq-question">
                                <strong>{item.question}</strong>
                                <img
                                    src={chevronIcon}
                                    alt="▼"
                                    className={`faq-chevron ${activeIndex === index ? 'rotated' : ''}`}
                                />
                            </div>
                            <div className="faq-answer" style={{display: activeIndex === index ? '' : 'none'}}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="faq-contact">
                    <ContactForm/>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
