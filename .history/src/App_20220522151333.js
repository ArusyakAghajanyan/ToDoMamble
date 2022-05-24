
import './App.css';
import AddItem from './components/AddItem';
import ToDoList from './components/ToDoList';
import Confirm from './components/Confirm';
import {useState,useEffect} from 'react'


function App() {
  const [todo, setTodo]=useState([]);
  const [modal, setModal] = useState(false);
const [confirmStatus, setConfirmStatus] = useState(false);
  const [deleteItem, setDeletItem] = useState({});

  function modalStatus(status, item){
    console.log(status, item);
    setModal(status);
    setDeletItem(item);
 
  }
  function confirmDelete(status){
    console.log("deletestatus=", status);
    if(status === "no") {
      setConfirmStatus(false);
      setModal(false);
    }else if (status === "yes"){
      setConfirmStatus(true);
      setModal(false)
    }    
  }

  useEffect(()=>{
    console.log("confirmStatus=", confirmStatus);
    if(confirmStatus){
      setTodo(todo.filter(value => value.id !== deleteItem.id));
      setDeletItem({});
    }
    setConfirmStatus(false);
      console.log(modal);
 
  },[confirmStatus])
  
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
       { modal && <Confirm confirmDelete={confirmDelete} modalStatus={modalStatus}/>}
    </div>
  );
}

export default App;
