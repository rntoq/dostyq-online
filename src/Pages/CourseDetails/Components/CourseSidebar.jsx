import React from 'react';
import './CourseSidebar.css';
import { useNavigate } from 'react-router-dom';

const CourseSidebar = ({ basePrice = 25000, discount = 0 }) => {
    const navigate = useNavigate();
    const totalPrice = basePrice - (basePrice * discount) / 100;

    const handleAddToCart = () => {
        // здесь можешь добавить логику добавления в корзину
        console.log('Курс добавлен в корзину');
    };

    return (
        <aside className="course-sidebar">
            <div className="price-breakdown">
                <div className="price-row">
                    <p className="label">Негізгі баға</p>
                    <span className="value">{basePrice.toLocaleString()} ₸</span>
                </div>
                <div className="price-row">
                    <p className="label">Жеңілдік</p>
                    <span className="value">{discount}%</span>
                </div>
            </div>

            <div className="price-total">
                <span className="total-label">Барлығы</span>
                <span className="total-value">{totalPrice.toLocaleString()} ₸</span>
            </div>

            <button className="add-to-cart-button" onClick={handleAddToCart}>
                Себетке қосу
            </button>

            <button className="go-back-button" onClick={() => navigate(-1)}>
                Артқа
            </button>
        </aside>
    );
};

export default CourseSidebar;
