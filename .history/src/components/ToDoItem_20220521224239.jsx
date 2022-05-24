import React from 'react'
import './toDoItem.css'


export default function ToDoItem({item,onDelete}) {
    return (
        <div className="todoitem">
           <label id="check"  htmlFor="">
           <input type="checkbox" />
            {item.text}
            <button className="closeX" onClick={|9}>x</button>
           </label>          
        </div>
    )
}
