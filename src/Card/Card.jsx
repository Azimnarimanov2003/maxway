import React from 'react';
import './Card.css';
import rasm1 from "../../public/salat.png";
import { useTranslation } from 'react-i18next';

const Card = ({ data }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="card">
        <div className="container">
          <div className="card-box">
            <img src={data.img} alt="photo" className="card-img" />
            <h3 className="card-name">
              {data.title}
            </h3>
            <p className="card-text">{data.text}</p>
            <li className="card-item">
              <p className="card-money">{data.price}$</p>
              <button className="card-button">{t('card.title')}</button>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
