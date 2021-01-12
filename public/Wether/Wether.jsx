import React from 'react'
import { useEffect,useState } from 'react'
import "../Css.css"
const App=()=>{ 
    const [city,setCity]=useState(null);
    const [serach,setserach]=useState("Surat");
useEffect(()=>{
    const fetchApi = async ()=>{
        const url= `https://api.openweathermap.org/data/2.5/weather?q=${serach}&units=metric&appid=75068d16de0009ddefa3d7669153ad92`
        const response = await fetch(url) 
        const resjson=await response.json()
        setCity(resjson.main)
    }
    
    setInterval(() => {
        fetchApi();    
    }, 1000);
},[serach])

    return (
        <>
        <div>
            <div className="center-box">
                <h1>Live Whether</h1>
            <input type="search" onChange={(e)=>{ setserach(e.target.value)}}></input>
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