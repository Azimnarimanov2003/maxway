import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Contact.css'
const Contact = () => {
  return (
    <>
     
      <div className="contact">
       
          <div class="container">
            <div class="contact-top">
              <h3 class="contact-title">Телефоны контактных центров</h3>
              <p class="contact-text">Круглосуточно, без выходных</p>
              <ul class="contact-list">
                <li class="contact-item">
                  <p>Ташкент</p>
                  <a href="tel:+9989260003" class="contact-tel">+998339260003</a>
                </li>
                <li class="contact-item"><p>Кашкадарё</p>
                  <a href="tel:+998938117503" class="contact-tel">+998938117503</a>
                </li>
                <li class="contact-item">
                  <p>Камаши</p>
                  <a href="tel:+9989260003" class="contact-tel">+998977777777</a>
                </li>
              </ul>
            </div>
            <div class="contact-middle">
              <h3 class="contact-title">Отдел поддержки клиентов</h3>
              <ul class="contact-list"><li class="contact-item">
                <p>Электронная почта</p>
                <a href="mailto:narimonovazim@gmail.com" class="contact-email">narimonovazim@gmail.com</a>
              </li>
                <li class="contact-item">
                  <p>Контактный телефон</p>
                  <a href="mailto:narimonovazim@gmail.com.com" class="contact-email">+998339260003</a>
                </li>
                </ul>
                </div>
                <div class="contact-bottom">
              <h3 class="contact-title">Правообладателям</h3>
              <p class="contact-subtext">По вопросам, возникшим в связи с предположительным неправомерным использованием товарных знаков, логотипов и иных материалов, просим обращаться по е-мейлу с приложением подтверждающих документов</p>
              <div class="contact-blok">
                <p>Электронная почта</p>
                <a href="mailto:narimonovazim@gmail.com.com" class="contact-email">narimonovazim@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </>
    
  )
}

export default Contact
