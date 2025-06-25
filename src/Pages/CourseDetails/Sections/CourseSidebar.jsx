import React, { useState } from 'react';
import './CourseSidebar.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CourseSidebar = ({ basePrice , discount }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [added, setAdded] = useState(false);
    const totalPrice = basePrice - (basePrice * discount) / 100;

    const handleAddToCart = () => {
        setAdded(true);
        // здесь можешь добавить логику добавления в корзину
        console.log('Курс добавлен в корзину');
    };

    return (
        <aside className="course-sidebar">
            <div className="price-breakdown">
                <div className="price-row">
                    <p className="label text-gray">{t('courseSidebar.basePrice')}</p>
                    <span className="p-xbig">{basePrice.toLocaleString()} ₸</span>
                </div>
                <div className="price-row">
                    <p className="label text-gray">{t('courseSidebar.discount')}</p>
                    <span className="value p-xsmall">{discount}%</span>
                </div>
            </div>

            <div className="price-total">
                <span className="total-label">{t('courseSidebar.total')}</span>
                <span className="p-xbig">{totalPrice.toLocaleString()} ₸</span>
            </div>

            <button
                className={added ? 'add-to-cart-button added' : 'add-to-cart-button'}
                onClick={handleAddToCart}
                disabled={added}
            >
                {added ? (
                    <>
                        <span style={{marginRight: 8, verticalAlign: 'middle'}}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill="#219653"/>
                                <path d="M6 10.5L9 13.5L14 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        {t('courseSidebar.added')}
                    </>
                ) : t('courseSidebar.addToCart')}
            </button>

            <button className="go-back-button" onClick={() => navigate(-1)}>
                {t('courseSidebar.back')}
            </button>
        </aside>
    );
};

export default CourseSidebar;
