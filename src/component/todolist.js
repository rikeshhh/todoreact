import React from 'react'
import Todo from './todo'
import "../App.css"
function todolist({todos,setTodos}) {
  return (
    <div>
     <div>
      <ul>
        {todos.map((todo,index)=>
             <Todo key={todo.id} index={index} text={todo.text} todo={todo} todos={todos} setTodos={setTodos}  />
        )}
      </ul>
    </div>
    </div>
  )
}

export default todolist