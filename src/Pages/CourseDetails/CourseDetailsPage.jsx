import React, { useEffect, useState } from 'react';
import './CourseDetailsPage.css';
import Header from '../../Components/Header.jsx';
import testAvatar from '../../Assets/images/test.jpg'; // путь относительно вашего файла
import CourseIntroSection from './Sections/CourseIntroSection.jsx';
import CourseContentSection from './Sections/CourseContentSection.jsx';
import CourseTeachersSection from './Sections/CourseTeachersSection.jsx';
import CourseFeedbacksSection from './Sections/CourseFeedbacksSection.jsx';
import Footer from '../../Components/Footer.jsx';
import CourseSidebar from './Sections/CourseSidebar.jsx';

const courseIntroData = {
    title: 'Қазақстан тарихы',
    teacher: 'Киіков Бақытбек',
    studentsCount: 49,
    language: 'Қазақша',
    videoSrc: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'Қазақстан тарихы пәні бойынша ҰБТ-ға дайындық курсы — бұл мектеп бітіруші түлектерге арналған арнайы оқу бағдарламасы. Курстың мақсаты — Ұлттық бірыңғай тестілеуден (ҰБТ) жоғары балл алуға көмектесу. '
};
const contentData = {
    lessonsCount: 25,
    testsCount: 40,
    duration: "7 caғат 41 мин",
    modules: [
      { title: "Ежелгі Қазақстан тарихы", content: "description" },
      { title: "Ежелгі Қазақстан тарихы", content: "description" }
    ]
};
const teachersData = [
    {
        
            name: "Киіков Бақытбек",
            avatar: testAvatar,
            profession: "мұғалім | тестолог",
            students: 3286,
            courses: 1,
            achievements: ["Ақтау КТЛ&SDU түлегі", "EduCon компаниясының химия пәнінің мұғалімі, ҰБТ эксперті", "Грант-аналитика саласында 5 жыл"]
       
    }
];
const feedbacksData = [
    {
      name: "Айша",
      pointA: 90,
      pointB: 131,
      text: "Маған курс өте ұнады: материал қарапайым әрі түсінікті тілмен берілген, құжаттамалардағыдай емес, болашақта шын мәнінде қажет болатын нақты мысалдармен түсіндіріледі. Әсіресе  Авторға үлкен рахмет!",
      avatar: testAvatar,
      link: "/review/arman",
      certificate: testAvatar
    },
    {
        name: "Айша",
        pointA: 90,
        pointB: 131,
        text: "Маған курс өте ұнады: материал қарапайым әрі түсінікті тілмен берілген, құжаттамалардағыдай емес, болашақта шын мәнінде қажет болатын нақты мысалдармен түсіндіріледі. Әсіресе  Авторға үлкен рахмет!",
        avatar: testAvatar,
        link: "/review/arman",
        certificate: testAvatar
    }        
  ];

const CourseDetailsPage = ()=> {
    return (
        <div className="page-wrapper">
            <Header />
            <main className="page-main course-details-main">
                <div className="course-info-area wrapper">
                    <div className="course-sections-area">
                        <CourseIntroSection {...courseIntroData} />
                        <CourseContentSection {...contentData} />
                        <CourseTeachersSection teachers={teachersData} />
                        <CourseFeedbacksSection feedbacks={feedbacksData}/>
                    </div>
                    <div className="course-sidebar-area">
                        <CourseSidebar basePrice={100000} discount={20} />
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default CourseDetailsPage;
