import {React, useState, useEffect, useRef} from 'react'


export default function AddItem({onAdd}) {
    const [text, setText] = useState("");
    const inputText = useRef(0);
    const useEffect(() => {
        input
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
