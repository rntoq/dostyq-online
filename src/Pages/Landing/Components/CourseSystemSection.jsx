import React from 'react';
import './CourseSystemSection.css';
import backgroundImage from '../../../Assets/images/course-system-back.jpg';

const registrationData = [
    {
        title: "Курсқа тіркелу",
        subtitle: "Жоғарыда көрсетілген пакеттерден өзіңе ыңғайлысын таңдайсың. Курсқа толық төлем жасап, өз потогыңның басталуын күтесің.",
        id: 1,
        img: "/images/registration.png"
    },
    {
        title: "Видеосабақтарды көру",
        subtitle: "Күніге видеосабақтарды көресің және конспект жазып, платформаға жүктейсіз",
        id: 2,
        img: "/images/video-lessons.png"
    },
    {
        title: "Тақырыптық тест",
        subtitle: "Әр видеосабақтан кейін 10 сұрақтан тұратын тақырыптық тесттерді орындайсыз",
        id: 3,
        img: "/images/topic-test.png"
    },
    {
        title: "Үй жұмысын орындау",
        subtitle: "Үй жұмыстарын орындап, біліміңді шыңдайсыз",
        id: 4,
        img: "/images/homework.png"
    },
    {
        title: "Тікелей эфирге қатысу",
        subtitle: "Аптасына 2 рет мұғаліммен тікелей эфирде практикалық сабақ өтеді. Эфирде В және С деңгейлі теориялық сұрақтар мен есептер талдайсыз.",
        id: 5,
        img: "/images/live-session.png"
    },
    {
        title: "Жұптық жұмыс жасау",
        subtitle: "Жұптық жұмыста сұрақ-жауап арқылы тақырыптарды бекітесіз",
        id: 6,
        img: "/images/pair-work.png"
    },
    {
        title: "Менторға зачет тапсыру",
        subtitle: "Өткен тақырыптар бойынша менторға сабақтан қорытынды есеп тапсырып, қысқаша ауызша немесе жазбаша түрде есеп бересіз.",
        id: 7,
        img: "/images/mentor-check.png"
    },
    {
        title: "Апталық тест тапсыру",
        subtitle: "Әр апта соңы апталық тест тапсырасыз",
        id: 8,
        img: "/images/weekly-test.png"
    },
    {
        title: "Айлық тест тапсыру",
        subtitle: "Ай соңында 4 аптада өткен тақырыптар бойынша айлық тест және ҰБТ сынағын тапсырасыз.",
        id: 9,
        img: "/images/monthly-test.png"
    }
];

const CourseSystemSection = () => {
    return (
        <section className="course-system-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="wrapper">
                <h2 className="course-system-title">Курс <span className="text-gradient">жүйесі</span> </h2>
                <div className="course-system-grid">
                    {registrationData.map((step) => (
                        <div key={step.id} className="course-system-card">
                            <div className="course-system-card-content">
                                <h4 className="course-system-card-title text-gradient">{step.title}</h4>
                                <p className="course-system-card-subtitle">{step.subtitle}</p>
                            </div>

                            <div className="course-system-card-footer">
                                <div className="course-system-card-id">0{step.id}</div>
                                <img src={step.img} alt={step.title} className="course-system-card-image"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseSystemSection;
