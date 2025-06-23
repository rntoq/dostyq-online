import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
// import './CheckoutForm.css';
// import PhoneInput from '../../../Components/PhoneInput';
// import NameInput from '../../../Components/NameInput';
// import SurnameInput from '../../../Components/SurnameInput';
// import EmailInput from '../../../Components/EmailInput';
import infoIcon from '../../../Assets/icons/Check-minus.svg';

const CheckoutForm = ({ formData, setFormData, onAgree, isFormValid, isTermsAgreed }) => {
    const { t } = useTranslation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePhoneChange = (value) => {
        setFormData(prev => ({ ...prev, phone: value }));
    };
    
    return (
        <div className="checkout-form-container">
            <h2>{t('checkout.title')}</h2>
            <form className="checkout-form">
                <div className="form-row">
                   
                </div>
            </form>

            <div className="info-message">
                <img src={infoIcon} alt="info"/>
                <p className="p-small">{t('checkout.info_message')}</p>
            </div>

            <div className="terms-agreement">
                <input 
                    type="checkbox" 
                    id="terms" 
                    checked={isTermsAgreed} 
                    onChange={onAgree}
                    disabled={!isFormValid}
                />
                <label htmlFor="terms" className="p-small">
                    <Trans t={t} i18nKey="checkout.terms_agree">
                        Мен жоғарыдағы шарттармен және <a href="/terms">толық келісімшартпен</a> таныстым және келісемін.
                    </Trans>
                </label>
            </div>
        </div>
    );
};

export default CheckoutForm; 