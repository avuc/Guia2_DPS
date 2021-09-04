import React from 'react'
const Todo = ({todo, cantidad, index, deleteTodo}) => {
  return (
    <>
      <div className="list">
        <h3>{cantidad} - {todo}</h3>
      <button className="btn-delete" onClick={() => deleteTodo(index)}>x</button>
    </div>
    </>
  )
}
export default Todo
