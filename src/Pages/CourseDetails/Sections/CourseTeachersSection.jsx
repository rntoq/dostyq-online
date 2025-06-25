import React from 'react';
import './CourseTeachersSection.css';
import { useTranslation } from 'react-i18next';
import userIcon from '../../../Assets/images/test.jpg';

const CourseTeachersSection = ({ teachers = [] }) => {
  const { t } = useTranslation();

  return (
    <section className="course-teacher-section">
      <h4 className="course-teacher-title">{t('courseDetails.teachers.title')}</h4>
      {teachers.map((teacher, idx) => (
        <div className='teacher-card-container' key={idx}>
                  <div className="teacher-card" key={idx}>
          <img src={teacher.avatar} alt={teacher.name} className="teacher-photo" />
          <div className="teacher-info-block">
            <div className="teacher-name p-small">{teacher.name}</div>
            <div className="teacher-profession p-xsmall text-gray">{teacher.profession}</div>
            <div className="teacher-stats">
              <div className="teacher-stat p-small">
                <img src={userIcon} alt="icon" className="teacher-stat-icon" />
                <span>{teacher.students} {t('courseDetails.teachers.students')}</span>
              </div>
              <div className="teacher-stat p-small">
                <img src={userIcon} alt="icon" className="teacher-stat-icon" />
                <span>{teacher.courses} {t('courseDetails.teachers.courses')}</span>
              </div>
            </div>
          </div>
        </div>
        <ul className="teacher-achievements">
          {teacher.achievements && teacher.achievements.map((ach, i) => (
          <li key={i}>{ach}</li>
          ))}
        </ul>

        </div>
      ))}
    </section>
  );
};

export default CourseTeachersSection; 