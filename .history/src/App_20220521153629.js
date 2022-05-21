
import './App.css';
import AddItem from './components/AddItem';
import ToDoList from './components/ToDoList';
import {useState} from 'react'

function App() {
  const [todo, setTo]
  return (
    <div className="App">
      <AddItem />
      <ToDoList />
    </div>
  );
}

export default App;
