import React, { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import './CheckoutForm.css';
import infoIcon from '../../../Assets/images/test.jpg';
import Input from '../../../Components/Input';
import Breadcrumb from '../../../Components/Breadcrumb';

const initialState = { name: '', surname: '', phone: '', email: '' };

function formatPhone(value) {
    let digits = value.replace(/\D/g, '');
    if (digits.startsWith('8')) digits = digits.slice(1);
    if (digits.startsWith('7')) digits = digits.slice(1);
    digits = digits.slice(0, 10);
    let result = '+7';
    if (digits.length > 0) result += ' ' + digits.slice(0, 3);
    if (digits.length >= 4) result += ' ' + digits.slice(3, 6);
    if (digits.length >= 7) result += ' ' + digits.slice(6, 8);
    if (digits.length >= 9) result += ' ' + digits.slice(8, 10);
    return result;
}

const CheckoutForm = ({ onSubmit, onFormStateChange }) => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState(initialState);
    const [touched, setTouched] = useState({});
    const [isTermsAgreed, setIsTermsAgreed] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Валидация
    const validate = (data = formData) => {
        const errors = {};
        if (!data.name.trim()) errors.name = t('checkout.error_name');
        else if (/\d/.test(data.name)) errors.name = t('checkout.error_name_letters');
        if (!data.surname.trim()) errors.surname = t('checkout.error_surname');
        else if (/\d/.test(data.surname)) errors.surname = t('checkout.error_surname_letters');
        // Phone: маска и валидация как в ContactForm из FaqSection
        const phoneRegex = /^\+7 \d{3} \d{3} \d{2} \d{2}$/;
        if (!phoneRegex.test(data.phone)) errors.phone = t('checkout.error_phone');
        // Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) errors.email = t('checkout.error_email');
        return errors;
    };
    const errors = validate();
    const isFormValid = Object.keys(errors).length === 0;



    // Обработка изменения поля
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            handlePhoneChange(e);
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
            setTouched(prev => ({ ...prev, [name]: true }));
        }
    };

    const handlePhoneChange = (e) => {
        const raw = e.target.value;
        const formatted = formatPhone(raw);
        setFormData(prev => ({ ...prev, phone: formatted }));
        setTouched(prev => ({ ...prev, phone: true }));
    };

    // Обработка чекбокса
    const handleAgree = (e) => {
        setIsTermsAgreed(e.target.checked);
    };

    // Сабмит
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        if (isFormValid && isTermsAgreed) {
            onSubmit(formData);
        }
    };

    useEffect(() => {
        if (onFormStateChange) {
            onFormStateChange({ isFormValid, isTermsAgreed });
        }
    }, [isFormValid, isTermsAgreed, onFormStateChange]);

    return (
        <div className="checkout-form-container">
            <Breadcrumb 
                items={[
                    { label: t('checkout.breadcrumb_home'), to: '/' },
                    { label: t('checkout.breadcrumb_cart'), to: '/cart' },
                    { label: t('checkout.breadcrumb_tariff'), to: '/tariff' },
                    { label: t('checkout.title'), active: true }
                ]}
            />
            <h2>{t('checkout.title')}</h2>
            <form className="checkout-form" autoComplete="off" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="name">{t('checkout.name_label')} <span style={{color: 'red'}}>*</span></label>
                        <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t('checkout.name_label')}
                            required
                            error={touched.name && errors.name ? errors.name : ''}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="surname">{t('checkout.surname_label')} <span style={{color: 'red'}}>*</span></label>
                        <Input
                            name="surname"
                            value={formData.surname}
                            onChange={handleChange}
                            placeholder={t('checkout.surname_label')}
                            required
                            error={touched.surname && errors.surname ? errors.surname : ''}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="phone">{t('checkout.phone_label')} <span style={{color: 'red'}}>*</span></label>
                        <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={t('checkout.phone_placeholder') || '+7 777 777-77-77'}
                            type="tel"
                            required
                            error={touched.phone && errors.phone ? errors.phone : ''}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email <span style={{color: 'red'}}>*</span></label>
                        <Input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="abs@gmail.com"
                            type="email"
                            required
                            error={touched.email && errors.email ? errors.email : ''}
                        />
                    </div>
                </div>
                <div className="info-message">
                    <img src={infoIcon} alt="info" className='icon'/>
                        <p className='p-small '>
                            <Trans t={t} i18nKey="checkout.info_message">
                                Әрі-қарай курсқа сілтеме сіз көрсеткен <span style={{color: '#E62D95'}}>телефон нөмеріне және электрондық поштаңызға</span> келеді. Сол үшін енгізген телефон нөмерін және электрондық поштаңызды тексеріп алыңыз!
                            </Trans>
                        </p>
                </div>
                <div className="terms-agreement">
                    <input 
                        type="checkbox" 
                        id="terms" 
                        checked={isTermsAgreed} 
                        onChange={handleAgree}
                    />
                    <label htmlFor="terms" className="p-small">
                        <Trans t={t} i18nKey="checkout.terms_agree">
                            Мен жоғарыдағы шарттармен және <a href="/terms">толық келісімшартпен</a> таныстым және келісемін.
                        </Trans>
                    </label>
                </div>
            </form>
        
        </div>
    );
};

export default CheckoutForm; 