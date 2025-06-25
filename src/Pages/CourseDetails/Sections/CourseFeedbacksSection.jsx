import React from 'react';
import './CourseFeedbacksSection.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import arrowIcon from '../../../Assets/images/test.jpg';

const CourseFeedbacksSection = ({ feedbacks = [] }) => {
  const { t } = useTranslation();

  if (!feedbacks.length) {
    return (
      <section className="course-feedbacks-section">
        <h4 className="course-feedbacks-title">{t('courseDetails.feedbacks.title')}</h4>
        <div className="no-feedbacks">
          <p className="p-small text-gray">{t('courseDetails.feedbacks.noFeedbacks')}</p>
          <button className="feedback-btn">{t('courseDetails.feedbacks.leaveFeedback')}</button>
        </div>
      </section>
    );
  }
  return (
    <section className="course-feedbacks-section">
      <h4 className="course-feedbacks-title">{t('courseDetails.feedbacks.title')}</h4>
      {feedbacks.map((feedback, idx) => (
        <div className="feedback-card" key={idx}>
          <div className="feedback-card-content">
            <div className="feedback-header">
              <img src={feedback.avatar} alt={feedback.name} className="feedback-avatar" />
              <div className="feedback-user-info">
                <p className="feedback-name p-small">{feedback.name}</p>
                <p className="p-xsmall text-gray">
                  {t('courseDetails.feedbacks.pointA', { pointA: feedback.pointA })}
                </p>
                <p className="feedback-score-b">
                  {t('courseDetails.feedbacks.pointBLabel', { pointB: feedback.pointB })} 
                </p>
              </div>
            </div>
            <div className='feedback-text-container'>
                <p className="feedback-text">{feedback.text}</p>
                <Link to={feedback.link} className="feedback-link">
                  {t('courseDetails.feedbacks.fullView')}
                  <img src={arrowIcon} alt=">" className="s-icon" />
                </Link>
              </div>
          </div>
          <div className="feedback-certificate">
            <img src={feedback.certificate} alt="Certificate" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default CourseFeedbacksSection;
