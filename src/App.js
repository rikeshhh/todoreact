import React, {useState} from 'react'
import './App.css';
import Form from './component/form';
import Todolist from './component/todolist';
function App() {
    const [inputText,setInputText] = useState("");
    const [todos,setTodos] = useState([]);

  return (
 <div className='App'>
 <header>
<h1>To-Do-List</h1>
    </header>
    <Form setInputText={setInputText} setTodos={setTodos} todos={todos} inputText={inputText}></Form>
    <Todolist todos={todos} setTodos={setTodos} ></Todolist>
    </div>
  )
}

export default App