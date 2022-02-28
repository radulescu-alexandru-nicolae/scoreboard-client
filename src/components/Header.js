import StopWatch from "./StopWatch";
import Stats from "./Stats";
export default({players,title})=>{


    return(

        <header>
           <Stats players={players}/>
        <article className="title">
            <h1>{title}</h1>
        </article >
      <StopWatch/>
    </header>

    );
}