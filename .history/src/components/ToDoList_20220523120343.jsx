import React from 'react';
import ToDoItem from './ToDoItem'

export default function ToDoList({todo,modalStatus,onChange}) {
    return (
        <div>
           {todo && todo.lenght>0 ? todo.map(item=>{
               return (
<ToDoItem 
key={item.id} 
item = {item}
modalStatus={modalStatus}
onChange={onChange}
/>
               )
           }):
            <>
            <p>your life is a blank page. You write on it.</p>
            <p>So start by adding your tasks here.</p>
            </>
        }
        </div>
    )
}
