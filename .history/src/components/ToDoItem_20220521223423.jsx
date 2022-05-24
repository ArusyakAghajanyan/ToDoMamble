import React from 'react'
import './toDoItem.css'


export default function ToDoItem({item}) {
    return (
        <div className="todoitem">
           <label id="check"  htmlFor="">
           <input type="checkbox" />
            {item.text}
            <button className="closeX" onClick={onDele}>x</button>
           </label>          
        </div>
    )
}
