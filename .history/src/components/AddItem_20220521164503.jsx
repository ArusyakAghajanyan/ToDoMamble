import {React, useState, useEffect, useRef} from 'react'


export default function AddItem({onAdd}) {
    const [text, setText] = useState("");
    const inputText = useRef(0);
    let validText = "";
    useEffect(() => {
        inputText.current.addEventListener("keyup",(e)=>{
            let id=setTimeout(()=>{
            validText = e.target.value;
            if(validText)
            })
        })
    }, [])
  
    return (

      <form onSubmit={(e)=>{
          e.preventDefault();
          onAdd(text)
      }}>
            <label htmlFor="inputText"> Task           
            
            </label>
      <br/>
            <input id="inputText" type="text" value={text} placeholder="Write here" maxlength="54"
            onChange={(e)=>{
            setText(e.target.value) 
            }}/>
            <button>Add</button>
            </form>
       
    )
}
