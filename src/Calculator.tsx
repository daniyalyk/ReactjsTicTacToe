import React, {useRef, useState} from 'react';
import "./Calculator.css"
import ReactDOM from 'react-dom';
import {Button} from "reactstrap";

export const Calculator=() => {
    const [currentValue, setcurrentValue]= useState("");
    const[arrayIterator, setarrayIterator] = useState(0);
    const [calculation, setCalculation]= useState("");


    const onNumberClick=(e:any)=>
    {

    }

    const onOperatorClick=(e:any)=>
    {

    }

    return (
        <div>
            <h1> Calculator </h1>
            <Button disabled={false} outline color={"danger"} size="lg" block >{calculation}</Button>
            <div className="grid_calculator">
                <Button outline color={"secondary"}  value="(" >(</Button>
                <Button outline color={"secondary"}  value=")" >)</Button>
                <Button outline color={"secondary"}  value="%" >%</Button>
                <Button outline color={"secondary"}  value="AC" >AC</Button>

                <Button outline color={"secondary"} onClick={onNumberClick} value="7" >7</Button>
                <Button outline color={"secondary"} onClick={onNumberClick} value="8" >8</Button>
                <Button outline color={"secondary"} onClick={onNumberClick} value="9" >9</Button>
                <Button outline color={"secondary"} onClick={onOperatorClick} value="/">÷</Button>

                <Button outline color={"secondary"} onClick={onNumberClick} value="4" >4</Button>
                <Button outline color={"secondary"} onClick={onNumberClick} value="5" >5</Button>
                <Button outline color={"secondary"} onClick={onNumberClick} value="6" >6</Button>
                <Button outline color={"secondary"} onClick={onOperatorClick} value="*" >x</Button>

                <Button outline color={"secondary"} onClick={onNumberClick} value="1" >1</Button>
                <Button outline color={"secondary"} onClick={onNumberClick} value="2" >2</Button>
                <Button outline color={"secondary"} onClick={onNumberClick} value="3" >3</Button>
                <Button outline color={"secondary"} onClick={onOperatorClick} value="-" >-</Button>


                <Button outline color={"secondary"} value="0" >0</Button>
                <Button outline color={"secondary"} onClick={onNumberClick} value=".">.</Button>
                <Button outline color={"primary"} value="=" >=</Button>
                <Button outline color={"secondary"} onClick={onOperatorClick} value="+" >+</Button><br/>
            </div>
        </div>


    );
}
