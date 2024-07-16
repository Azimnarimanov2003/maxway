import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
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

  const sendMessange = () => {
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
              <p className="navbar-name"><NavLink className="navLink" to={'/'}>Home</NavLink></p>
              <p className="navbar-name"><NavLink className="navLink" to={'/about'}>About</NavLink></p>
              <p className="navbar-name"><NavLink className="navLink" to={'/branch'}>Branch</NavLink></p>
              <p className="navbar-name"><NavLink className="navLink" to={'/contact'}>Contact</NavLink></p>
            </li>
          </ul>
          <Button type="primary" onClick={showModal}>
            Enter
          </Button>
          <Modal title="" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div className="modal-box">
              <h3 className="modal-name">Добро пожаловать</h3>
              <p className="modal-text">Войдите с вашим номером телефона</p>
              <label htmlFor="Ism"></label>
              <input type="text" className="navbar-input-name" placeholder="Ism" onChange={(e) => setName(e.target.value)} />
              <label htmlFor="Telefon raqam"></label>
              <input type="Nomer" className="navbar-input-nomer" placeholder="+998901234567" onChange={(e) => setNomer(e.target.value)} />
              <button className="modal-btn" onClick={sendMessange}>Enter</button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
