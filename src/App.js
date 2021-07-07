import React, { useState } from 'react';
import './App.css';




function App() {
  const [count, setCount] = useState("");
  
  const [resultado] = useState(false);
 
  
 
  return (
    
     <div>      

      <p>Calculadora</p>
       <div>
      
       <p >{count} </p>

      </div>
      
      <button onClick={() => setCount(count + "7" )}>
        7
      </button>


      <button onClick={() => setCount(count + "8")}>
        8
      </button>
      <button onClick={() => setCount(count + "9")}>
        9
      </button>
      <button onClick={() => setCount(count + "/")}>
        /
      </button>

      <div>

      <button onClick={() => setCount(count + "4")}>
        4
      </button>
      <button onClick={() => setCount(count + "5")}>
        5
      </button>
      <button onClick={() => setCount(count + "6")}>
        6
      </button>
      <button onClick={() => setCount(count + "x")}>
        x
      </button>

      </div>
      
      <div>
      <button onClick={() => setCount(count + "1")}>
        1
      </button>
      <button onClick={() => setCount(count + "2")}>
        2
      </button>
      <button onClick={() => setCount(count + "3")}>
        3
      </button>
      <button onClick={() => setCount(count + "+")}>
        +
      </button>

      </div>

      <div>

      <button onClick={() => setCount(count + ".")}>
        .
      </button>
      <button onClick={() => setCount(count + "0")}>
        0
      </button>
      <button onClick={() => setCount(count + "=")}>
        =
      </button>
      <button onClick={() => setCount(count + "-")}>
        -
      </button>

      </div>

      

    </div>
    
  );
  
}



 


export default (App)

