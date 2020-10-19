import React, {useEffect, useState, useContext} from "react";
import ReactDom from "react-dom";
import {ThemeContext} from "./context";



export const Temp2  = () => {
    const [timer, setTimer]= useState<string>("");
    const colors = useContext(ThemeContext);


    useEffect(() => {
        window.setInterval(()=>{
            setTimer(Date().substring(0,25))
        },1000)

    },[]);
    const element = (

        <div>
            <h1>Time is: </h1>
            <h2 style={{ color: colors.blue}}> {timer}  </h2>
        </div>
    );
    return element;
    // {new Date().toLocaleTimeString()}
}
//(Temp2, 1000);

const colors = {
    blue: "#03619c",
    yellow: "#8c8f03",
    red: "#9c0312"
};

export const ColorContext = React.createContext(colors.blue);