import React from 'react';
import Card from '../../../Card/Card';
import "./Burger.css";
import rasm_a from "../../../../public/souse1.jpg";
import rasm_b from "../../../../public/souse2.jpg";
import rasm_c from "../../../../public/souse3.jpg";

import { useTranslation } from 'react-i18next';

const Burger = () => {
    const { t, i18n } = useTranslation();

    const burger = {
        img: rasm_a,
        title: t('burger.title1'),
        text: t('burger.text1'),
        price: 123
    }  

    const burger1 = {
        img: rasm_a,
        title: t('burger.title1'),
        text: t('burger.text1'),
        price: 122334
    };

    const burger2 = {
        img: rasm_b,
        title: t('burger.title1'),
        text: t('burger.text1'),
        price: 1234444
    };

    const burger3 = {
        img: rasm_c,
        title: t('burger.title1'),
        text: t('burger.text1'),
        price: 12355555
    };

    const handLanguage = (lang) => {
        i18n.changeLanguage(lang.target.value);
    };

    return (
        <div className='burger'>
            <div className="container">
                <Card data={burger} />
                <Card data={burger1} />
                <Card data={burger2} />
                <Card data={burger3} />
   
            </div>
        </div>
    );
};

export default Burger;
