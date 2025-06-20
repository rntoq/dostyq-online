import React from 'react';
import { Element } from 'react-scroll';
import './CourseDetailsPage.css';
import Header from '../../Components/Header.jsx';
import CourseIntroSection from './Components/CourseIntroSection.jsx';
// import CourseContentSection from './Components/CourseContentSection.jsx';
// import CourseBenefitsSection from './Components/CourseBenefitsSection.jsx';
// import CourseTeachersSection from './Components/CourseTeachersSection.jsx';
// import ContactFormSection from './Components/ContactFormSection.jsx';
import Footer from '../../Components/Footer.jsx';
import CourseSidebar from "./Components/CourseSidebar";

const CourseDetailsPage = ()=> {
    return (
        <div className="page-wrapper">
            <Header />
            <main className="page-main course-details-main">
                <div className="course-info-area wrapper">
                    <div className="course-sections-area">
                        <CourseIntroSection/>
                        {/*<CourseContentSection />*/}
                        {/*<CourseBenefitsSection />*/}
                        {/*<CourseTeachersSection />*/}
                        {/*<ContactFormSection />*/}
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
