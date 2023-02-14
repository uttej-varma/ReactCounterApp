
import { useState, useEffect } from 'react';

function TimeCounter() {
  const [count, setCount] = useState(0);
  const [input,setInput]=useState("");
  const [message,setMessage]=useState("");
  const changeHandler=(value)=>{
    setInput(value);
    const regex=/^\d*$/g;
    if(regex.test(input))
    {
        setMessage("");
    }
    else{
       setInput("");
       setCount(0);
        setMessage("please give a valid input");
    }
  }
  const blurHandler=(code)=>{
    
    if(code===13)
    {
        const regex=/^\d*$/g;
        if(regex.test(input))
        {
            setCount(Math.floor(parseFloat(input)));
        
        }
       
    }
    else{
       
         setMessage("please give a valid input");
     }
   
    
  }
  
    useEffect(() => {
        setInterval(() => {
          setCount(prevCount => {
           return  prevCount - 1});
        }, 1000);
      }, []);
 
  

  return (
    <>
    <h3>Hi! I am a time counter</h3>
    <input type="text" id="timeCount" onChange={(e)=>{changeHandler(e.target.value)}} onKeyDown={(e)=>{blurHandler(e.keyCode)}} value={input} placeholder="enter the input"/>
        {count>=0?<div id="current-time">{count}</div>:<div id="current-time">0</div>}
        {message.length?<div>{message}</div>:null}
    </>
  );
}
export default TimeCounter;
