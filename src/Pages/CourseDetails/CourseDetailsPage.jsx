import React from 'react';
import './CourseDetailsPage.css';
import Header from '../../Components/Header.jsx';
import CourseIntroSection from './Sections/CourseIntroSection.jsx';
import CourseContentSection from './Sections/CourseContentSection.jsx';
import CourseTeachersSection from './Sections/CourseTeachersSection.jsx';
import CourseFeedbacksSection from './Sections/CourseFeedbacksSection.jsx';
import Footer from '../../Components/Footer.jsx';
import CourseSidebar from './Sections/CourseSidebar.jsx';

const CourseDetailsPage = ()=> {
    return (
        <div className="page-wrapper">
            <Header />
            <main className="page-main course-details-main">
                <div className="course-info-area wrapper">
                    <div className="course-sections-area">
                        <CourseIntroSection/>
                        <CourseContentSection/>
                        <CourseTeachersSection/>
                        <CourseFeedbacksSection/>
                    </div>
                    <div className="course-sidebar-area">
                        <CourseSidebar basePrice={25000} discount={0}/>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default CourseDetailsPage;
