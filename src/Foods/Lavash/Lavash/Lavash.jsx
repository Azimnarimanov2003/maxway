import React from 'react'
import Card from './../../../Card/Card';
import './Lavash.css'
import rasm_a from "../../../../public/salat.png"
import rasm_b from "../../../../public/salat1.jpg"
import rasm_c from "../../../../public/salat2.jpg"
import rasm_d from "../../../../public/salat5.jpg"
import rasm_f from "../../../../public/salat4.jpg"



const Lavash = () => {


  const lavash = {
    img: rasm_a,
    title: "Lavash ",
    text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
    price: 123
}
const  lavash1 = {
    img: rasm_a,
    title: "Lavash  pro",
    text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
    price: 122334
}
const  lavash2 = {
    img: rasm_b,
    title: "Lavash  pro msx",
    text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
    price: 1234444
}
const  lavash3= {
    img: rasm_c,
    title: "Lavash  ultra",
    text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
    price: 12355555
}
const  lavash4= {
  img: rasm_d,
  title: "Lavash  ultra",
  text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
  price: 12355555
}
const  lavash5= {
  img: rasm_f,
  title: "Lavash  ultra",
  text: 'njadfn e;ori oqer qo;erih    q;eori ;qoeir;oiqrelkgn ',
  price: 12355555
}
  return (
    <div className='lavash'>
      <div className="container">
   
      <Card  data={lavash}/>
       <Card data={lavash1}/> 
       <Card data={lavash2}/>
       <Card data={lavash3}/>
       <Card data={lavash4}/>
       <Card data={lavash5}/>
        <Card data={lavash}/>
    </div>
    </div>
  )
}

export default Lavash
