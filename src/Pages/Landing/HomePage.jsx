import React from 'react';
import { Element } from 'react-scroll';
import './HomePage.css';
import Header from '../../Components/Header.jsx';
import MainSection from './Components/MainSection.jsx';
import WhyUsSection from './Components/WhyUsSection.jsx';
import PricingSection from './Components/PricingSection.jsx';
import CourseSystemSection from './Components/CourseSystemSection.jsx';
import ResultsSection from './Components/ResultsSection.jsx';
import TeachersSection from './Components/TeachersSection.jsx';
import Footer from "../../Components/Footer.jsx";
import FaqSection from './Components/FaqSection.jsx';

function HomePage() {
    return (
        <div className="page-wrapper">
            <Header />
            <main className="page-main">
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

