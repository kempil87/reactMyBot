import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Task } from './components/Task';

const taskData = [
  {
    id: 1,
    name: "Составление документов",
    status: 0,
    author: "Parus"
  },
  {
    id: 2,
    name: "Составление документов2",
    status: 0,
    author: "Parus"
  },
  {
    id: 3,
    name: "Кирбиш",
    status: 0,
    author: "Parus"
  },
  {
    id: 4,
    name: "Составление документов 3223424",
    status: 1,
    author: "Parus"
  },
  {
    id: 5,
    name: "Составление документов 123123",
    status: 1,
    author: "Parus"
  },
]

function App() {
 const[task, setTask] = useState(taskData);

 const deleteTask = (id) =>{
   setTask(task.filter((t) => t.id !== id))
 }

  const createTask=() =>{
    const newTask = {
      id: task.length + 1,
      name: "Новая задача",
      status: 1,
      author: "Parus"
    }

    setTask([...task, newTask])
  }

 const changeTask = (id) =>{
   setTask(task.map((i) => i.id === id ? 
   {...i, status: i.status === 0 ? 1 : 0}
   : i))
}

  return (
    <div className="App">

      <Header/>

      <div onClick={()=> createTask()} className="btn">Создать Задачу</div>

      {task.map((item) =>(
        <Task dT={(id) => deleteTask(id)} chT={(id) => changeTask(id)} key={item.id} id={item.id} name={item.name} status={item.status} author={item.author}/>
      ))}
      
    </div>
  );
}

export default App;
