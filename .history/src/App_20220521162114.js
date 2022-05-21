
import './App.css';
import AddItem from './components/AddItem';
import ToDoList from './components/ToDoList';
import {useState} from 'react'


function App() {
  const [todo, setTodo]=useState([
    {
      id:Math.random(),
      text: "Learn Js",
      isCompleted:"false"
    }
  ]);

  return (
    <div className="App">
      <AddItem onAdd={(text)=>{
        setTodo([...todo,{
          id:Math.random(),
          tex
        }])
      }}/>
      <ToDoList  todo={todo}/>
    </div>
  );
}

export default App;
