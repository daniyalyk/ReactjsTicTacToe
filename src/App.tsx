import React, { useState } from 'react';
import './App.css';
import {Temp} from "./Temp";
import {Temp2} from "./Temp2";
import ReactDom from 'react-dom'
import {Tictactoe} from "./Tictactoe";
import {Calculator} from "./Calculator";
import {ScientificCalculator} from "./ScientificCalculator";

export const App=()=> {
    const [windowSizeCalculator, setwindowSizeCalculator]= useState(window.innerWidth>700?true:false);

    const ResizeFunction= ()=>{
        if (window.innerWidth>700){
            setwindowSizeCalculator(true);}
        else
        {
            setwindowSizeCalculator(false);
        }
    };

    window.addEventListener("resize", ResizeFunction)
  const element = (
    <div className="App">
      <header className="App-header">
          {/*<Temp/>*/}
          {/*<Temp2/>*/}
          {/*<Tictactoe/>*/}

          {windowSizeCalculator? <ScientificCalculator/>:<Calculator/>}

      </header>
    </div>
  );

   // ReactDom.render(element, document.getElementById('root'));
    return element;


};
//setInterval(Temp2, 1000);