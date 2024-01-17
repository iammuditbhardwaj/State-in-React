import { useState } from "react";

export default function Ludo() {
   let [moves,setMoves] = useState({blue : 0, red : 0, yellow : 0, green : 0});

   let updateFunction = () => {
    moves += 1;
    setMoves(moves);
    console.log(moves)
   }
    return (
        <div>
            <h3>Welcome to the Game : Ludo </h3>
            <p>BLUE MOVES : {moves.blue}</p>
            <button style={{backgroundColor : "blue"}} onClick={updateFunction} >+1</button>
            <p>RED MOVES :  {moves.red}</p>
            <button style={{backgroundColor : "red"}}>+1</button>
            <p>YELLOW MOVES :  {moves.yellow}</p>
            <button style={{backgroundColor : "yellow"}}>+1</button>
            <p>GREEN MOVES :  {moves.green}</p>
            <button style={{backgroundColor : "green"}}>+1</button>
        </div>
    )
}