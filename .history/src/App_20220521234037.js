
import './App.css';
import AddItem from './components/AddItem';
import ToDoList from './components/ToDoList';
import {useState,useEffect(() => {
  effect
  return () => {
    cleanup
  }
}, [input])} from 'react'


function App() {
  const [todo, setTodo]=useState([
    {
      id:Math.random(),
      text: "Learn Js",
      isCompleted:"false"
    }
  ]);
useEffect(() => {
  let todos;
  let storageData = localStorage.getItem("todos");
  if(storageData !== "undefined"){
    todos = JSON.parse(storageData);
  } 
  if(todos) setTodo(todos);
}, [])
useEffect(() => {
 if(todo.length >=0) localStorage.setItem("todos",JSON.stringify(todo))
  
}, [todo])
  return (
    <div className="App">
      <AddItem onAdd={(text)=>{
        setTodo([{
          id:Math.random(),
          text:text,
          isCompleted:"false"
        },...todo])
      }}/>
      <ToDoList  
      todo={todo}
      />
    </div>
  );
}

export default App;
