import React,{useState} from 'react'
import "../App.css"

function Todo({text,todos,todo,setTodos,index}) {
    const [readonly,setReadonly] = useState(true)
    const [updatedValue,setupdatedValue] = useState(
        todo?text:""
    )
    const deleteInput = ()=>{
        setTodos(todos.filter(el=>el.id!==todo.id))
    }
  
const updateInput = ()=>{
    setReadonly(false);

}
const saveHandler = ()=>{
    
   const newTodo = todos.map((el,key)=>{
        if(key===index){
            return {
                ...el,
                text:updatedValue
            }
        }
        return el;
      })
    setReadonly(true);
    setTodos(newTodo)
}

  return (
    <div className='delteInput'>
        <input value={updatedValue} onChange={(e)=>{
            setupdatedValue(e.target.value)
        }} readOnly={readonly} onBlur={saveHandler}/>
    <button onClick={updateInput}>
  Update
    </button>
   <button onClick={deleteInput}>
    Delete
    </button>
    </div>
  )
}

export default Todo