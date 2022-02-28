import { useState } from "react"

export default ({players})=>{


    const totalPlayers=players.length;

    const totalPoints=players.reduce((total,player)=>{
        return total+player.score;
    },0);


    return(
        <article className="players_points">
        <h3>Players: <span> {totalPlayers}</span></h3>
        <h3>Total Points: <span>{totalPoints}</span></h3>
    </article>
    );

    


  

}