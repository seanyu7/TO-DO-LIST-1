import React, { useState } from 'react'

const App = () => {
  const [todoText,setTodoText] = useState('');

  {/*ここはTODOリストに追加するリストを増やすためのもの*/}
  const [incompleteTodos,setIncompleteTodos] = useState([
      "fist thing I have to do today",
      "Second thing I have to do today",
      "Third thing I have to do today"])

  {/*ここは今日すべきことで最初に表示すべきことを表示するためのところ*/}
  const [completeTodos, setcompleteTodos] = useState([
      "What I have done First",
      "What I have done second", 
      "What I have done third"])
  {/*クリックした際にTODOリストにリストを追加するときに使う関数*/}
  const onChangeTodoText = (e) => setTodoText(e.target.value);
  
  const onClickAdd=()=>{
      if (todoText === "") return;
      const newTodos = [...incompleteTodos,todoText];
      setIncompleteTodos(newTodos);
      setTodoText("");
  };

  const onClickDelete = (index) =>{
      const newTodos = [...incompleteTodos];
      newTodos.splice(index,1);
      setIncompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index,1);
    const newcompleteTodos = [...completeTodos,incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setcompleteTodos(newcompleteTodos);
  }

    return (
    <>
    <div className='input-area'>
        <input type="text" value={todoText} onChange={onChangeTodoText} placeholder='Write your task here!' />
        <button onClick={onClickAdd}>追加</button>
    </div>
    
    <div className='incomplete-area'>
        <p className='title'>Unfinished list</p>
        <ul>
            {incompleteTodos.map((todo, index) => {
                return(
                    <div key={todo} className='list-row'>
                    <li>{todo}</li>
                    <button onClick={()=> onClickComplete(index)}>Completed</button>
                    <button onClick={()=> onClickDelete(index)}>Delete</button>
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
                    <button>Return</button>
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