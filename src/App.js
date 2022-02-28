import { useEffect, useState } from "react";
import AddPlayerForm from "./components/AddPlayerForm";
import Header from "./components/Header";
import Player from "./components/Player";
import PlayerList from "./components/PlayerList";



export default ()=>{

let [playerList,setPlayrList]=useState([


  {
    name:"ASD",
    score:23,
    id:0
  },
{
  name:"ASDg",
  score:10,
  id:1
},
{
  name:"AcSD",
  score:15,
  id:2
},
{
  name:"ASDzxc",
  score:1,
  id:3
},
{
  name:"ASDzxc",
  score:1,
  id:4
},
{
  name:"zxjch",
  score:5,
  id:5
},
{
  name:"kzurt",
  score:58,
  id:6
},
{
  name:"ryh",
  score:39,
  id:7
},
{
  name:"xte",
  score:58,
  id:8
},
{

  name:"ury",
  score:59,
  id:9
}

]);




let prevPlayerId=playerList[playerList.length-1].id;
console.log(prevPlayerId);


function addPlayer(name){
  let player={
    name:name,
    score:0,
    id:prevPlayerId+1
  };


  setPlayrList(prev=>[...prev,player]);

  

}
function deletePlayer(id){
  setPlayrList(playerList.filter(e=>e.id!=id));
  console.log(playerList);
}



function scoreChange(id,points){
    // setPlayrList(playerList[id].score=score);


      id-=1;
     
     setPlayrList((prev)=>{


         const updatedPlayers=[...prev];

         const updatedPlayer={...updatedPlayers[id]};


         updatedPlayer.score+=points;


         updatedPlayers[id]=updatedPlayer;
         return updatedPlayers;
     })

}


function mostPoints(){

  // setPlayrList((prev)=>{
  //   const players=[...prev];
  //   // const max={...players[0]};

  //   console.log(players);
  // //   if(prev.score>max.score){
  // //     max=prev;
  // //   }
  //   // return max;
  // })

let max=playerList[0];
playerList.forEach(e=>{
  if(e.score>max.score){
    max=e;
  }
})
return max;
  
}
useEffect(()=>{
},[])




return(<>

      <Header players={playerList}></Header>
     <main>
{/* <PlayerList /> */}
<article className="container-persoane">
            {
                    
                    playerList.map((p,index)=><Player player={p} key={index} scoreChange={scoreChange} deletePlayer={deletePlayer} mostPoints={mostPoints}/>)

            }
    

    </article>

<AddPlayerForm addPlayer={addPlayer}/>
     </main>
  
     </>

)
}
