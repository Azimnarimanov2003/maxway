import React from 'react'
import Card from '../../../Card/Card'
import './Free.css'
import rasm_a from "../../../../public/salat.png"
import rasm_b from "../../../../public/salat1.jpg"
import rasm_c from "../../../../public/salat2.jpg"
import rasm_d from "../../../../public/salat4.jpg"
import rasm_f from "../../../../public/salat5.jpg"
const Free = () => {


  const free = {
    img: rasm_a,
    title: "Free ",
    text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
    price: 123
}
const free1 = {
    img: rasm_a,
    title: "Free  pro",
    text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
    price: 122334
}
const free2 = {
    img: rasm_b,
    title: "Free  pro msx",
    text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
    price: 1234444
}
const free3= {
    img: rasm_c,
    title: "Free  ultra",
    text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
    price: 12355555
}
const free4= {
  img: rasm_d,
  title: "Free  ultra",
  text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
  price: 12355555
}
const free5= {
  img: rasm_f,
  title: "Free  ultra",
  text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
  price: 12355555
}
  return (
    <div className='free'>
      <div className="container">
    <Card data={free}/>
    <Card data={free1}/>
    <Card data={free2}/>
    <Card data={free3}/>
    <Card data={free4}/>
    <Card data={free5}/>
    <Card data={free4}/>
    <Card data={free2}/>
    <Card data={free}/>
    <Card data={free5}/>
    </div>
    </div>
  )
}

export default Free
