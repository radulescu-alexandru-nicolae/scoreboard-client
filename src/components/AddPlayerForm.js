import React, { useRef } from "react";
export default ({addPlayer})=>{
    
    let inputEl=useRef(null);







    
    let hadleClick=(e)=>{


         e.preventDefault();

         addPlayer(inputEl.current.value);



    }

    return(
        <article className="addPersoane">
        <article className="container-add-persoane">
            <input ref={inputEl} type="text" placeholder="Enter a player's name" ></input>
            <button onClick={hadleClick}>ADD PLAYER</button> 
        </article>
    </article>

    );
}