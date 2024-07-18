import React from 'react'
import './Footer.css'
import telegram from "../../.././public/telegram1.png"
import telegram1 from "../../.././public/instagram1.png"
import telegram2 from "../../.././public/twetter.png"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18next'
const Footer = () => {
    
    const {t , i18next} = useTranslation();
const handLanguage = (lang) => {
    i18n.changeLanguage(lang.target.value);
}

    
    return (
        <>
        <div className="footer">
            <div className="footer-container container">
                <div className="footer-box">
                    <ul className="footer-list">
                        <li className="footer-item">
                            <a href="#" className="footer-link">  <span className='footer-span'>SFood</span> </a>
                        </li>
                        <li className="footer-item">
                            <a href="#" className="footer-link"></a>
                        </li>
                        <li className="footer-item">
                            <a href="#" className="footer-link">{t('header.title')}</a>
                        </li>
                        <li className="footer-item">
                            <a href="#" className="footer-link"> {t('header.title1')}</a>
                        </li>
                        <li className="footer-item">
                            <a href="#" className="footer-link">{t('header.title2')}</a>
                        </li>
                    </ul>
                    <ul className="footer-sublist">
                        <li className="footer-subitem">
                           <p className="footer-text">{t('Footer.title1')}</p> 
                            
                        </li>
                        <li className="footer-subitem">
                        <Link to={'/'}>  <img src={telegram} alt="rasm" className="footer-img" /></Link> 
                            <Link to={'https://www.instagram.com/azim_7o?igsh=azYwOGVqNnBudjRy'}>  <img src={telegram1} alt="rasm" className="footer-img" /></Link> 
                     <Link to={'/#'}>  <img src={telegram2} alt="rasm" className="footer-img" /></Link>    
                        </li>
                    </ul>
                    <ul className="footer_list">
                        <li className="footer_item">
                            <p className="footer-text">{t('Footer.title2')}
                            </p>
                        </li>
                        <li className="footer_item">
                        <a href="tel:+998339260003" className="footer-sublink"> +998 33 926 00 03</a>

                        </li>

                    </ul>
                </div>

                <div className="footer-subbox">
                    <p className="footer-text-a">{t('Footer.title3')}</p>
                    <a href="mailto:narimonovazim@gmail.com" className="footer-link-a">{t('Footer.title4')}</a>
                </div>
            </div>
        </div>
        
        
        </>
    )
}

export default Footer
