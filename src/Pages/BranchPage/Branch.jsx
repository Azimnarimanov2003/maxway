import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Branch.css'
const Branch = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <section class="filial">
        <div class="container">
          <ul class="filial-list">
            <li class="filial-item">
            <a class="filial-link" href="/filialCard">
            <div class="filial-left">
              <h3 class="filial-title">MaxWay Magic City</h3>
            <p class="filial-text">Magic City,ул. Бабура, 174, Ташкент, Узбекистан</p>
            </div>
            <div class="filial-right">
              <p class="filial-subtext">Часы работы</p>
            <p class="filial-text">10:00-03:00</p>
            </div>
            </a>
            </li>
            <li class="filial-item">
              <a class="filial-link" href="/filialCard">
              <div class="filial-left">
                <h3 class="filial-title">MaxWay Tashkent City</h3>
                <p class="filial-text">
                  Magic City, Navoiy, 26, Ташкент, Узбекистан</p>
                  </div>
                  <div class="filial-right"><p class="filial-subtext">Часы работы</p>
                  <p class="filial-text">10:00-03:00</p></div>
                  </a>
                  </li>
                  <li class="filial-item">
                    <a class="filial-link" href="/filialCard">
                    <div class="filial-left">
                      <h3 class="filial-title">MaxWay Chilanzar City</h3>
                    <p class="filial-text">Magic City,ул. Chilanzar, 3, Ташкент, Узбекистан</p>
                    </div>
                    <div class="filial-right"><p class="filial-subtext">Часы работы</p>
                    <p class="filial-text">10:00-03:00</p>
                    </div>
                    </a>
                    </li>
                    </ul>
                    </div>
                    </section>
    </div>
  )
}

export default Branch
