import React, { useState } from 'react'

const App = () => {
  const [todoText,setTodoText] = useState('');

  const [incompleteTodos,setIncompleteTodos] = useState([
      "fist thing I have to do today",
      "Second thing I have to do today",
      "Third thing I have to do today"])

  const [completeTodos, setcompleteTodos] = useState([
      "What i have done First",
      "What I have done second", 
      "What I have done third"])
  const onChangeTodoText = (e) => setTodoText(e.target.value);
  
  const onClickAdd=()=>{
      if (todoText === "") return;
      const newTodos = [...incompleteTodos,todoText];
      setIncompleteTodos(newTodos);
  };
  
    return (
    <>
    <div className='input-area'>
        <input type="text" value={todoText} onChange={onChangeTodoText} placeholder='Write your task here!' />
        <button onClick={onClickAdd}>追加</button>
    </div>
    <div className='incomplete-area'>
        <p className='title'>Unfinished list</p>
        <ul>
            {incompleteTodos.map((todo) => {
                return(
                    <div key={todo} className='list-row'>
                    <li>{todo}</li>
                    <button>Completed</button>
                    <button>Delete</button>
                    </div>
                )
            })}
        </ul>
     </div>

     <div className='complete-area'>
        <p className='title'>Finished list</p>
        <ul>
               
            {completeTodos.map((todo) =>{
                return(
                    <div key={todo} className='list-row'>
                    <li>{todo}</li>
                    <button>Delete</button>
            </div>
                )
            })}
            
        </ul>
    </div>
    <div></div>
    </>
  )
}

export default App