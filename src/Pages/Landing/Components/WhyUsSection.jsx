import React from 'react';
import './WhyUsSection.css';
import blockImage2 from '../../../Assets/images/block2-notebook.png'; // заменяем require
import blockImage3 from '../../../Assets/images/block3-key.png';
import blockImage4 from '../../../Assets/images/block4-school.png';
import blockImage5 from '../../../Assets/images/block5-trophy.png';
import blockImage6 from '../../../Assets/images/block6-bookmark.png';
import recordImage from "../../../Assets/images/homesection.jpg";

const data = [
    {
        subTitle1: 'БІЛІМ САЛАСЫНДА',
        title: '22 ЖЫЛДЫҚ',
        subTitle2: 'ТӘЖІРИБЕ',
        img: blockImage2,
    },
    {
        subTitle1: 'ҚАЗАҚСТАНДА',
        title: 'КТЛ, НИШ, ҰБТ-ҒА ДАЙЫНДЫҚТЫ БАСТАҒАН',
        subTitle2: 'АЛҒАШ ОРТАЛЫҚ',
        img: blockImage3,
    },
    {
        subTitle1: 'ӘР ҚАЛАДА',
        title: 'ОФФЛАЙН\nОРТАЛЫҚ',
        subTitle2: '',
        img: blockImage4,
    },
    {
        subTitle1: 'ҰБТ-ҒА',
        title: '2 ТІЛДЕ\nДАЙЫНДЫҚ',
        subTitle2: '',
        img: blockImage5,
    },
    {
        subTitle1: '',
        title: '10 000\nОҚУШЫ',
        subTitle2: 'ДАЙЫНДАҒАН',
        img: blockImage6,
    },
];


const WhyUsSection = () => {
    return (
        <section className="whyus-section">
            <div className="wrapper">
                <div className="whyus-about-container">
                    <div className="whyus-header-block">
                        <h1 className="whyus-title-nege text-gradient">Неге</h1>
                        <h1 className="whyus-title-biz">БІЗ?</h1>
                    </div>

                    {data.map((item, index) => (
                        <div key={index} className={`whyus-card `}>
                            {item.subTitle1 && <h4 className="whyus-subtitle text-dark">{item.subTitle1}</h4>}
                            {item.title && <h3 className="whyus-title text-gradient">{item.title}</h3>}
                            {item.subTitle2 && <h4 className="whyus-subtitle text-dark">{item.subTitle2}</h4>}
                            <div className="whyus-card-image-wrapper">
                                <img src={item.img} alt={`block-${index + 2}`} className="whyus-card-image"/>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="whyus-record-container">
                    <img
                        src={recordImage}
                        alt="record"
                        className="whyus-record-image"
                    />
                    <div className="whyus-record-overlay">
                        <h3 className="whyus-record-subtitle">Қазақстандағы алғашқы</h3>
                        <h1 className="whyus-record-title text-gradient">140 балл</h1>
                        <h3 className="whyus-record-subtitle">
                            иегері <span className="text-gradient">dostyq</span> оқу <br/> орталығының түлегі
                        </h3>
                        <div className="whyus-record-name">
                            <h3 className="whyus-record-subtitle">Шиара акынова</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
