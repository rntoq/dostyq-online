import React from 'react';
import './CheckoutSidebar.css';
import { Link } from 'react-router-dom';
import starIcon from '../../../Assets/icons/starlesson.svg';
import giftIcon from '../../../Assets/images/gift.svg';
import emoji from '../../../Assets/images/test.jpg';
import fire from '../../../Assets/images/test.jpg';

const CheckoutSidebar = ({ courses = [], onCheckout, isButtonDisabled }) => {
    const bonusCourses = [
        { name: 'Оқу сауаттылығы', icon: giftIcon },
        { name: 'Математикалық сауаттылық', icon: giftIcon },
    ];

    const discountTiers = [0, 20, 35]; // 0% for 1st, 20% for 2nd, 35% for 3rd and subsequent

    const processedCourses = courses.map((course, index) => {
        const discountPercentage = index < discountTiers.length 
            ? discountTiers[index] 
            : discountTiers[discountTiers.length - 1];
        
        // Assume the incoming course object has a 'price' property which is the original price
        const originalPrice = course.price;
        const discountAmount = originalPrice * (discountPercentage / 100);
        const finalPrice = originalPrice - discountAmount;

        return {
            ...course,
            originalPrice,
            finalPrice,
            discount: discountPercentage,
        };
    });

    const basePrice = processedCourses.reduce((sum, course) => sum + course.originalPrice, 0);
    const totalPrice = processedCourses.reduce((sum, course) => sum + course.finalPrice, 0);
    const totalDiscount = basePrice - totalPrice;

    const getBanner = () => {
        const numCourses = courses.length;
        if (numCourses === 1) {
            return { text: '2-ші пәнге', discount: '-20% жеңілдік' };
        }
        if (numCourses === 2) {
            return { text: '3-ші пәнге', discount: '-35% жеңілдік' };
        }
        return null; // Don't show banner for 0 or 3+ courses
    };

    const bannerContent = getBanner();

    return (
        <aside className="checkout-sidebar">
            {bannerContent && (
                <div className="discount-banner">
                    <img src={emoji} alt="emoji" className="banner-emoji" />
                    <div className="banner-text">
                        <p>{bannerContent.text}</p>
                        <span className="banner-discount">{bannerContent.discount}</span>
                    </div>
                    <Link to="/" className="banner-button">Пән таңдау</Link>
                    <img src={fire} alt="fire" className="banner-fire" />
                </div>
            )}

            <div className="banner-price">
            <div className="course-list">
                {processedCourses.map((course, index) => (
                    <div key={index} className="course-item">
                        <div className="course-info">
                            <strong className="course-name p-xbig">
                                {course.name}
                                {course.discount > 0 && <span className="course-discount-badge">-{course.discount}%</span>}
                            </strong>
                            <div className="course-tag">
                                <img src={starIcon} alt="star" />
                                Онлайн курс
                            </div>
                        </div>
                        <div className="price-info">
                            <span className="payment-type">Айлық төлем</span>
                            {course.discount > 0 && <span className="original-price">{course.originalPrice.toLocaleString()} ₸</span>}
                            <span className="final-price">{course.finalPrice.toLocaleString()} ₸</span>
                        </div>
                    </div>
                ))}
                {bonusCourses.map((course, index) => (
                    <div key={index} className="course-item bonus-item">
                         <div className="course-info">
                             <img src={course.icon} alt="gift" className="icon" />
                             <p >{course.name}</p>
                         </div>
                         <div className="price-info">
                            <span className="final-price">0 ₸</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="price-summary">
                <div className="summary-row">
                    <span>Негізгі баға</span>
                    <span>{basePrice.toLocaleString()} ₸</span>
                </div>
                <div className="summary-row">
                    <span>Жеңілдік</span>
                    <span className="discount-amount">
                        {totalDiscount > 0 ? `-${totalDiscount.toLocaleString()} ₸` : '0%'}
                    </span>
                </div>
                <div className="summary-row total-row">
                    <strong className="p-big">Барлығы</strong>
                    <strong className="p-big">{totalPrice.toLocaleString()} ₸</strong>
                </div>
            </div>

            <button onClick={onCheckout} className="checkout-button" disabled={isButtonDisabled}>Төлем жасау</button>
            </div>
        </aside>
    );
};

export default CheckoutSidebar; 