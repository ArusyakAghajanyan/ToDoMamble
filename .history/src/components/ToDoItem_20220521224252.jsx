import React from 'react'
import './toDoItem.css'


export default function ToDoItem({item,onDelete}) {
    return (
        <div className="todoitem">
           <label id="check"  htmlFor="">
           <input type="checkbox" />
            {item.text}
            <button className="closeX" onClick={()=>{
                
            }}>x</button>
           </label>          
        </div>
    )
}
