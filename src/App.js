import React, { useState } from 'react';

import './App.css';


function App() {

 
  const [count, setCount] = useState("");
  
   
  
  var memoria = []

  function init(e){
     
      memoria.push(e)
       
    console.log(memoria)
 }
 
  return (
    
   
     <div className="Contenedor">      

    
      <p>Calculadora</p>

       <div className="Visor">
      
       <p >{count} </p>

      </div>

      <div className="Contenedor-B">
      
      <button class="numero" onClick={() => setCount(count + "7")}>
        7
      </button>

      <button className="numero" onClick={() => setCount(count + "8")}>
        8
      </button>
      <button className="numero" onClick={() => setCount(count + "9")}>
        9
      </button>
      <button id="/" onClick={() => setCount(count + "/")}>
        /
      </button>

      </div>

      <div className="Contenedor-B">

      <button className="numero" onClick={() => setCount(count + "4")}>
        4
      </button>
      <button className="numero" onClick={() => setCount(count + "5")}>
        5
      </button>
      <button className="numero" onClick={() => setCount(count + "6")}>
        6
      </button>
      <button id="x" onClick={() => setCount(count + "x")}>
        x
      </button>

      </div>
      
      <div className="Contenedor-B">
      <button className="numero" onClick={() => setCount(count + "1")}>
        1
      </button>
      <button className="numero" onClick={() => setCount(count + "2")}>
        2
      </button>
      <button className="numero" onClick={() => setCount(count + "3")}>
        3
      </button>
      <button id="+" onClick={() => setCount(count + "+")}>
        +
      </button>

      </div>

      <div className="Contenedor-B">

      <button onClick={() => setCount(count + ".")}>
        .
      </button>
      <button onClick={() => setCount(count + "0")}>
        0
      </button>
      <button id="=" onClick={() => setCount(count + "=")}>
        =
      </button>
      <button id="-" onClick={() => setCount(count + "-")}>
        -
      </button>

      </div>

      <div className="Contenedor-B">
        <button onClick={() => setCount('')}> CLEAR </button>
      </div>


    </div>
    
    
  );



  
  
}

       


export default (App)