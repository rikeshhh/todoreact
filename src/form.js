import React from 'react'
function form(value,setvalue,getValue,disValue) {

    return (
    <div>
    <form onSubmit={getValue}>
        <input onChange={getValue} setvalue={setvalue}></input>
        <button onClick={disValue}>Submit</button>
    </form>
    </div>
  )
}

export default form