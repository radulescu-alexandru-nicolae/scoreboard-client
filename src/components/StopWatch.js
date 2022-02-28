import { useEffect, useState } from "react"

export default ()=>{
   

    let [isRunning,setRunning]=useState(false);
    let [elapsedTime,setElapsedTime]=useState(0);

    let[previousTime,setPreviousTime]=useState(0);


    let intervalId;
     

    function toggle() {
        setRunning(!isRunning);
        if(!isRunning){
            document.querySelector('.start-stop').textContent="Stop";
        document.querySelector('.start-stop').style.background="white"
        document.querySelector('.start-stop').style.color="black";
        }else{
            document.querySelector('.start-stop').textContent="Start";
            document.querySelector('.start-stop').style.background="#550bcc"
            document.querySelector('.start-stop').style.color="white";
        }

    }
 
    useEffect(()=>{


        intervalId=setInterval(()=>tick(),100);


        return ()=>{

             clearInterval(intervalId);
        }

    },[isRunning]);



    let handleStopWatch=(()=>{


          setRunning(prev=>!prev);


          if(!isRunning){

               setPreviousTime(Date.now());
          }
    })

let resetTime=(e)=>{


    setElapsedTime(0);


 
    
}







    let tick=()=>{


         if(isRunning){


            const now=Date.now();
         
            setPreviousTime(now);
            setElapsedTime(prev=>prev+(now-previousTime));
         }
    }


     

    return(
        <article className="timer">
        <section className="stopwatch">
            <h3>STOPWATCH</h3>
            <h1 className="count">{Math.floor(elapsedTime/1000)}</h1>
        </section>
        <section className="buttons">
            <button className="start-stop" onClick={toggle}>Start</button>
            <button onClick={resetTime}>RESET</button>    
        </section>
    </article>

    );
}