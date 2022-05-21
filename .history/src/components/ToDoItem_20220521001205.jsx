import React from 'react'
import './toDoItem.css'


export default function ToDoItem() {
    return (
        <div>
           <label htmlFor="">
           <input id="check" type="checkbox" />
            Identifying areas for modification in existing programs.
            <button className="closeX">x</button>
           </label>
          
        </div>
    )
}
