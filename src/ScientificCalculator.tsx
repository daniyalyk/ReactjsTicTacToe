import React, {useRef, useState} from 'react';
import "./Calculator.css"
import ReactDOM from 'react-dom';
import {Button, ButtonGroup} from "reactstrap";

export const ScientificCalculator=() => {
    const [currentValue, setcurrentValue]= useState("");
    const[arrayIterator, setarrayIterator] = useState(0);
    const [calculation, setCalculation]= useState("");

    const [rSelected, setRSelected] = useState(0);

    const onNumberClick=(e:any)=>
    {

    }

    const onOperatorClick=(e:any)=>
    {

    }

    return (
        <div>
            <h1> Scientific Calculator </h1>
            <Button disabled={false} outline color={"danger"} size="lg" block >{calculation}</Button>
            <div className="grid_scientificCalculator">
                    <Button outline color="secondary" onClick={() => setRSelected(parseInt("1"))} active={rSelected === 1}>Rad</Button>
                    <Button outline color="secondary" onClick={() => setRSelected(parseInt("2"))} active={rSelected === 2}>Deg</Button>
                    <Button outline color={"secondary"}  value="x!" style={{marginRight:"10px"}} >x!</Button>
                <Button outline color={"secondary"}  value="(" >(</Button>
                <Button outline color={"secondary"}  value=")" >)</Button>
                <Button outline color={"secondary"}  value="%" >%</Button>
                <Button outline color={"secondary"}  value="AC" >AC</Button>

                    <Button outline color={"secondary"} onClick={onNumberClick} value="lnv" >lnv</Button>
                    <Button outline color={"secondary"} onClick={onNumberClick} value="sin" >sin</Button>
                    <Button outline color={"secondary"} onClick={onNumberClick} value="ln" style={{marginRight:"10px"}} >ln</Button>
                <Button outline color={"secondary"} onClick={onNumberClick} value="7" >7</Button>
                <Button outline color={"secondary"} onClick={onNumberClick} value="8" >8</Button>
                <Button outline color={"secondary"} onClick={onNumberClick} value="9" >9</Button>
                <Button outline color={"secondary"} onClick={onOperatorClick} value="/">÷</Button>

                    <Button outline color={"secondary"} onClick={onNumberClick} value="pi" >π</Button>
                    <Button outline color={"secondary"} onClick={onNumberClick} value="cos" >cos</Button>
                    <Button outline color={"secondary"} onClick={onNumberClick} value="log" style={{marginRight:"10px"}} >log</Button>
                <Button outline color={"secondary"} onClick={onNumberClick} value="4" >4</Button>
                <Button outline color={"secondary"} onClick={onNumberClick} value="5" >5</Button>
                <Button outline color={"secondary"} onClick={onNumberClick} value="6" >6</Button>
                <Button outline color={"secondary"} onClick={onOperatorClick} value="*" >x</Button>

                    <Button outline color={"secondary"} onClick={onNumberClick} value="e" >e</Button>
                    <Button outline color={"secondary"} onClick={onNumberClick} value="tan" >tan</Button>
                    <Button outline color={"secondary"} onClick={onNumberClick} value="squareroot" style={{marginRight:"10px"}} >√</Button>
                <Button outline color={"secondary"} onClick={onNumberClick} value="1" >1</Button>
                <Button outline color={"secondary"} onClick={onNumberClick} value="2" >2</Button>
                <Button outline color={"secondary"} onClick={onNumberClick} value="3" >3</Button>
                <Button outline color={"secondary"} onClick={onOperatorClick} value="-" >-</Button>

                    <Button outline color={"secondary"} onClick={onNumberClick} value="ANS" >ANS</Button>
                    <Button outline color={"secondary"} onClick={onNumberClick} value="EXP" >EXP</Button>
                    <Button outline color={"secondary"} onClick={onNumberClick} value="x^y" style={{marginRight:"10px"}} >x^y</Button>
                <Button outline color={"secondary"} value="0" >0</Button>
                <Button outline color={"secondary"} onClick={onNumberClick} value=".">.</Button>
                <Button outline color={"primary"} value="=" >=</Button>
                <Button outline color={"secondary"} onClick={onOperatorClick} value="+" >+</Button><br/>
            </div>
        </div>


    );
}
