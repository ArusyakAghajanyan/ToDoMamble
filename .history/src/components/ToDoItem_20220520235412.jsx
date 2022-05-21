import React from 'react'

export default function ToDoItem() {
    return (
        <div>
           <label htmlFor="">
           <input type="checkbox" />
            Identifying areas for modification in existing programs.
            <button className="close">x</button>
           </label>
            <hr />
        </div>
    )
}
