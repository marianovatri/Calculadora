import React, { useState } from 'react';

import './App.css';




const App = () => {


  const [count, setCount] = useState("0");
  const[memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

 
  const handleButtonPress = content => () => {
    const num = parseFloat(value);

    if (content ==="CLEAR") {
      setValue("0");
      setMemory(null);
      setOperator(null);
      return;

    }

    if (content === ".") {
      if (value.includes(".")) return;
      setValue((value + ".");
      return;
    }

    
  };
     
 
   return (
    
   
     <div className="Contenedor">      

    
      <p>Calculadora</p>

       <div className="Visor">
      
       <p >{count} </p>

      </div>

      <div className="Contenedor-B">
      
      <button onButtonClick={handleButtonPress} content="7">
        7
      </button>

      <button onButtonClick={handleButtonPress}  content="8">
        8
      </button>
      <button onButtonClick={handleButtonPress} content="9">
        9
      </button>
      <button onButtonClick={handleButtonPress} content="/" type="operator" >
        /
      </button>

      </div>

      <div className="Contenedor-B">

      <button onButtonClick={handleButtonPress} content="4">
        4
      </button>
      <button onButtonClick={handleButtonPress}  content="5">
        5
      </button>
      <button onButtonClick={handleButtonPress}  content="6">
        6
      </button>
      <button type="operator" onButtonClick={handleButtonPress}  content="x">
        x
      </button>

      </div>
      
      <div className="Contenedor-B">
      <button onButtonClick={handleButtonPress}   content="1">
        1
      </button>
      <button onButtonClick={handleButtonPress}  content="2">
        2
      </button>
      <button onButtonClick={handleButtonPress}  content="3">
        3
      </button>
      <button  ontype="operator" ButtonClick={handleButtonPress}  content="+">
        +
      </button>

      </div>

      <div className="Contenedor-B">

      <button onButtonClick={handleButtonPress}  content=".">
        .
      </button>
      <button onButtonClick={handleButtonPress}  content="0">
        0
      </button>
      <button type="operator" onButtonClick={handleButtonPress}  content="=">
        =
      </button>
      <button type="operator" onButtonClick={handleButtonPress}  content="-">
        -
      </button>

      </div>

      <div className="Contenedor-B">
        <button onButtonClick={handleButtonPress} type="function"  content="CLEAR"></button>
      </div>


    </div>
    
    
  );



  
  
}

       


export default (App)