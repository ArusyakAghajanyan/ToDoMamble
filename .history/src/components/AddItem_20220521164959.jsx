import {React, useState, useEffect, useRef} from 'react'


export default function AddItem({onAdd}) {
    const [text, setText] = useState("");
    const[errorMes,setErrorMes] = useState("");
    const inputText = useRef(0);
    let validText = "";
    useEffect(() => {
        inputText.current.addEventListener("keyup",(e)=>{
            let id=setTimeout(()=>{
            validText = e.target.value;
            if(validText >=54 )(
             setErrorMes("Task content can contain max 54 characters.")
            )
            })
        })
    }, [text])
  
    return (

      <form onSubmit={(e)=>{
          e.preventDefault();
          errorMesonAdd(text)
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
