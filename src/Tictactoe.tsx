import React, {useEffect,useRef, useState, useContext} from "react";
import { Button } from 'reactstrap';

import './Tictactoe.css';

export const Tictactoe  = () => {
   // let currentPlayer:number=1;
    const player1= useRef<Array<any>>([]);
    const player2= useRef<Array<any>>([]);
    const board= useRef<Array<number>>([]);
    const [currentPlayer, setcurrentPlayer]= useState(1);
    const [turns, setTurns]= useState(0);
    const [announceWinner, setannounceWinner]= useState(true);
    const [noWinner, setnoWinner]= useState(true);
    const winningCombo= useRef<Array<number>>([]);

    const squareClicked = (e:any) => {
        if (turns < 10) {
            if (turns % 2 == 0) {
                e.target.color = "#606c82";
                e.target.style = "background-color: #606c82";
                e.target.disabled = true;
                e.target.innerText="O"
                player1.current.push(e.target.value);
                board.current[e.target.value] = 1;
                console.log(player1.current.length);
                // console.log(board);
            } else {
                e.target.color = "#606c82";
                e.target.style = "background-color: #606c82";
                e.target.disabled = true;
                e.target.innerText="X"
                console.log(player2.current);
                player2.current.push(e.target.value);
                board.current[e.target.value] = 2;
                console.log(player2.current);
                // console.log(board);
            }
            if (checkWinner(board.current, currentPlayer)) {
                setannounceWinner(false);
                //alert("Player " + currentPlayer + " is the WINNER! ");
                
                setTurns(10);
            }
            else {
                if (currentPlayer == 1)
                    setcurrentPlayer(2);
                else
                    setcurrentPlayer(1);

                setTurns(turns + 1);
            }
        }

        else
        {
            setnoWinner(false);
        }

    }

    const checkWinner = (board:Array<number>, current_player:number):boolean => {
        const winningCombinations= [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[3,6,9],[2,5,8],[1,5,9], [3,5,7]]
        for (let i=0;i<winningCombinations.length;i++)
        {
            let exists=0;
            for (let j=0; j<3;j++)
            {

                if (board[winningCombinations[i][j]]==current_player)
                    exists++
            }
            if (exists==3) {
                for (let j=0;j<3;j++)
                {
                    winningCombo.current.push(winningCombinations[i][j]);
                }
                return true;

            }
        }
        return false;

    }
    const restartGame=()=>
    {
        window.location.reload(false);
    }
    return (
        <div>
           <h1> Tic Tac Toe </h1>
           <div className="board">
                <button className="button" value={1}  onClick={squareClicked}>
                </button>
                <button className="button" value={2} onClick={squareClicked}>
                </button>
                <button className="button" value={3}  onClick={squareClicked}>
                </button>

                <button className="button" value={4} onClick={squareClicked}>
                </button>
                <button className="button" value={5} onClick={squareClicked}>
                </button>
                <button className="button" value={6} onClick={squareClicked}>
                </button>

                <button className="button" value={7} onClick={squareClicked}>
                </button>
                <button className="button" value={8} onClick={squareClicked}>
                </button>
                <button className="button" value={9} onClick={squareClicked}>
                </button>
        </div>
            <p style={{fontSize:"20px"}}> Player turn: {currentPlayer}</p>
            <p>
                <button className="button" disabled={true} style={{backgroundColor: "#606c82" , border: "2px solid #282c34"}} >O</button>
                <button className="button" disabled={true} style={{backgroundColor: "#606c82", border: "2px solid #282c34"}}>X</button>
            </p>

            <p hidden={announceWinner} style={{color:"red"}}>Player: {currentPlayer} is the Winner!</p>
            <p hidden={noWinner} style={{color:"red"}}>Game is a Draw!</p>
            <p>
                <button className="button button2" onClick={restartGame} >Restart</button>
            </p>
        </div>


    )

}