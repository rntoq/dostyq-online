import React from 'react';
import './TeachersSection.css';

import teacher1 from '../../../Assets/images/teacher.jpg';
import teacher2 from '../../../Assets/images/teacher.jpg';
import teacher3 from '../../../Assets/images/teacher.jpg';
import teacher4 from '../../../Assets/images/teacher.jpg';
import checkIcon from '../../../Assets/icons/check-circle.svg';
import { useTranslation, Trans } from 'react-i18next';

const teacherImages = [teacher1, teacher2, teacher3, teacher4];

const TeachersSection = () => {
    const { t } = useTranslation();
    const teachers = t('teachersSection.teachers', { returnObjects: true });

    return (
        <section className="landing-teachers-section">
            <div className="wrapper">
                <h2 className="text-dark">
                    <Trans i18nKey="teachersSection.title">
                        Dostyq online <span className="text-gradient">ұстаздары</span>
                    </Trans>
                </h2>
                <div className="landing-teachers-grid">
                    {teachers.map((teacher, idx) => (
                        <div key={idx} className="landing-teacher-card">
                            <img src={teacherImages[idx % teacherImages.length]} alt={teacher.name} className="landing-teacher-image"/>
                            <div className="landing-subject-tag">{teacher.subject}</div>
                            <h4 className="landing-teacher-name text-dark">{teacher.name}</h4>
                            <ul className="landing-teacher-experience">
                                {teacher.experience.map((item, i) => (
                                    <li key={i}>
                                        <img src={checkIcon} alt="✓" className="landing-check-icon"/>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeachersSection;