import React from 'react'
// import { NavLink } from 'react-router-dom'
const Card=(props)=>{
    return (
        <>
<div className="col-md-4 col-10 mx-auto">
          <div className="card" >
          <a href={props.link} target="_blank">  <img  src={props.imgsrc}className="card-img-top"  alt="not found"/></a>

  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the  card title and make up the bulk of the card's content.</p>
    <a href={props.link} target="_blank">
      <button className="btn btn-primary">{props.btnname}</button>
    </a>
  </div>
</div>
          </div>

          </>
    )
          }
          export default Card