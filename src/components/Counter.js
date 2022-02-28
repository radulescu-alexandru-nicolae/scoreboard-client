import React from "react";
export default ({index,score,scoreChange})=>{



    return(

        <section className="increas-decrees" >
        <p className="minus" onClick={()=>scoreChange(index,-1)}>-</p>
        <h1>{score}</h1>
        <p className="plus" onClick={()=>scoreChange(index,1)}>+</p>
    </section>
    );
}