
import './App.css';
import AddItem from './components/AddItem';
import ToDoList from './components/ToDoList';
import {useState,useEffect} from 'react'


function App() {
  const [todo, setTodo]=useState([]);
  const [modal, setModal] = useState(false);
const [confirmStatus, setConfirmStatus] = useState(false);
  const [deleteItem, setDeletItem] = useState({});
  
useEffect(() => {
  let todos;
  let storageData = localStorage.getItem("todos");
  if(storageData !== "undefined"){
    todos = JSON.parse(storageData);
  } 
  if(todos) setTodo(todos);
}, [])

useEffect(() => {
 if(todo.length > 0) localStorage.setItem("todos",JSON.stringify(todo))
  
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
      modalStatus={modalStatus}
      />
    </div>
  );
}

export default App;
