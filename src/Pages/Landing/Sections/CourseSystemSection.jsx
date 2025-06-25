import React from 'react';
import { useTranslation } from 'react-i18next';
import './CourseSystemSection.css';
import testImage from '../../../Assets/images/test.jpg'; // Placeholder
import backgroundImage from '../../../Assets/images/course-system-back.jpg';

const images = {
    registration: testImage,
    video_lessons: testImage,
    topic_test: testImage,
    homework: testImage,
    live_session: testImage,
    pair_work: testImage,
    mentor_check: testImage,
    weekly_test: testImage,
    monthly_test: testImage,
};

const CourseSystemSection = () => {
    const { t } = useTranslation();
    const registrationData = t('landing.course_system.steps', { returnObjects: true });

    return (
        <section className="course-system-section" id="course-system">
            <div className="wrapper">
                <h2 className="course-system-title">
                    {t('landing.course_system.title_part1')} <span className="text-gradient">{t('landing.course_system.title_part2')}</span>
                </h2>
                <div className="course-system-grid">
                    {registrationData.map((step, index) => (
                        <div key={index} className="course-system-card">
                            <div className="course-system-card-content">
                                <h4 className="course-system-card-title text-gradient">{step.title}</h4>
                                <p className="course-system-card-subtitle">{step.subtitle}</p>
                            </div>

                            <div className="course-system-card-footer">
                                <div className="course-system-card-id">0{index + 1}</div>
                                <img src={images[step.img_key]} alt={step.title} className="course-system-card-image"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseSystemSection;
