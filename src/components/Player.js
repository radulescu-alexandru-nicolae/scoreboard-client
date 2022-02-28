import Counter from "./Counter"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from "@fortawesome/free-solid-svg-icons"
export default ({player,scoreChange,deletePlayer,mostPoints})=>{
  let crown=<FontAwesomeIcon icon={faCrown} color="#cecccc" />
  check();
  function check(){
    
    let playrWithMostPoints=mostPoints();
      if(playrWithMostPoints.id===player.id){
        
        crown=<FontAwesomeIcon icon={faCrown} color="rgb(242, 238, 0)" />
      }

  }
  

    return(


        <section className="persoana" >
        <section className="crown-delete">
         <i className="fa-solid fa-xmark" onClick={()=>deletePlayer(player.id)}></i>
     
        {crown}
         <h3 className="name">{player.name}</h3>
        </section>
     
     
      <Counter index={player.id+1} score={player.score} scoreChange={scoreChange} />
    </section>
    )
}