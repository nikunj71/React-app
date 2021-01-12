import React from 'react'
import {NavLink, useHistory,useLocation} from "react-router-dom"
// import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "./Css.css"
const Navbar =()=>{
  const history=useHistory()
  const location=useLocation();
    return(
        <>
<div className="container-fluid nav_bg">
    <div className="row">
        <div className="col-10 mx-auto">
            
<nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/home">Home<HomeIcon/></NavLink>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  activeClassName="menu_active" className="nav-link active" aria-current="page" to="/services">Services</NavLink>
        </li> 
          <li className="nav-item">
          <NavLink   activeClassName="menu_active"className="nav-link active" aria-current="page" to="/about">About</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink   activeClassName="menu_active"className="nav-link active" aria-current="page" to="/wether">Wether</NavLink>
        </li>
        <li className="nav-item">
          <NavLink   activeClassName="menu_active"className="nav-link active" aria-current="page" to="/todo">ToDo</NavLink>
        </li>  
         <li className="nav-item">
          <NavLink   activeClassName="menu_active"className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          {location.pathname ==="/home"?"":
          (<ArrowBackIosIcon onClick={()=>{return history.goBack("/home")}}></ArrowBackIosIcon>)
    }
          
        </li>        
      
     
       
      </ul>
     
    </div>
  </div>
</nav>
</div>
    </div>
</div>

        </>
    )
}
export default Navbar