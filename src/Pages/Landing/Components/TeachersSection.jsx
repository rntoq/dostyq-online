import React from 'react';
import './TeachersSection.css';

import teacher1 from '../../../Assets/images/teacher.jpg';
import teacher2 from '../../../Assets/images/teacher.jpg';
import teacher3 from '../../../Assets/images/teacher.jpg';
import teacher4 from '../../../Assets/images/teacher.jpg';
import checkIcon from '../../../Assets/icons/check-circle.svg';


const teachers = [
    {
        name: 'Кенжегараева Заида',
        subject: 'Биология пәні',
        image: teacher1,
        experience: [
            '11 жылдық тәжірибесі бар ҰБТ саласында тестолог маманы',
            '11 жылдық тәжірибесі бар ҰБТ саласында тестолог маманы',
            '11 жылдық тәжірибесі бар ҰБТ саласында тестолог маманы',
        ],
    },
    {
        name: 'Кенжегараев Ержан',
        subject: 'Биология пәні',
        image: teacher2,
        experience: [
            '11 жылдық тәжірибесі бар ҰБТ саласында тестолог маманы',
            '11 жылдық тәжірибесі бар ҰБТ саласында тестолог маманы',
            '11 жылдық тәжірибесі бар ҰБТ саласында тестолог маманы',
        ],
    },
    {
        name: 'Кенжегараев Айдар',
        subject: 'Биология пәні',
        image: teacher3,
        experience: [
            '11 жылдық тәжірибесі бар ҰБТ саласында тестолог маманы',
            '11 жылдық тәжірибесі бар ҰБТ саласында тестолог маманы',
            '11 жылдық тәжірибесі бар ҰБТ саласында тестолог маманы',
        ],
    },
    {
        name: 'Кенжегараев Заңғар',
        subject: 'Биология пәні',
        image: teacher4,
        experience: [
            '11 жылдық тәжірибесі бар ҰБТ саласында тестолог маманы',
            '11 жылдық тәжірибесі бар ҰБТ саласында тестолог маманы',
            '11 жылдық тәжірибесі бар ҰБТ саласында тестолог маманы',
        ],
    },
];

const TeachersSection = () => {
    return (
        <section className="teachers-section">
            <div className="wrapper">
                <h2 className="text-dark">Dostyq online <span className="text-gradient">ұстаздары</span></h2>
                <div className="teachers-grid">
                    {teachers.map((teacher, idx) => (
                        <div key={idx} className="teacher-card">
                            <img src={teacher.image} alt={teacher.name} className="teacher-image"/>
                            <div className="subject-tag">{teacher.subject}</div>
                            <h4 className="teacher-name text-dark">{teacher.name}</h4>
                            <ul className="teacher-experience">
                                {teacher.experience.map((item, i) => (
                                    <li key={i}>
                                        <img src={checkIcon} alt="✓" className="check-icon"/>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );

};

export default TeachersSection;