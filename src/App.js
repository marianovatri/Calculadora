import React, { useState } from 'react';

import './App.css';




const App = () => {


  const [value, setValue] = useState("0");
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
      setValue(value + ".");
      return;
    }

    if (content > 0) {
      if (value.includes(Number)) return;
      if (value == 0){
        setValue("" + content);
        return;
      } else {
        setValue (value + content)
      return;
    }
    }

    if (content === "+") {
        if (operator !== null) {
          if (operator === "+") {
            setMemory(memory + parseFloat(value));
          } else if (operator === "-") {
            setMemory (memory - parseFloat(value));
          } else if (operator === "x") {
            setMemory(memory * parseFloat(value));
          } else if (operator === "/") {
            setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("");
      setOperator("+");
      return;
    }

    if (content === "-") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "-") {
          setMemory (memory - parseFloat(value));
        } else if (operator === "x") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "/") {
          setMemory(memory / parseFloat(value));
      }
    } else {
      setMemory(parseFloat(value));
    }
    setValue("");
    setOperator("-");
    return;
  }


  if (content === "/") {
    if (operator !== null) {
      if (operator === "+") {
        setMemory(memory + parseFloat(value));
      } else if (operator === "-") {
        setMemory (memory - parseFloat(value));
      } else if (operator === "x") {
        setMemory(memory * parseFloat(value));
      } else if (operator === "/") {
        setMemory(memory / parseFloat(value));
    }
    } else {
    setMemory(parseFloat(value));
  }
  setValue("");
  setOperator("/");
  return;
  }

  if (content === "x") {
    if (operator !== null) {
      if (operator === "+") {
        setMemory(memory + parseFloat(value));
      } else if (operator === "-") {
        setMemory (memory - parseFloat(value));
      } else if (operator === "x") {
        setMemory(memory * parseFloat(value));
      } else if (operator === "/") {
        setMemory(memory / parseFloat(value));
    }
    } else {
    setMemory(parseFloat(value));
  }
  setValue("");
  setOperator("x");
  return;
  }

  if (content === "=") {
    if (!operator) return;
  
    if(operator === "+") {
      setValue((memory + parseFloat(value)).toString());
    } else if (operator === "-") {
      setValue((memory - parseFloat(value)).toString());
    } else if (operator === "x") {
      setValue((memory * parseFloat(value)).toString());
    } else if (operator === "/") {
      setValue((memory / parseFloat(value)).toString());
    }
    setMemory(null);
    setOperator(null);
    return;
  }

    if (value[value.length - 1] === ".") {
      setValue(value + content);
    } else {
      setValue(parseFloat(num + content).toString());
    }  
  }
  return (
     
          

    <div className="cont-1">

      <div>
      <p>Calculadora</p>
      </div>

       <div className="Visor">
      
       <p>{value} </p>

      </div>
      
      <div className="rows">
      
      <button onClick={handleButtonPress(7)}>
        7
      </button>

      <button onClick={handleButtonPress(8)}>
        8
      </button>
      <button onClick={handleButtonPress(9)} >
        9
      </button>
      <button onClick={handleButtonPress("/")}  >
        /
      </button>

      </div>

      <div className="rows">

      <button onClick={handleButtonPress(4)} >
        4
      </button>
      <button onClick={handleButtonPress(5)}  >
        5
      </button>
      <button onClick={handleButtonPress(6)}  >
        6
      </button>
      <button  onClick={handleButtonPress("x")}  >
        x
      </button>

      </div>
      
      <div className="rows">
        
      <button onClick={handleButtonPress(1)}   >
        1
      </button>

      {<button onClick={handleButtonPress(2)}  >
        2
      </button>}
      
      <button onClick={handleButtonPress(3)}  >
        3
      </button>
      <button   onClick={handleButtonPress("+")}  >
        +
      </button>

      </div>

      <div className="rows">

      <button onClick={handleButtonPress(".")}  >
         .
      </button>
      <button onClick={handleButtonPress(0)}  >
        0
      </button>
      <button  onClick={handleButtonPress("=")}  >
        =
      </button>
      <button  onClick={handleButtonPress("-")}  >
        -
      </button>

      </div>

      <div className="rows">
        <button className="CLEAR" onClick={handleButtonPress("CLEAR")} >CLEAR</button>
      </div>
      </div>
    
  ); 
}



export default (App);