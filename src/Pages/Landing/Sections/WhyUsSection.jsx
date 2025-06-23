import React from 'react';
import { useTranslation } from 'react-i18next';
import './WhyUsSection.css';
import blockImage2 from '../../../Assets/images/block2-notebook.png'; // заменяем require
import blockImage3 from '../../../Assets/images/block3-key.png';
import blockImage4 from '../../../Assets/images/block4-school.png';
import blockImage5 from '../../../Assets/images/block5-trophy.png';
import blockImage6 from '../../../Assets/images/block6-bookmark.png';
import recordImage from "../../../Assets/images/homesection.jpg";

const WhyUsSection = () => {
    const { t } = useTranslation();

    const data = [
        { key: 'experience', img: blockImage2 },
        { key: 'first_center', img: blockImage3 },
        { key: 'offline_centers', img: blockImage4 },
        { key: 'bilingual_prep', img: blockImage5 },
        { key: 'students_prepared', img: blockImage6 },
    ];

    return (
        <section className="whyus-section" id="why-us">
            <div className="wrapper">
                <div className="whyus-about-container">
                    <div className="whyus-header-block">
                        <span className="whyus-title-nege text-gradient">{t('why_us.title_part1')}</span>
                        <h1 className="whyus-title-biz">{t('why_us.title_part2')}</h1>
                    </div>

                    {data.map((item, index) => {
                        const subTitle1 = t(`why_us.cards.${item.key}.subTitle1`, { defaultValue: '' });
                        const title = t(`why_us.cards.${item.key}.title`);
                        const subTitle2 = t(`why_us.cards.${item.key}.subTitle2`, { defaultValue: '' });

                        return (
                            <div key={index} className={`whyus-card`}>
                                {subTitle1 && <h4 className="whyus-subtitle text-dark">{subTitle1}</h4>}
                                {title && (
                                    <h3 className="whyus-title text-gradient">
                                        {title.split('\n').map((line, i) => (
                                            <React.Fragment key={i}>{line}{i < title.split('\n').length - 1 && <br />}</React.Fragment>
                                        ))}
                                    </h3>
                                )}
                                {subTitle2 && <h4 className="whyus-subtitle text-dark">{subTitle2}</h4>}
                                <div className="whyus-card-image-wrapper">
                                    <img src={item.img} alt={`block-${index + 2}`} className="whyus-card-image"/>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="whyus-record-container">
                    <img
                        src={recordImage}
                        alt="record"
                        className="whyus-record-image"
                    />
                    <div className="whyus-record-overlay">
                        <h3 className="whyus-record-subtitle">{t('why_us.record.subtitle1')}</h3>
                        <h1 className="whyus-record-title text-gradient">{t('why_us.record.score')}</h1>
                        <h3 className="whyus-record-subtitle">
                            {t('why_us.record.subtitle2_part1')} <span className="text-gradient">dostyq</span> {t('why_us.record.subtitle2_part2')}
                        </h3>
                        <div className="whyus-record-name">
                            <h3 className="whyus-graduate-name">{t('why_us.record.graduate_name')}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
