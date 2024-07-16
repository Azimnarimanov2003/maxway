import React from 'react'
import './Card.css'
import rasm1 from "../../public/salat.png"


const Card = ({data}) => {
  return (
    <>

<div className="card">
    <div className="container">

        <div className="card-box">
           <img src={data.img} alt="photo" className="card-img" />
           <h3 className="card-name">
          {data.title}  Burger 
           </h3>
           <p className="card-text"> Lorem, ipsum.</p>
           <li className="card-item">
            <p className="card-money"> 3.19$</p>
            <button className="card-button">  Заказывайте </button>
           </li>
        </div>
    </div>
</div>
    </>
  )
}



export default Card
