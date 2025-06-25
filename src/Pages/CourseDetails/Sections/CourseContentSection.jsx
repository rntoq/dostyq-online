import React, { useState } from 'react';
import './CourseContentSection.css';
import { useTranslation } from 'react-i18next';
import chevronIcon from '../../../Assets/images/test.jpg';

const CourseContentSection = ({
  lessonsCount,
  testsCount,
  duration,
  modules = [{}]
}) => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="course-content-section">
      <h4 className="course-content-stat">{t('courseDetails.content.title')}</h4>
      <div className="course-content-stats">
        <div className="course-content-stat">
          <div className="stat-label text-gray">{t('courseDetails.content.lessons')}</div>
          <div className="stat-value p-xbig">{lessonsCount}</div>
        </div>
        <div className="course-content-stat">
          <div className="stat-label text-gray">{t('courseDetails.content.tests')}</div>
          <div className="stat-value p-xbig">{testsCount}</div>
        </div>
        <div className="course-content-stat">
          <div className="stat-label text-gray">{t('courseDetails.content.duration')}</div>
          <div className="stat-value p-xbig">{duration}</div>
        </div>
      </div>
      <div className="course-content-accordion">
        {modules.map((section, idx) => (
          <div className="accordion-item" key={idx}>
            <button
              className="accordion-title"
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
            >
              {section.title}
              <span className={`chevron ${openIndex === idx ? 'open' : ''}`}><img src={chevronIcon} className='s-icon' alt="icon" /></span>
            </button>
            {openIndex === idx && (
              <div className="accordion-content">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseContentSection; 