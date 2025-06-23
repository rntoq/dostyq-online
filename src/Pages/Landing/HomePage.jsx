import React from 'react';
import { Element } from 'react-scroll';
import './HomePage.css';
import Header from '../../Components/Header.jsx';
import MainSection from './Sections/MainSection.jsx';
import WhyUsSection from './Sections/WhyUsSection.jsx';
import PricingSection from './Sections/PricingSection.jsx';
import CourseSystemSection from './Sections/CourseSystemSection.jsx';
import ResultsSection from './Sections/ResultsSection.jsx';
import TeachersSection from './Sections/TeachersSection.jsx';
import Footer from "../../Components/Footer.jsx";
import FaqSection from './Sections/FaqSection.jsx';

function HomePage() {
    return (
        <div className="page-wrapper">
            <Header />
            <main className="page-main home-main">
                <Element name="why-us">
                    <MainSection />
                </Element>
                <Element name="why-us">
                    <WhyUsSection />
                </Element>
                <Element name="pricing">
                    <PricingSection />
                </Element>
                <Element name="course-system">
                    <CourseSystemSection />
                </Element>
                <Element name="results">
                    <ResultsSection />
                </Element>
                <Element name="teachers">
                    <TeachersSection />
                </Element>
                <Element name="faq">
                    <FaqSection />
                </Element>
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;

