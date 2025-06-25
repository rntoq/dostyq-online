import React from 'react';
import './CheckoutSidebar.css';
import { Link } from 'react-router-dom';
import starIcon from '../../../Assets/images/test.jpg';
import giftIcon from '../../../Assets/images/test.jpg';
import emoji from '../../../Assets/images/test.jpg';
import fire from '../../../Assets/images/test.jpg';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

const CheckoutSidebar = ({ courses = [], onCheckout, isButtonDisabled }) => {
    const { t } = useTranslation();
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
            return <Trans 
                        t={t}
                        i18nKey="checkout.checkoutSidebar.second_course_banner"
                        components={[
                                <br key="0" />,
                                <strong key="1" />
                        ]}
                    />
                }
        if (numCourses === 2) {
            return <Trans 
                        t={t}
                        i18nKey="checkout.checkoutSidebar.third_course_banner"
                        components={[
                                <br key="0" />,
                                <strong key="1" />
                        ]}
                    />
                }
        return null; // Don't show banner for 0 or 3+ courses
    };

    const bannerContent = getBanner();

    if (!courses.length) {
        return (
            <aside className="checkout-sidebar">
                <div className="no-courses">{t('checkout.checkoutSidebar.no_courses')}</div>
            </aside>
        );
    }

    return (
        <aside className="checkout-sidebar">
            {bannerContent && (
                <div className="discount-banner">
                    <img src={emoji} alt="emoji" className="banner-emoji icon" />
                    <div className="banner-text">
                        <p>{bannerContent}</p>
                    </div>
                    <Link to="/" className="banner-button">{t('checkout.checkoutSidebar.select_course')}</Link>
                    <img src={fire} alt="fire" className="banner-fire icon" />
                </div>
            )}

            <div className="banner-price">
                <div className="course-list">
                    {processedCourses.map((course, index) => (
                        <div key={index} className="course-item">
                            <div className="sidebar-course-info">
                                <strong className="course-name p-xbig">
                                    {course.name}
                                    {course.discount > 0 && <span className="value p-xsmall">-{course.discount}%</span>}
                                </strong>
                                <span className="payment-type">{t(`checkout.checkoutSidebar.paymentType.${course.paymentType}`)}</span>
                            </div>
                            <div className="price-info">
                                <div className="course-tag">
                                    <img src={starIcon} alt="star" className='s-icon' />
                                    <p className='p-small'>{t(`checkout.checkoutSidebar.courseType.${course.courseType}`)}</p>
                                </div>
                                <div className="course-price">
                                    <span className={course.discount > 0 ? 'original-price' : 'final-price'}>{course.price.toLocaleString()} ₸</span>
                                    {course.discount > 0 && (
                                            <span className="final-price">{(course.finalPrice || course.price).toLocaleString()} ₸</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div  className="course-item">
                        {bonusCourses.map((course, index) => (
                            <div key={index} className="bonus-item">
                                <div className="sidebar-course-info">
                                    <img src={course.icon} alt="gift" className="s-icon" />
                                    <p >{course.name}</p>
                                </div>
                                <div className="price-info">
                                    <span className="final-price">0 ₸</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="price-summary">
                    <div className="summary-row">
                        <p>{t('checkout.checkoutSidebar.base_price')}</p>
                        <strong className='p-xbig'>{basePrice.toLocaleString()} ₸</strong>
                    </div>
                    <div className="summary-row">
                        <p>{t('checkout.checkoutSidebar.discount')}</p>
                        <span className="discount-amount">
                            {totalDiscount > 0 ? `-${totalDiscount.toLocaleString()} ₸` : '0%'}
                        </span>
                    </div>
                    <div className="summary-row total-row">
                        <p >{t('checkout.checkoutSidebar.total')}</p>
                        <strong className="p-xbig">{totalPrice.toLocaleString()} ₸</strong>
                    </div>
                </div>

                <button onClick={onCheckout} className="checkout-button" disabled={isButtonDisabled}>
                    {t('checkout.checkoutSidebar.pay_button')}
                </button>
            </div>
        </aside>
    );
};

export default CheckoutSidebar; 