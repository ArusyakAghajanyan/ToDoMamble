import React from 'react';
import ToDoItem from './ToDoItem'
import './toDoList.css'
export default function ToDoList({todo,modalStatus,onChange}) {
    return (
        <div>
           {todo && todo.length > 0 ? todo.map(item=>{
               return (
<ToDoItem 
key={item.id} 
item = {item}
modalStatus={modalStatus}
onChange={onChange}
/>
               )
           }):
            <div className='listText'>
            <p >your life is a blank page. You write on it.</p>
            <p>So start by adding your tasks here.</p>
            </div>
        }
        </div>
    )
}
