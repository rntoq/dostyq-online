// PricingSection.jsx
import React, { useState } from 'react';
import './PricingSection.css';
import chevron from '../../../Assets/icons/chevronupright.svg';
import CourseCard from './CourseCard';

const examOptions = ['ҰБТ(ЕНТ)', 'БИЛ(КТЛ)', 'НЗМ(НИШ)'];
const subjects = [
    'Қазақстан Тарихы',
    'Математика',
    'Физика',
    'География',
    'Дүние жүзі тарихы',
    'Биология',
    'Химия',
    'Информатика',
    'Ағылшын тілі',
];

const PricingSection = () => {
    const [selectedExam, setSelectedExam] = useState('ҰБТ(ЕНТ)');
    const [selectedSubjects, setSelectedSubjects] = useState([]);

    const handleSubjectClick = (subject) => {
        if (selectedSubjects.includes(subject)) {
            // если предмет уже выбран — убираем его из списка
            setSelectedSubjects(prev => prev.filter(s => s !== subject));
        } else if (selectedSubjects.length < 3) {
            // если предмет ещё не выбран и их меньше 3 — добавляем
            setSelectedSubjects(prev => [...prev, subject]);
        }
    };


    const getDiscount = () => {
        if (selectedSubjects.length === 1) return '-20%';
        if (selectedSubjects.length === 2) return '-35%';
        return '';
    };
    return (
        <section className="pricing-section">
            <div className="wrapper">
                <div className="pricing-header-with-info">
                    <h2 className="pricing-title text-dark">
                        ӨЗІҢЕ ҚАЖЕТТІ <span className="text-gradient">КУРСТЫ ТАҢДА</span>
                    </h2>

                    {selectedSubjects.length > 0 && selectedSubjects.length < 3 && (
                        <div
                            className={`subject-info-box ${
                                selectedSubjects.length === 1
                                    ? 'discount-20'
                                    : selectedSubjects.length === 2
                                        ? 'discount-35'
                                        : ''
                            }`}
                        >
                            <img src="/path/to/icon.svg" className="emoji-icon top-left" alt="icon"/>
                            <img src="/path/to/icon.svg" className="emoji-icon bottom-right" alt="icon"/>
                            <p>{selectedSubjects.length + 1}-ші<br/> пәнге</p>
                            <strong> {getDiscount()} жеңілдік</strong>
                        </div>
                    )}
                </div>


                <div className="pricing-tabs">
                    {examOptions.map((type, index) => (
                        <button
                            key={index}
                            className={`pricing-tab ${selectedExam === type ? 'active' : ''}`}
                            onClick={() => setSelectedExam(type)}
                        >
                        {type}
                        </button>
                    ))}
                </div>

                <div className="pricing-subjects-wrapper">
                    <div className="pricing-subjects">
                        {subjects.map((subject, index) => {
                            const isSelected = selectedSubjects.includes(subject);
                            const showDiscount = !isSelected && selectedSubjects.length > 0;

                            return (
                                <div
                                    key={index}
                                    className={`pricing-subject-card ${isSelected ? 'selected' : ''}`}
                                    onClick={() => handleSubjectClick(subject)}
                                >
                                    {!isSelected && selectedSubjects.length > 0 && selectedSubjects.length < 3 && (
                                        <span className={`discount-label ${
                                            selectedSubjects.length === 1
                                                ? 'discount-20'
                                                : selectedSubjects.length === 2
                                                    ? 'discount-35'
                                                    : ''
                                        }`}>
                                            {getDiscount()}
                                        </span>
                                    )}
                                    <span className="subject-name">{subject}</span>
                                    <img src={chevron} alt=">" className="subject-icon" />
                                </div>
                            );
                        })}
                    </div>
                </div>

                <CourseCard />
            </div>
        </section>
    );
};

export default PricingSection;
