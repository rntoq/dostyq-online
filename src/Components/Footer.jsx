import React from 'react';
import './Footer.css';
import logo from '../Assets/icons/Logo.svg';
import instagram from '../Assets/images/test.jpg';
import twitter from '../Assets/images/test.jpg';
import facebook from '../Assets/images/test.jpg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const products = t('footer.products', { returnObjects: true });
  const about = t('footer.about', { returnObjects: true });

  return (
    <footer className="footer">
      <div className="footer-main wrapper">
        <div className="footer-col logo-col">
          <img src={logo} alt="EDUCON" className="footer-logo" />
        </div>
        <div className="footer-col">
          <div className="footer-title">{t('footer.productsTitle')}</div>
          <ul>
            {products.map((item, idx) => (
              <li key={idx}><Link to={item.link}>{item.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-title">{t('footer.aboutTitle')}</div>
          <ul>
            {about.map((item, idx) => (
              <li key={idx}><Link to={item.link}>{item.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="footer-col footer-social">
          <div className="footer-social-icons">
            <a href="#"><img src={instagram} alt="Instagram" /></a>
            <a href="#"><img src={twitter} alt="Twitter" /></a>
            <a href="#"><img src={facebook} alt="Facebook" /></a>
          </div>
          <button className="footer-contact-btn">{t('footer.contactBtn')}</button>
        </div>
      </div>
      <div className="footer-bottom">
        <div>{t('footer.copyright')}</div>
        <div className="footer-bottom-links">
          <a href="#">{t('footer.terms')}</a>
          <a href="#">{t('footer.privacy')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
