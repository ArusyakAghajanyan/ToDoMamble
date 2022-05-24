import React from 'react'
import './toDoItem.css'


export default function ToDoItem({item,modalStatus,onChange}) {
    return (
        <div className="todoitem">
           <label id="check"  htmlFor="">
           <input type="checkbox" checked={item.isCompleted} onChange={(e)=> {
           onChange({
               ...item,
               isCompleted:e.target.checked,
           })
           }}/>
            {item.text}
            
           </label>          
        </div>
    )
}
