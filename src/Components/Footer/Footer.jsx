import React from 'react'
import './Footer.css'
import telegram from "../../.././public/telegram1.png"
import telegram1 from "../../.././public/instagram1.png"
import telegram2 from "../../.././public/twetter.png"
import { Link } from 'react-router-dom'
const Footer = () => {
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
                            <a href="#" className="footer-link">Home</a>
                        </li>
                        <li className="footer-item">
                            <a href="#" className="footer-link">About</a>
                        </li>
                        <li className="footer-item">
                            <a href="#" className="footer-link"> Branch</a>
                        </li>
                        <li className="footer-item">
                            <a href="#" className="footer-link">Conact</a>
                        </li>
                    </ul>
                    <ul className="footer-sublist">
                        <li className="footer-subitem">
                           <p className="footer-text">Присоединяйтесь к нам</p> 
                            
                        </li>
                        <li className="footer-subitem">
                        <Link to={'/'}>  <img src={telegram} alt="rasm" className="footer-img" /></Link> 
                            <Link to={'https://www.instagram.com/azim_7o?igsh=azYwOGVqNnBudjRy'}>  <img src={telegram1} alt="rasm" className="footer-img" /></Link> 
                     <Link to={'/#'}>  <img src={telegram2} alt="rasm" className="footer-img" /></Link>    
                        </li>
                    </ul>
                    <ul className="footer_list">
                        <li className="footer_item">
                            <p className="footer-text">Заказывайте по номеру
                            </p>
                        </li>
                        <li className="footer_item">
                        <a href="tel:+998339260003" className="footer-sublink"> +998 33 926 00 03</a>

                        </li>

                    </ul>
                </div>

                <div className="footer-subbox">
                    <p className="footer-text-a">© 2020–2022, ООО «IT-TIME», официальный сайт</p>
                    <a href="mailto:narimonovazim@gmail.com" className="footer-link-a">Developed by Azim</a>
                </div>
            </div>
        </div>
        
        
        </>
    )
}

export default Footer
