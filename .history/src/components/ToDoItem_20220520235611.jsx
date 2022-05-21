import React from 'react'
import 'toDo'

export default function ToDoItem() {
    return (
        <div>
           <label htmlFor="">
           <input type="checkbox" />
            Identifying areas for modification in existing programs.
            <button className="closeX">x</button>
           </label>
            <hr />
        </div>
    )
}
