import React from 'react';
import videoLessonIcon from '../../../Assets/icons/videolesson.svg';
import starOnlineIcon from '../../../Assets/icons/starlesson.svg';
import kaspiIcon from '../../../Assets/icons/kaspi.svg';
import checkIcon from '../../../Assets/icons/Check.svg';
import checkMinusIcon from '../../../Assets/icons/Check-minus.svg';
import { Link } from 'react-router-dom';

const CourseCard = () => {
    const courseData = [
        {
            type: 'Видеосабақ',
            kaspi: true,
            monthly: '10 000 ₸',
            yearly: {
                old: '120 000 ₸',
                new: '57 000 ₸'
            },
            features: [
                '1 жыл',
                '24/7 қолжетімді видеосабақтар',
                'Әр видеодан кейінгі тақырыптық тесттер',
                'Кураторлық қадағалау',
                'Апта сайын тікелей эфирдегі практикалық сабақтар',
                'Үй жұмыстары',
                'Апталық қадағалау сынақтары',
                'Айлық бағалау тесттері',
                'Байқау сынақтары',
                'Ай сайынғы стипендия',
                'Грантқа түсу бойынша профориентологтан консультация'
            ],
            iconCondition: index => index < 2
        },
        {
            type: 'Онлайн курс',
            kaspi: false,
            monthly: '25 000 ₸',
            yearly: null,
            features: [
                '4 ай',
                '24/7 қолжетімді видеосабақтар',
                'Әр видеодан кейінгі тақырыптық тесттер',
                'Кураторлық қадағалау',
                'Апта сайын тікелей эфирдегі практикалық сабақтар',
                'Үй жұмыстары',
                'Апталық қадағалау сынақтары',
                'Айлық бағалау тесттері',
                'Байқау сынақтары',
                'Ай сайынғы стипендия',
                'Грантқа түсу бойынша профориентологтан консультация'
            ],
            iconCondition: (index, array) => index !== array.length - 1
        },
        {
            type: 'Онлайн курс',
            kaspi: true,
            gradient: true,
            oldPrice: '175 000 ₸',
            price: '100 000 ₸',
            subPrice: '10 000 ₸',
            discount: '🤩 75 000 ₸ үнем',
            features: [
                '1 жылдық оқу: \n • 4 ай толық курс\n • 4 ай нұсқа талдау\n • 2 ай қайталау айы',
                '24/7 қолжетімді видеосабақтар',
                'Әр видеодан кейінгі тақырыптық тесттер',
                'Кураторлық қадағалау',
                'Апта сайын тікелей эфирдегі практикалық сабақтар',
                'Үй жұмыстары',
                'Апталық қадағалау сынақтары',
                'Айлық бағалау тесттері',
                'Байқау сынақтары',
                'Ай сайынғы стипендия',
                'Грантқа түсу бойынша профориентологтан консультация'
            ],
            iconCondition: () => true,
            bonusNote: (
                <div className="pricing-bonus-note">
                    <img src="/path/to/icon.svg" className="bonus-icon top-left" alt="icon"/>
                    <img src="/path/to/icon.svg" className="bonus-icon top-right" alt="icon"/>
                    Таңдаған пәніне байланысты <br/>
                    <strong style={{color: '#4D60D7', fontSize: '18px', textTransform: 'uppercase'}}>EduCon
                        баспасының</strong> <br/>
                    кітаптары
                </div>
            )
        }
    ];

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
                                    <img src={videoLessonIcon} alt="icon" />
                                    {course.type}
                                </span>
                                {course.kaspi && (
                                    <span className="pricing-card-kaspi">
                                        <img src={kaspiIcon} alt="Kaspi" />
                                    </span>
                                )}
                            </div>

                            <div className="pricing-card-price">
                                {course.yearly ? (
                                    <>
                                        <div className="pricing-price-monthly">
                                            <p className="pricing-sub">1 айлық</p>
                                            <p className="pricing-main-first">{course.monthly}</p>
                                        </div>
                                        <div className="pricing-price-yearly">
                                            <p className="pricing-sub" style={{color: '#E0E2E7'}}>12 айға төлем</p>
                                            <div>
                                                <p className="pricing-old">{course.yearly.old}</p>
                                                <p className="pricing-main white">{course.yearly.new}</p>
                                            </div>
                                        </div>
                                    </>
                                ) : course.oldPrice ? (
                                    <div className="pricing-price-block">
                                        <p className="pricing-old third">{course.oldPrice}</p>
                                        <div>
                                            <h3 className="pricing-main">{course.price}</h3>
                                            <p className="pricing-text">/ бір төлем</p>
                                        </div>
                                        <div>
                                            <p className="pricing-sub">{course.subPrice}</p>
                                            <p className="pricing-discount">{course.discount}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="pricing-price-block">
                                        <div>
                                            <h3 className="pricing-main">{course.monthly}</h3>
                                            <p className="pricing-text">/ айына</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <ul className="pricing-feature-list">
                                {course.features.map((text, idx, arr) => (
                                    <li key={idx}>
                                        <img
                                            src={course.iconCondition(idx, arr) ? checkIcon : checkMinusIcon}
                                            alt="icon"
                                        />
                                        <span style={{ whiteSpace: 'pre-line', color: '#667085' }}>{text}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pricing-special-notes">
                                <p>🎁 Математикалық сауаттылық видеосабақтары тегін</p>
                                <p>🎁 Оқу сауаттылығы видеосабақтары тегін</p>
                            </div>

                            {course.bonusNote && course.bonusNote}

                            <Link to="/your-target-route" className="pricing-button">
                                Таңдау
                            </Link>
                        </div>
                    </CardWrapper>
                );
            })}
        </div>
    );
};

export default CourseCard;
