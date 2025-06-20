import React, { useState } from 'react';
import './FaqSection.css';
import chevronIcon from '../../../Assets/icons/chevrondown.svg';
import ContactForm from './ContactForm.jsx';

const faqData = [
    {
        question: "Курсқа қалай жазыламын?",
        answer: "Сайттағы «Курска тіркелу» батырмасын басып, қажетті пәндер мен тарифті таңдап тіркелесіз.",
    },
    {
        question: "Төлемді қалай жасаймын?",
        answer: "Kaspi.kz немесе басқа да қолжетімді төлем жүйелері арқылы төлем жасай аласыз.",
    },
    {
        question: "Курстар қалай өтеді?",
        answer: "Курстар 24/7 видеосабақтар, тесттер, үй жұмыстары және апта сайынғы тікелей эфир сабақтарынан тұрады.",
    },
    {
        question: "Мұғалімдермен байланыса аламын ба?",
        answer: "Иә, әр студентке куратор бекітіледі және арнайы чат арқылы мұғалімдермен байланысуға болады.",
    },
    {
        question: "Курс аяқталған соң не аламын?",
        answer: "Курс соңында сертификат беріледі және оқу сауаттылығы мен логика пәндерінен тегін видеосабақтар ұсынылады.",
    }
];

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleIndex = (index) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };

    return (
        <section className="faq-section">
            <div className="wrapper container">
                <h2 className="faq-title text-dark">СҰРАҚ-ЖАУАП</h2>
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'open' : ''}`}
                            onClick={() => toggleIndex(index)}
                        >
                            <div className="faq-question">
                                <h3>{item.question}</h3>
                                <img
                                    src={chevronIcon}
                                    alt="▼"
                                    className={`faq-chevron ${activeIndex === index ? 'rotated' : ''}`}
                                />
                            </div>
                            <div className="faq-answer" style={{maxHeight: activeIndex === index ? '200px' : '0'}}>
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
