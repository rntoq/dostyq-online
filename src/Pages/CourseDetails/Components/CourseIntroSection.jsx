import React from 'react';
import './CourseIntroSection.css';
import { Link } from 'react-router-dom';
import teacherAvatar from '../../../Assets/icons/teacher-avatar.svg';
import courseVideo from '../../../Assets/images/course-preview.jpg'; // можно заменить на постер

const CourseIntroSection = () => {
    return (
        <section className="course-intro">
            <div className="course-intro-container">
                {/* A. Header - Breadcrumb */}
                <nav className="course-breadcrumb">
                    <Link to="/">Басты бет</Link>
                    <span>/</span>
                    <Link to="/courses">Біздің курстар</Link>
                    <span>/</span>
                    <span className="current">Қазақстан тарихы</span>
                </nav>

                {/* B. Course Hero */}
                <div className="course-hero">
                    <div className="course-info">
                        <h1 className="course-title">Қазақстан тарихы</h1>

                        <div className="course-meta">
                            <div className="teacher-info">
                                <img src={teacherAvatar} alt="Киіков Бақытбек" className="teacher-avatar" />
                                <span className="teacher-name">Киіков Бақытбек</span>
                            </div>

                            <div className="stats">
                                <div className="stat-item">
                                    <span>49 оқушы курс сатып алды</span>
                                </div>
                                <div className="stat-item">
                                    <span>Тіл: қазақша</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="course-video">
                        <video controls poster="/poster.jpg">
                            <source src={courseVideo} type="video/mp4" />
                            Сіздің браузеріңіз видеоны қолдамайды.
                        </video>
                    </div>
                </div>

                {/* C. Course Description */}
                <div className="course-description">
                    <h2>Курс жайлы</h2>
                    <p>
                        Бұл курс Қазақстан тарихы пәнін толық меңгеруге көмектеседі. Әр бөлім ҰБТ форматында дайындалған,
                        нақты және түсінікті түсіндірмелермен қамтылған.
                    </p>
                    <p>
                        Курс барысында интерактивті материалдар мен тестілер арқылы біліміңізді бекітесіз. Сабақтарды кез келген
                        уақытта және кез келген құрылғыдан өтуге болады.
                    </p>
                </div>

                {/* D. Course Features */}
                <div className="course-features">
                    <ul>
                        <li>📖 <strong>Мазмұны:</strong> 20 бөлімнен тұратын толық бағдарлама</li>
                        <li>💡 <strong>Формат:</strong> Видео сабақтар + тест тапсырмалары</li>
                        <li>🕒 <strong>Ұзақтығы:</strong> 2 айлық оқу жоспары</li>
                        <li>👥 <strong>Кімге арналған:</strong> 9-11 сынып оқушылары мен талапкерлерге</li>
                        <li>✓ <strong>Нәтиже:</strong> ҰБТ-да жоғары нәтиже көрсетуге дайындық</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default CourseIntroSection;
