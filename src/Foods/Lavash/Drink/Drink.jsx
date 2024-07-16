import React from 'react'
import Card from '../../../Card/Card'
import './Drink.css'
import rasm_a from "../../../../public/salat.png"
import rasm_b from "../../../../public/salat1.jpg"
import rasm_c from "../../../../public/salat2.jpg"
import rasm_d from "../../../../public/salat4.jpg"


const Drink = () => {

  const drink = {
    img: rasm_a,
    title: "Drink ",
    text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
    price: 123
}
const drink1 = {
    img: rasm_a,
    title: "Drink  pro",
    text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
    price: 122334
}
const drink2 = {
    img: rasm_b,
    title: "Drink  pro msx",
    text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
    price: 1234444
}
const drink3= {
    img: rasm_c,
    title: "Drink  ultra",
    text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
    price: 12355555
}
const drink4= {
  img: rasm_d,
  title: "Drink  ultra",
  text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
  price: 12355555
}
  return (
    <div className='drink'>
      <div className="container">
    <Card  data={drink} />
    <Card data={drink1} />
    <Card data={drink2} />
    <Card data={drink3} />
    <Card data={drink4} />
    <Card data={drink} />
    <Card data={drink1} />
    <Card data={drink3} />
    <Card data={drink} />

    </div>
    </div>
  )
}

export default Drink
