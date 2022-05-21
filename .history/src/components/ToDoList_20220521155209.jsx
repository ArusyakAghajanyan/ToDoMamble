import React from 'react';
import ToDoItem from './ToDoItem'

export default function ToDoList({todo}) {
    return (
        <div>
           {todo ? todo.map(item=>{
               return (
<ToDoItem key={item.id} item = {/>
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
