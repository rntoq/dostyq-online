import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({ phone: '', grade: '' });
    const [errors, setErrors] = useState({ phone: '', grade: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validatePhone = (phone) => {
        const regex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
        return regex.test(phone);
    };

    const formatPhone = (input) => {
        const digits = input.replace(/\D/g, '').replace(/^8/, '7'); // заменить 8 на 7
        let result = '+7 (';

        if (digits.length > 1) result += digits.slice(1, 4);
        if (digits.length >= 4) result += ') ';
        if (digits.length >= 7) result += digits.slice(4, 7) + '-';
        if (digits.length >= 9) result += digits.slice(7, 9) + '-';
        if (digits.length >= 11) result += digits.slice(9, 11);

        return result;
    };

    const handlePhoneChange = (e) => {
        const formatted = formatPhone(e.target.value);
        setFormData(prev => ({ ...prev, phone: formatted }));

        // Очистка ошибки при наборе
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
            newErrors.phone = 'Телефон нөмірін енгізіңіз';
            valid = false;
        } else if (!validatePhone(phone)) {
            newErrors.phone = 'Телефон нөмірі дұрыс емес';
            valid = false;
        }

        if (!grade) {
            newErrors.grade = 'Сыныпты таңдаңыз';
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
            <h1 className="cf-title">Сұрақтарыңыз болса</h1>
            <p className="cf-description">
                Толық ақпарат алу үшін форманы толтырыңыз,<br />
                және біз сізбен жақын арада байланысамыз.
            </p>

            {isSubmitted ? (
                <div className="cf-success">
                    ✅ Рахмет! Сізбен жақын арада байланысамыз.
                </div>
            ) : (
                <form className="cf-form" onSubmit={handleSubmit}>
                    <div className="cf-group">
                        <div className={`cf-field ${errors.phone ? 'cf-error' : ''}`}>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handlePhoneChange}
                                placeholder="+7 (___) ___-__-__"
                                maxLength="18"
                                className="cf-input"
                                aria-label="Телефон нөмірі"
                            />
                            {errors.phone && <span className="cf-error-text">{errors.phone}</span>}
                        </div>
                        <div className={`cf-field ${errors.grade ? 'cf-error' : ''}`}>
                            <select
                                name="grade"
                                value={formData.grade}
                                onChange={handleChange}
                                className="cf-select"
                                aria-label="Сынып таңдау"
                            >
                                <option value="">Сынып</option>
                                {[5, 6, 7, 8, 9, 10, 11].map(grade => (
                                    <option key={grade} value={grade}>{grade} сынып</option>
                                ))}
                            </select>
                            {errors.grade && <span className="cf-error-text">{errors.grade}</span>}
                        </div>
                        <button type="submit" className="cf-submit">Жіберу</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
