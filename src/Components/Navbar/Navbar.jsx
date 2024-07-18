import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const handLanguage = (lang) => {
    i18n.changeLanguage(lang.target.value);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [nomer, setNomer] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const sendMessange = (e) => {
    e.preventDefault();
    const token = "7491679368:AAGQfmHuOXm2dJ14WpYOlVjt_1SDLeZieSY";
    const chat_id = "2029939556";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const messageText = `Ism: ${name}     \n  Nomer: ${nomer}`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: messageText
      })
    })
    .then(res => res.json())
    .then(res => {
      alert("Xabar yuborildi!");
      setIsModalOpen(false);
    })
    .catch(err => {
      console.log(err);
    });
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="row">
          <ul className="navbar-list">
            <li className="navbar-item">
              <p className="navbar-subname">SFood</p>
            </li>
            <li className="navbar-item">
              <p className="navbar-name"><NavLink className="navLink" to={'/'}>{t('header.title')}</NavLink></p>
              <p className="navbar-name"><NavLink className="navLink" to={'/about'}>{t('header.title1')}</NavLink></p>
              <p className="navbar-name"><NavLink className="navLink" to={'/branch'}> {t('header.title2')}</NavLink></p>
              <p className="navbar-name"><NavLink className="navLink" to={'/contact'}>{t('header.title3')}</NavLink></p>
            </li>
            <li className="navbar-item">
              <select name="" id="" onChange={handLanguage} > 
                <option value="uz">Uzb</option>
                <option value="en">Eng</option>
                <option value="ru">Rus</option>
              </select>
            </li>
          </ul>
          <Button type="primary" onClick={showModal}>
            {t('header.text2')}
          </Button>
          <Modal title="" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <form className="modal-box" onSubmit={sendMessange}>
              <h3 className="modal-name">{t('header.text')}</h3>
              <p className="modal-text">{t('header.text1')}</p>
              <label htmlFor="name"></label>
              <input type="text" className="navbar-input-name" placeholder="Name" required onChange={(e) => setName(e.target.value)} />
              <label htmlFor="nomer"></label>
              <input type="text" className="navbar-input-nomer" placeholder="+998901234567" required onChange={(e) => setNomer(e.target.value)} />
              <button type="submit" className="modal-btn">{t('header.text2')}</button>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
