import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckoutPage.css';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Breadcrumb from '../../Components/Breadcrumb';
import CheckoutForm from './Components/CheckoutForm';
import CheckoutSidebar from './Components/CheckoutSidebar';

const CheckoutPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        phone: '',
        email: '',
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const [isTermsAgreed, setIsTermsAgreed] = useState(false);
    
    // Updated dummy data for demonstration. 
    // The sidebar will now calculate discounts based on this list.
    const selectedCourses = [
        { name: 'Қазақстан тарихы', price: 25000 },
        // { name: 'Математика', price: 25000 },
        // { name: 'Физика', price: 25000 },
    ];
    // To test with 1 course:
    // const selectedCourses = [{ name: 'Қазақстан тарихы', price: 25000 }];
    // To test with 2 courses:
    // const selectedCourses = [{ name: 'Қазақстан тарихы', price: 25000 }, { name: 'Математика', price: 25000 }];

    const validateForm = () => {
        const { name, surname, phone, email } = formData;
        const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        return name.trim() !== '' && 
               surname.trim() !== '' && 
               phoneRegex.test(phone) && 
               emailRegex.test(email);
    };

    useEffect(() => {
        if (validateForm()) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
            setIsTermsAgreed(false); 
        }
    }, [formData]);

    const handleAgree = (e) => {
        setIsTermsAgreed(e.target.checked);
    };

    const handleCheckout = () => {
        if (isFormValid && isTermsAgreed) {
            console.log("Navigating to payment with data:", formData);
            // Navigate to the next page, e.g., a payment provider page
            navigate('/payment');
        } else {
            console.log("Checkout blocked: Form invalid or terms not agreed.");
        }
    };

    return (
        <div className="checkout-page">
            <Header />
            <main className="wrapper container">
                <Breadcrumb paths={['Басты бет', 'Себет', 'Тариф', 'Деректерді енгізу']} />
                <div className="checkout-content">
                    <CheckoutForm 
                        formData={formData}
                        setFormData={setFormData}
                        onAgree={handleAgree}
                        isFormValid={isFormValid}
                        isTermsAgreed={isTermsAgreed}
                    />
                    <CheckoutSidebar 
                        courses={selectedCourses}
                        onCheckout={handleCheckout}
                        isButtonDisabled={!isTermsAgreed || !isFormValid}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CheckoutPage; 