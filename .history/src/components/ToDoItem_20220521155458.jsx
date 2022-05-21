import React from 'react'
import './toDoItem.css'


export default function ToDoItem({item}) {
    return (
        <div className="todoitem">
           <label id="check"  htmlFor="">
           <input type="checkbox" />
            
            <button className="closeX">x</button>
           </label>          
        </div>
    )
}
