import React from 'react'
import { useDispatch } from 'react-redux'

import { toggleTodo, removeTodo } from '../actions'

export default function TodoItem ({ title, completed, id }) {
  const dispatch = useDispatch()

  function handleToggle () {
    dispatch(toggleTodo(id))
  }

  function handleRemove () {
    dispatch(removeTodo(id))
  }

  return (
    <div className='container d-flex justify-content-between mt-4 ' >
      <input type="checkbox" checked={completed} onChange={handleToggle} />
      {title}
      <button class="btn btn-dark"  onClick={handleRemove}>x</button>
    </div>
  )
}
