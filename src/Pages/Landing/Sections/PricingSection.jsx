// PricingSection.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './PricingSection.css';
import { usePricingLogic } from './Components/usePricingLogic'; 
import chevron from '../../../Assets/icons/chevronupright.svg';
import emojiIcon from '../../../Assets/images/test.jpg'; 
import fireIcon from '../../../Assets/images/test.jpg'; 
import { Link } from 'react-router-dom';
import CourseCard from './Components/CourseCard';

const PricingSection = () => {
    const { t } = useTranslation();
    const {
        examOptions,
        selectedExam,
        setSelectedExam,
        subjectsWithStatus,
        handleSubjectClick,
        selectedSubjects,
        getDiscount
    } = usePricingLogic();

    return (
        <section className="pricing-section" id="pricing">
            <div className="wrapper">
                <div className="pricing-header-with-info">
                    <h2 className="pricing-title text-dark">
                        {t('pricing.title_part1')} <span className="text-gradient">{t('pricing.title_part2')}</span>
                    </h2>

                    {selectedSubjects.length > 0 && selectedSubjects.length < 3 && (
                        <div className={`subject-info-box ${selectedSubjects.length === 2 ? 'discount-35' : 'discount-20'}`}>
                             <img src={emojiIcon} className="emoji-icon top-left" alt="icon"/>
                             <img src={fireIcon} className="emoji-icon bottom-right" alt="icon"/>
                             <p>{t('pricing.promo_text', { count: selectedSubjects.length + 1 })}</p>
                            <strong className="info-box-discount">{getDiscount()} {t('pricing.discount_text')}</strong>
                        </div>
                    )}
                </div>

                <div className="pricing-tabs">
                    {examOptions.map((examKey) => (
                        <button
                            key={examKey}
                            className={`pricing-tab ${selectedExam === examKey ? 'active' : ''}`}
                            onClick={() => setSelectedExam(examKey)}
                        >
                            {t(`pricing.exam_options.${examKey}`)}
                        </button>
                    ))}
                </div>

                <div className="pricing-subjects-wrapper">
                    <div className="pricing-subjects">
                        {subjectsWithStatus.map(({ name: subjectKey, isSelected, isDisabled, isAvailable }) => {
                            return (
                                <div
                                    key={subjectKey}
                                    className={`pricing-subject-card ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
                                    onClick={() => !isDisabled && handleSubjectClick(subjectKey)}
                                >
                                    {!isSelected && selectedSubjects.length > 0 && selectedSubjects.length < 3 && isAvailable && (
                                        <span className={`discount-label p-small ${selectedSubjects.length === 2 ? 'discount-35' : 'discount-20'}`}>
                                            {getDiscount()}
                                        </span>
                                    )}
                                    <p className="subject-name">{t(`pricing.subjects.${subjectKey}`)}</p>
                                    <div className="card-icons">
                                        <Link to={`/courses/${subjectKey}`}>
                                            <img src={chevron} alt=">" className="subject-icon s-icon" />
                                        </Link>
                                    </div>
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
