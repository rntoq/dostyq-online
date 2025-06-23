import React from 'react';
import './CourseIntroSection.css';
import { useTranslation } from 'react-i18next';
import Breadcrumb from '../../../Components/Breadcrumb';
import teacherAvatar from '../../../Assets/images/test.jpg';
import courseImage from '../../../Assets/images/test.jpg';
import userIcon from '../../../Assets/images/test.jpg';
import langIcon from '../../../Assets/images/test.jpg';

const CourseIntroSection = ({
  title,
  teacher,
  studentsCount,
  language,
  videoSrc,
  description
}) => {
  const { t } = useTranslation();

  return (
    <section className="course-intro">
      <div className="course-intro-container">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: t('courseDetails.breadcrumb.home'), to: '/' },
            { label: t('courseDetails.breadcrumb.courses'), to: '/courses' },
            { label: title, active: true }
          ]}
        />

        {/* Hero Section */}
        <div className="course-hero">
          <div className="course-info">
            <h3 className="course-title">{title}</h3>
            <div className="course-meta">
              <div className="teacher-info">
                <img src={teacherAvatar} alt={teacher} className="teacher-avatar" />
                <span className="teacher-name">{teacher}</span>
              </div>
              <div className="stats">
                <div className="stat-item">
                  <img src={userIcon} alt="students" className="stat-icon" />
                  <span>{studentsCount} {t('courseDetails.intro.students')} <span className='text-gray'>{t('courseDetails.intro.purchased')}</span></span>
                </div>
                <div className="stat-item">
                  <img src={langIcon} alt="language" className="stat-icon" />
                  <span>{t('courseDetails.intro.language')}: {language}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="course-image-wrapper">
            <video className="course-image" controls poster={courseImage}>
              <source src={videoSrc} type="video/mp4" />
              {t('courseDetails.intro.noVideoSupport')}
            </video>
          </div>
        </div>

        {/* About Section */}
        <div className="course-description">
          <h4 className='course-description-title'>{t('courseDetails.intro.aboutTitle')}</h4>
          <p className='p-small'>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CourseIntroSection;
