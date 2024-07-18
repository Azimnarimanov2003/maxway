import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import "./FoodsMenu.css"

const FoodsMenu = () => {
    const { t, i18n } = useTranslation();

    const handLanguage = (lang) => {
      i18n.changeLanguage(lang.target.value);
    }

    return (
        <div className="foodsMenu">
            <div className="container">
                <div className="row">
                    <ul className='foodsMenu-list'>
                        <li className='foodsMenu-item'>
                            <p className="foodsMenu-name">
                                <NavLink className='navLink' to={'/'}>{t('Card.title1')}</NavLink>
                            </p>
                            <p className="foodsMenu-name">
                                <NavLink className='navLink' to={'/desert'}>{t('Card.title2')}</NavLink>
                            </p>
                            <p className="foodsMenu-name">
                                <NavLink className='navLink' to={'/pizza'}>{t('Card.title3')}</NavLink>
                            </p>
                            <p className="foodsMenu-name">
                                <NavLink className='navLink' to={'/xotdok'}>{t('Card.title4')}</NavLink>
                            </p>
                            <p className="foodsMenu-name">
                                <NavLink className='navLink' to={'/free'}>{t('Card.title5')}</NavLink>
                            </p>
                            <p className="foodsMenu-name">
                                <NavLink className='navLink' to={'/drink'}>{t('Card.title6')}</NavLink>
                            </p>
                            <p className="foodsMenu-name">
                                <NavLink className='navLink' to={'/burger'}>{t('Card.title7')}</NavLink>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FoodsMenu
