import React, { useState } from 'react'
import Todo from '../components/todo'

const Form = () => {
  const [todo, setTodo] = useState('')
  const [cantidad, setCantidad] = useState(0)
  const [todos, setTodos] = useState([
    {todo: 'Manzana', cantidad: 4},
    {todo: 'Gaseosa', cantidad: 5},
    {todo: 'Jugo', cantidad: 6}
  ])
  const handleChange = e => setTodo(e.target.value)
  const handleChangeCantidad = e => setCantidad(e.target.value)
  const handleClick = e => {
    if (todo.trim() === '') {
      alert('el campo no puede estar vacio')
      return
    }
    if (cantidad.trim() === '' ||  isNaN(Number(cantidad)) ) {
      alert('el campo debe ser un numero')
      return
    }
    setTodos([...todos, {todo: todo, cantidad: cantidad}])
  }

  const deleteTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <>
    <form onSubmit={e=>e.preventDefault()}>
      <label>Agregar tarea</label><br/>
        <input type="text" name="todo" onChange={handleChange} />
        <input type="text" name="cantidad" onChange={handleChangeCantidad} />
      <button onClick={handleClick}>Agregar</button>
    </form>
    {
      todos.map((value, index) => (
        <Todo key={index} todo={value.todo} cantidad={value.cantidad} index={index} deleteTodo={deleteTodo} />
      ))
    }
    </>
  )
}
export default Form
