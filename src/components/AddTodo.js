import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTodo } from '../actions'

export default function AddTodo () {
  const dispatch = useDispatch()
  const [ input, setInput ] = useState('')

  function handleInput (e) {
    setInput(e.target.value)
  }

  function handleAdd () {
    if (input) {
      dispatch(addTodo(input))
      setInput('')
    }
  }

  return (
    <form onSubmit={e => { e.preventDefault(); handleAdd() }}>
      <input  className="form-control form-control-lg mt-4"
        type="text"
        placeholder="enter new task..."
        style={{ width: 350, height: 15 }}
        value={input}
        onChange={handleInput}
      />
      <input  class="btn btn-success w-50 mt-4"
      
        type="submit"
        disabled={!input}
        value="add"
      />
    </form>
  )
}
