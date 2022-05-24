import {React, useState, useEffect, useRef} from 'react'
import './addItem.css'

export default function AddItem({onAdd}) {
    const [text, setText] = useState("");
    const[errorMes,setErrorMes] = useState("");
    const inputText = useRef(0);
    let validText = "";
    useEffect(() => {
        inputText.current.addEventListener("keyup",(e)=>{
            let id=setTimeout(()=>{
            validText = e.target.value;
            if(validText.length >= 54 ){
             setErrorMes("Task content can contain max 54 characters.")
            } else {
                setErrorMes("");
                setText(validText);
            }
            },1000);
            return () => clearTimeout(id)
        })
    }, [text])
  
    return (

      <form 
      className="formTask" 
      onSubmit={(e)=>{
          e.preventDefault();
          if(errorMes==="" && text !=="") onAdd(text);
          if(errorMes==="") setText("");
      }}>           
       <div className="">
            <label className="taskLabel" htmlFor="inputText"> Task         
            </label>    
            <input 
            id="inputText" 
            type="text" 
            style={errorMes ? {borderColor: 'red'} : {borderColor:'#FFCD04'}}
            ref= {inputText}
             value={text} 
             placeholder="Write here" 
            onChange={(e)=>{
            setText(e.target.value) 
            }}/>
            <p>{errorMes}</p>
            </div>
            <button className="addbut">Add</button>
           
                       
            
         </form>
       
    )
}
