import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckoutPage.css';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import CheckoutForm from './Components/CheckoutForm';
import CheckoutSidebar from './Components/CheckoutSidebar';

const CheckoutPage = ({ selectedCourses: externalCourses }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    // Мок-данные курсов (имитация получения с бэкенда)
    const [selectedCourses] = useState(
        externalCourses || [
            { name: 'Қазақстан тарихы', price: 25000, discount: 0, paymentType: 'monthly', courseType: 'online' },
            { name: 'Математика', price: 25000, discount: 20, paymentType: 'monthly', courseType: 'online' },
            // { name: 'Физика', price: 25000, discount: 35, paymentType: 'monthly', courseType: 'online' },
        ]
    );

    const [formState, setFormState] = useState({ isFormValid: false, isTermsAgreed: false });

    const handleSubmit = async (formData) => {
        // Здесь можно сделать реальный запрос на бэкенд
        // await api.sendCheckout(formData);
        console.log('Checkout form data:', formData);
        navigate('/payment');
    };

    return (
        <div className="checkout-page">
            <Header />
            <main className="wrapper container">
                <div className="checkout-content">
                    <CheckoutForm onSubmit={handleSubmit} onFormStateChange={setFormState} />
                    <CheckoutSidebar courses={selectedCourses} onCheckout={handleSubmit} isButtonDisabled={!(formState.isFormValid && formState.isTermsAgreed)} />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CheckoutPage; 