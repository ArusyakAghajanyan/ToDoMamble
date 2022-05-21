import React from 'react'
import './toDoItem.css'


export default function ToDoItem({item}) {
    return (
        <div className="todoitem">
           <label id="check"  htmlFor="">
           <input type="checkbox" />
            Identifying areas for modification in existing programs.
            <button className="closeX">x</button>
           </label>          
        </div>
    )
}
