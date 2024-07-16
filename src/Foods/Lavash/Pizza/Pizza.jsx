import React from 'react'
import Card from '../../../Card/Card'
import './Pizza.css'
import rasm_a from "../../../../public/salat.png"
import rasm_b from "../../../../public/salat1.jpg"
import rasm_c from "../../../../public/salat2.jpg"
import rasm_d from "../../../../public/salat4.jpg"
import rasm_f from "../../../../public/salat5.jpg"
const Pizza = () => {


const pizza1 = {
    img: rasm_a,
    title: "Pizza  pro",
    text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
    price: 122334
}
const  pizza2 = {
    img: rasm_b,
    title: "Pizza  pro msx",
    text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
    price: 1234444
}
const  pizza3= {
    img: rasm_c,
    title: "Pizza  ultra",
    text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
    price: 12355555
}
const pizza4= {
  img: rasm_d,
  title: "Pizza  ultra",
  text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
  price: 12355555
}
const  pizza5= {
  img: rasm_f,
  title: "Pizza  ultra",
  text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
  price: 12355555
}
  return (
    <div className='pizza'>
      <div className="container">
    <Card  data={pizza1}/>
    <Card data={pizza2}/>
    <Card  data={pizza3}/>
    <Card data={pizza4}/>
    <Card data={pizza5}/>
    <Card data={pizza3}/>
    <Card data={pizza1}/>
    <Card data={pizza2}/>
    <Card data={pizza1}/>
    </div>
    </div>
  )
}

export default Pizza
