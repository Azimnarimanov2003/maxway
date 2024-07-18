import React from 'react'
import Card from '../../../Card/Card'
import './Xotdok.css'
import rasm_a from "../../../../public/souse1.jpg"
import rasm_b from "../../../../public/souse2.jpg"
import rasm_c from "../../../../public/souse3.jpg"
import rasm_d from "../../../../public/souse5.jpg"


const Xotdok = () => {
  const xotdok = {
    img: rasm_a,
    title: "Xot-dok  pro",
    text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
    price: 122334
}
const xotdok2 = {
    img: rasm_b,
    title: "Xot-dok  pro msx",
    text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
    price: 1234444
}
const  xotdok3= {
    img: rasm_c,
    title: "Xot-dok  ultra",
    text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
    price: 12355555
}
const xotdok4= {
  img: rasm_d,
  title: "Xot-dok  ultra",
  text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
  price: 12355555
}
const  xotdok5= {
  img: rasm_a,
  title: "Xot-dok  ultra",
  text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
  price: 12355555
}
  
  return (
    
 <>
 <div className="xotdok">
  <div className="container">
    <Card data={xotdok}/>
    <Card data={xotdok2}/>
    <Card data={xotdok3}/>
    <Card data={xotdok4}/>
    <Card data={xotdok5}/>
    <Card data={xotdok3}/>
    <Card data={xotdok}/>


    </div>
    </div>
    </>
  )
}

export default Xotdok
