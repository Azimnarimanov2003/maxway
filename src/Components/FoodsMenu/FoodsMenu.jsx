import React from 'react'
import { NavLink } from 'react-router-dom'
import "./FoodsMenu.css"
const FoodsMenu = () => {
    return (

        <div foodsMenu>
            <div className="container">
                <div className="row">
                    <ul className='foodsMenu-list'>
                        <li className='foodsMenu-item' >
                            <p className="foodsMenu-name">   <NavLink className='navLink' to={'/'}>Lavash</NavLink> </p>
                            <p className="foodsMenu-name">  <NavLink className='navLink' to={'/desert'}>Desert</NavLink></p>
                            <p className="foodsMenu-name"><NavLink className='navLink' to={'/pizza'}>Pizza</NavLink></p>
                            <p className="foodsMenu-name"><NavLink className='navLink' to={'/xotdok'}>Xotdok</NavLink></p>
                            <p className="foodsMenu-name">   <NavLink className='navLink' to={'/free'}>Free</NavLink> </p>
                            <p className="foodsMenu-name">  <NavLink className='navLink' to={'/drink'}>Drink</NavLink></p>
                            <p className="foodsMenu-name"><NavLink className='navLink' to={'/burger'}>Burger</NavLink></p>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FoodsMenu
