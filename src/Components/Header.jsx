import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './Header.css';

import logo from '../Assets/icons/Logo.svg';
import kzFlag from '../Assets/images/flag-kz.svg';
import ruFlag from '../Assets/images/flag-ru.png';
import cartIcon from '../Assets/icons/cart.svg';
import chevronDownIcon from '../Assets/icons/chevrondown.svg';

const Header = () => {
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState('kz');
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogoClick = (e) => {
        if (location.pathname === '/') {
            e.preventDefault();
            scroll.scrollToTop({ duration: 500, smooth: 'easeInOutQuad' });
        }
    };

    const handleLangChange = (lang) => {
        setCurrentLang(lang);
        setLangMenuOpen(false);
    };

    const flags = {
        kz: kzFlag,
        ru: ruFlag,
    };

    return (
        <header className="app-header">
            <div className="app-header-wrapper">
                <Link to="/" className="app-logo-link" onClick={handleLogoClick}>
                    <img src={logo} alt="EduCon logo" className="app-logo" />
                </Link>

                <nav className="app-nav">
                    {['why-us', 'pricing', 'course-system', 'results', 'teachers', 'faq'].map((section, idx) => (
                        <ScrollLink
                            key={idx}
                            to={section}
                            smooth={true}
                            duration={500}
                            offset={-88}
                            className="app-nav-link"
                        >
                            {section === 'why-us' && 'Неге біз?'}
                            {section === 'pricing' && 'Курс тарифтері'}
                            {section === 'course-system' && 'Курс жүйесі'}
                            {section === 'results' && 'Нәтижелер'}
                            {section === 'teachers' && 'Мұғалімдер'}
                            {section === 'faq' && 'FAQ'}
                        </ScrollLink>
                    ))}
                </nav>

                <div className="app-extras">
                    <Link to="/cart" className="app-cart-link">
                        <img src={cartIcon} alt="Cart" className="icon" />
                    </Link>

                    <div className="app-lang-selector">
                        <button
                            className="app-lang-button"
                            onClick={() => setLangMenuOpen(!langMenuOpen)}
                        >
                            <img src={flags[currentLang]} alt="Lang" className="app-flag-icon icon" />
                            <img src={chevronDownIcon} alt="▼" className="icon" />
                        </button>

                        {langMenuOpen && (
                            <div className="app-lang-dropdown">
                                <button onClick={() => handleLangChange('kz')}>
                                    <img src={kzFlag} alt="Kazakh" className="app-flag-icon icon" /> Қазақша
                                </button>
                                <button onClick={() => handleLangChange('ru')}>
                                    <img src={ruFlag} alt="Russian" className="app-flag-icon icon" /> Русский
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="app-auth-actions">
                        <Link to="/login" className="app-btn-link">Кіру</Link>
                        <Link to="/register" className="app-btn-link app-btn-primary">Курска тіркелу</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
