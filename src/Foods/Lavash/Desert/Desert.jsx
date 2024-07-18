import React from 'react'
import './Desert.css'
import Card from '../../../Card/Card'
import rasm_a from "../../../../public/shirinlik.jpg"
import rasm_b from "../../../../public/shirinlik5.jpg"
import rasm_c from "../../../../public/shirinlik2.jpg"
import rasm_d from "../../../../public/shirinlik3.jpg"

const Desert = () => {


  const desert= {
    img: rasm_a,
    title: "Desert ",
    text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
    price: 123
}
const desert1 = {
    img: rasm_a,
    title: "Desert  pro",
    text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
    price: 122334
}
const desert2 = {
    img: rasm_b,
    title: "Desert  pro msx",
    text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
    price: 1234444
}
const desert3= {
    img: rasm_c,
    title: "Desert  ultra",
    text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
    price: 12355555
}
const desert4 = {
    img: rasm_d,
    title: "Desert  ultra pro max",
    text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
    price: 123
}
  return (
    <>
    <div className="desert">  
      <div className="container">
      <Card  data={desert}/>
      <Card  data={desert1}/>
      <Card  data={desert2}/>
      <Card  data={desert3}/>
      
   
    
      </div>
      </div>
    </>
  )
}

export default Desert
