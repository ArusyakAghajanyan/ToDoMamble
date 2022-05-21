
import './App.css';
import AddItem from './components/AddItem';
import ToDoList from './components/ToDoList';
import {useState} from 'react'


function App() {
  const [todo, setTodo]=useState([
    {
      id:Math.random(),
      text: "Learn Js",
      isCompleted:"true"

    }
  ]);

  return (
    <div className="App">
      <AddItem />
      <ToDoList  todo={todo}/>
    </div>
  );
}

export default App;
