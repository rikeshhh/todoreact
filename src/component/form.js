import React from 'react'

function form({setInputText,setTodos,todos,inputText}) {
    const inputTextHandler = (e)=>{
        setInputText(e.target.value);
    }
function submitTodoHandler(e) {
    e.preventDefault();
    setTodos([
        ...todos,
        {text:inputText,id:Date.now()},
    ]);
setInputText("");
}
    return (
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" />
        <button  type="submit" onClick={submitTodoHandler}>
        <i className="fa-solid fa-plus"></i>
        </button>
        
      </form>  )
}

export default form