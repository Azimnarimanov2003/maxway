import React from 'react'
import Card from '../../../Card/Card'
import "./Burger.css"
import rasm_a from "../../../../public/souse1.jpg"
import rasm_b from "../../../../public/souse2.jpg"
import rasm_c from "../../../../public/souse3.jpg"
import rasm_d from "../../../../public/souse5.jpg"

const Burger = () => {
    const burger = {
        img: rasm_a,
        title: "Burger",
        text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
        price: 123
    }
    const burger1 = {
        img: rasm_a,
        title: "Burger pro",
        text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
        price: 122334
    }
    const burger2 = {
        img: rasm_b,
        title: "Burger pro msx",
        text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
        price: 1234444
    }
    const burger3 = {
        img: rasm_c,
        title: "Burger ultra",
        text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
        price: 12355555
    }
    const burger4 = {
        img: rasm_d,
        title: "Burger ultra pro max",
        text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
        price: 123
    }
    return (
        <div className='burger' >
            <div className="container">
                <Card data={burger} />
                <Card  data ={burger1}/>
                <Card data={burger2} />
                <Card data={burger3}/>
                <Card data={burger4}/>
                <Card data={burger}/>
                <Card data ={burger}/>

            </div>
        </div>
    )
}

export default Burger
