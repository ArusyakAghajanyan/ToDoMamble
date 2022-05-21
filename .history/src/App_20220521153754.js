
import './App.css';
import AddItem from './components/AddItem';
import ToDoList from './components/ToDoList';
import {useState} from 'react'

function App() {
  const [todo, setTodo]=useState([]);

  return (
    <div className="App">
      <AddItem />
      <ToDoList  const{}/>
    </div>
  );
}

export default App;
