import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

import videoLessonIcon from '../../../../Assets/images/test.jpg';
import kaspiIcon from '../../../../Assets/images/test.jpg';
import checkIcon from '../../../../Assets/images/test.jpg';
import checkMinusIcon from '../../../../Assets/images/test.jpg';
import giftIcon from '../../../../Assets/images/test.jpg';
import emojiIcon from '../../../../Assets/images/test.jpg'; 
import fireIcon from '../../../../Assets/images/test.jpg'; 

const PriceBlock = ({ priceData }) => {
    // Renders different price structures based on data
    if (priceData.yearly) {
        return (
            <div className="pricing-price-columns">
                <div className="pricing-price-monthly">
                    <p className="pricing-sub">{priceData.monthly.label}</p>
                    <p className="pricing-main-first">{priceData.monthly.price}</p>
                </div>
                <div className="pricing-price-yearly">
                    <p className="pricing-sub muted">{priceData.yearly.label}</p>
                    <div>
                        <p className="pricing-old">{priceData.yearly.old}</p>
                        <p className="pricing-main white">{priceData.yearly.new}</p>
                    </div>
                </div>
            </div>
        );
    }

    if (priceData.oldPrice) {
        return (
            <div className="pricing-price-block featured-price">
                <p className="pricing-old third">{priceData.oldPrice}</p>
                <div>
                    <h3 className="pricing-main">{priceData.price}</h3>
                    <p className="pricing-text">{priceData.payment_type}</p>
                </div>
                <div>
                    <p className="pricing-sub">{priceData.subPrice}</p>
                    <p className="pricing-discount p-small">{priceData.discount}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="pricing-price-block">
            <div>
                <h3 className="pricing-main">{priceData.monthly.price}</h3>
                <p className="pricing-text">{priceData.payment_type}</p>
            </div>
        </div>
    );
};

const BonusNote = ({ noteData }) => {
    return (
        <div className="pricing-bonus-note">
            <img src={emojiIcon} className="bonus-icon top-left" alt="icon" />
            <img src={fireIcon} className="bonus-icon top-right" alt="icon" />
            <Trans i18nKey={noteData.text_key}>
                Таңдаған пәніне байланысты <br/>
                <strong>EduCon баспасының</strong><br/>
                кітаптары
            </Trans>
        </div>
    );
};

const CourseCard = () => {
    const { t } = useTranslation();
    const courseData = t('course_cards', { returnObjects: true });

    return (
        <div className="pricing-card-grid">
            {courseData.map((course, i) => {
                const CardWrapper = course.gradient ? 'div' : React.Fragment;
                const wrapperProps = course.gradient ? { className: 'pricing-gradient-wrapper' } : {};
                
                return (
                    <CardWrapper key={i} {...wrapperProps}>
                        <div className={`pricing-card${course.gradient ? ' featured' : ''}`}>
                            <div className="pricing-card-header">
                                <span className="pricing-card-label p-small">
                                    <img src={videoLessonIcon} className='s-icon' alt="icon" />
                                    {course.type}
                                </span>
                                {course.kaspi && (
                                    <span className="pricing-card-kaspi">
                                        <img src={kaspiIcon} className='s-icon' alt="Kaspi" />
                                    </span>
                                )}
                            </div>

                            <div className="pricing-card-price">
                                <PriceBlock priceData={course.priceData} />
                            </div>

                            <ul className="pricing-feature-list">
                                {course.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <img src={feature.included ? checkIcon : checkMinusIcon} alt="icon" />
                                        <span className="feature-text">{feature.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pricing-special-notes">
                                {course.special_notes.map((note, idx) => (
                                    <p key={idx}>
                                        <img src={giftIcon} alt="gift" className="s-icon"/> {note}
                                    </p>
                                ))}
                            </div>

                            {course.bonusNote && <BonusNote noteData={course.bonusNote} />}

                            <Link to="/checkout" className="pricing-button">
                                {course.button_text}
                            </Link>
                        </div>
                    </CardWrapper>
                );
            })}
        </div>
    );
};

export default CourseCard;
