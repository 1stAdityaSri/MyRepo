import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { use, useEffect, useState } from 'react';
const { v4: uuidv4 } = require('uuid');



function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [confirmId, setConfirmId] = useState(null);
  const [showFinished, setshowFinished] = useState(false);

  const toggleFinish  = () => {
    setshowFinished(!showFinished);
  }

  useEffect(() => {
    let todoString=localStorage.getItem("todos")
    if (todoString) {
      let todos=JSON.parse(localStorage.getItem("todos"))
      setTodos(todos);
    }
  }, []);

  const saveTols=(params)=>{
    localStorage.setItem("todos",JSON.stringify(todos)); 
  }

  const handleEdit = (e,id) => {
     let t = todos.findIndex(item => item.id === id);
       setTodo(todos[t].todo);
       let newTodos = todos.filter(item => item.id !== id);
       setTodos(newTodos);
       saveTols();
  };

  const handleDelete = (id) => {
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    setConfirmId(null); // Hide confirmation after delete
    saveTols();
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
    // console.log("Input changed:", e.target.value);

  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isComplete: false }]);
    setTodo("");
    console.log(todos);
    saveTols();
  };

  const handleCheckboxChange = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos);
    saveTols();
  }

  return (
    <>

      <Navbar />
      <div className="container p-4 m-4 rounded-md bg-violet-500 min-h-[80vh]">
        <div className='addtodo'>
          <h2>Add a todo</h2>

          <input onChange={handleChange} type="text" value={todo} className='input' placeholder='Add a todo' />
        <button onClick={handleAdd} disabled={todo.length === 0} className='btn'>Add</button>
          {/* //data enter ho rha hai */}
        </div>
         <input type="checkbox" onChange={toggleFinish} checked={showFinished}/>Show finished todos
        <br />
        <h2 className="">your todo</h2>

        <div className="todos">
          {todos.length === 0 && <div className="text-white">No todos found</div>}
          {todos.map(item =>
            (showFinished || !item.isComplete) && <div key={item.id} className="todo flex justify-around">                                     {/* single todo */}
              <input name={item.id} onChange={handleCheckboxChange} type="checkbox" value={item.isComplete} />
              <div className={`text-white ${item.isComplete ? "line-through" : ""}`}>{item.todo}</div>
              <div className="button">
                <button onClick={(e) => handleEdit(e,item.id)} className=''>Edit</button>
                {confirmId === item.id ? (
                  <>
                    <button onClick={() => handleDelete(item.id)} className='btn'>Yes</button>
                    <button onClick={() => setConfirmId(null)} className='btn'>No</button>
                  </>
                ) : (
                  <button onClick={() => setConfirmId(item.id)} className='btn'>Delete</button>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default App;
