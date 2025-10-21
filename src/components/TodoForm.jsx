/* write a code for ToDoForm*/

import { useState } from 'react'
import './TodoForm.css'
 
function TodoForm({ onAdd }) {
  const [text, setText] = useState('')
  const [priority, setPriority] = useState('medium')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('general')
 
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      onAdd({ text, priority, dueDate, category })
      setText('')
      setPriority('medium')
      setDueDate('')
      setCategory('general')
    }
  }
 
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="todo-input"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
      </div>
     
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            className="category-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="general">📋 General</option>
            <option value="work">💼 Work</option>
            <option value="personal">👤 Personal</option>
            <option value="shopping">🛒 Shopping</option>
            <option value="health">❤️ Health</option>
            <option value="finance">💰 Finance</option>
            <option value="education">📚 Education</option>
            <option value="home">🏠 Home</option>
          </select>
        </div>
 
        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            className="priority-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
 
        <div className="form-group">
          <label htmlFor="dueDate">Due Date</label>
          <input
            type="date"
            id="dueDate"
            className="date-input"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
 
        <button type="submit" className="add-button">
          <span>+</span>
          Add Task
        </button>
      </div>
    </form>
  )
}
 
export default TodoForm