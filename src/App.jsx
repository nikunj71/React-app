import React from 'react'
import Home from "./Home"
import Services from "./Services"
import About from "./About"
import Contact from "./Contact"
import { Redirect, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Wether from "./Wether"
import Todo from "./Todo/App"

const App=()=>{
    return(
        <>
        <Navbar></Navbar>
       <Switch>
           <Route exact path="/home" component={Home}></Route>
           <Route exact path="/services" component={Services}></Route>
           <Route exact path="/about" component={About}></Route>
           <Route exact path="/contact" component={Contact} ></Route>
           <Route exact path="/wether" component={Wether} ></Route>
           <Route exact path="/todo" component={Todo} ></Route>
           
           
           <Redirect exact to="/home"/>
       </Switch>
    <Footer/>
        </>
    )
}
export default  App