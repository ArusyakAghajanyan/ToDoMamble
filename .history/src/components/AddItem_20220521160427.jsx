import {React,useState} from 'react'


export default function AddItem() {
    const [text, setText] = useState("");
    return (

      <form action="">
            <label htmlFor="inputText"> Task           
            
            </label>
      <br/>
            <input id="inputText" type="text" value={text} placeholder="Write here" 
            onChange={(e)=>{
            setText e.target.value
            }}/>
            <button >Add</button>
            </form>
       
    )
}
