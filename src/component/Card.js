import React from 'react'
// import "./Card.css"
import {BsFillArrowRightCircleFill } from 'react-icons/bs';


function Card(props) {
  return (
    <div className="cardd">
     <div className="member" >
        <h3><b>{props.head}</b></h3>
        <p>{props.des}</p>
        <img className="card-img" src={props.img} alt="gong"/>
        <BsFillArrowRightCircleFill className="card-arrow" />
     </div>
    </div>
  )
}

export default Card