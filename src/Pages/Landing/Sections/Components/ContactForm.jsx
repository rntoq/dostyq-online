import React, { useState } from 'react';
import './ContactForm.css';
import Input from '../../../../Components/Input';
import Select from '../../../../Components/Select';
import { useTranslation } from 'react-i18next';

function formatPhone(value) {
    // Удаляем все, кроме цифр
    let digits = value.replace(/\D/g, '');
    // Удаляем ведущие 8, 7, если пользователь вводит их вручную
    if (digits.startsWith('8')) digits = digits.slice(1);
    if (digits.startsWith('7')) digits = digits.slice(1);
    // Ограничиваем до 10 цифр (кроме +7)
    digits = digits.slice(0, 10);
    let result = '+7';
    if (digits.length > 0) result += ' ' + digits.slice(0, 3);
    if (digits.length >= 4) result += ' ' + digits.slice(3, 6);
    if (digits.length >= 7) result += ' ' + digits.slice(6, 8);
    if (digits.length >= 9) result += ' ' + digits.slice(8, 10);
    // Закрываем скобку, если пользователь ввёл 3 цифрыы
    return result;
}

const ContactForm = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ phone: '', grade: '' });
    const [errors, setErrors] = useState({ phone: '', grade: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validatePhone = (phone) => {
        // Проверяем строгое совпадение с маской
        return /^\+7 \d{3}\ \d{3} \d{2} \d{2}$/.test(phone);
    };

    const handlePhoneChange = (e) => {
        const raw = e.target.value;
        const formatted = formatPhone(raw);
        setFormData(prev => ({ ...prev, phone: formatted }));
        if (errors.phone) {
            setErrors(prev => ({ ...prev, phone: '' }));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { phone, grade } = formData;
        let valid = true;
        const newErrors = { phone: '', grade: '' };

        if (!phone) {
            newErrors.phone = t('landing.contactForm.errors.phoneRequired');
            valid = false;
        } else if (!validatePhone(phone)) {
            newErrors.phone = t('landing.contactForm.errors.phoneInvalid');
            valid = false;
        }

        if (!grade) {
            newErrors.grade = t('landing.contactForm.errors.gradeRequired');
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
            console.log('Форма жіберілді:', formData);
            setIsSubmitted(true);
        }
    };

    return (
        <div className="cf-container">
            <h1 className="cf-title">{t('landing.contactForm.title')}</h1>
            <p className="cf-description">
                {t('landing.contactForm.description').split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </p>

            {isSubmitted ? (
                <div className="cf-success">
                    {t('landing.contactForm.success')}
                </div>
            ) : (
                <form className="cf-form" onSubmit={handleSubmit}>
                    <div className="cf-group">
                        <div className={`cf-field ${errors.phone ? 'cf-error' : ''}`}>
                            <Input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handlePhoneChange}
                                placeholder={'+7 (___) ___ __ __'}
                                error={errors.phone}
                                maxLength={18}
                                autoComplete="tel"
                            />
                        </div>
                        <div className={`cf-field ${errors.grade ? 'cf-error' : ''}`}>
                            <Select
                                name="grade"
                                value={formData.grade}
                                onChange={handleChange}
                                placeholder={t('landing.contactForm.gradePlaceholder')}
                                error={errors.grade}
                            >
                                {[5, 6, 7, 8, 9, 10, 11].map(grade => (
                                    <option key={grade} value={grade}>{t('landing.contactForm.gradeOption', { grade })}</option>
                                ))}
                            </Select>
                        </div>
                        <button type="submit" className="cf-submit">{t('landing.contactForm.submit')}</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
