
import './App.css';
import AddItem from './components/AddItem';
import ToDoList from './components/ToDoList'
import {useState}

function App() {
  return (
    <div className="App">
      <AddItem />
      <ToDoList />
    </div>
  );
}

export default App;
