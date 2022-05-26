import React from 'react'
import './toDoItem.css'


export default function ToDoItem({item,modalStatus,onChange}) {
    return (
        <div className="todoitem">
           <label id="check"  htmlFor="" 
           style={item.isCompleted ? {color:"#ACACAC"}:{color:"#666666"}
           >
           <input type="checkbox" checked={item.isCompleted} onChange={(e)=> {
           onChange({
               ...item,
               isCompleted:e.target.checked,
           })
           }}/>
            {item.text}
            
           </label>  
           <button className="todoitemDelete" onClick={() => {
            modalStatus(true,item)
            }}>x</button>        
        </div>
    )
}
