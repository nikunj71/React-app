import React from 'react'
import { useEffect,useState,useRef } from 'react'
import "./wether.css"
const App=()=>{ 
    const inputRef=useRef();
    const [serach,setserach]=useState();
    const [city,setCity]=useState(null);
    useEffect(() => {
        inputRef.current.focus();
      });
useEffect(()=>{
    const fetchApi = async ()=>{
        const url= `https://api.openweathermap.org/data/2.5/weather?q=${serach}&units=metric&appid=75068d16de0009ddefa3d7669153ad92`
        const response = await fetch(url) 
        const resjson=await response.json()
        setCity(resjson.main)
    }
   
    
        fetchApi();    
    
},[serach])

    return (
        <>
        <div className="wether">
            <div className="center-box">
                <h1 className="H">Live Whether</h1>
            <input type="search" ref={inputRef} onChange={(e)=>{ setserach(e.target.value)}}></input>
            {!city ?(
                <p>Data not found </p>
            ):(
                <>
                <h2>{serach}</h2>
            <h3>{city.temp}cel</h3>
            <h4>min:{city.temp_min} cel | Max:{city.temp_min} cel</h4>
            
            </>
             ) }
            </div> 
        </div>
        </>
    )
}

export default App