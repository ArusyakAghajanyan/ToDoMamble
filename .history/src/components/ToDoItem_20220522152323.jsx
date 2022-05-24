import React from 'react'
import './toDoItem.css'


export default function ToDoItem({item,modalStatus,onChange}) {
    return (
        <div className="todoitem">
           <label id="check"  htmlFor="">
           <input type="checkbox" checked={item.isCompleted} onChange={(e)=> {
           onChange({
               ...item,
               isCompleted:e.target.checked
           })
           }}/>
            {item.text}
            <button className="closeX" onClick={() => {
            modalStatus(true,item)
            }}>x</button>
           </label>          
        </div>
    )
}
