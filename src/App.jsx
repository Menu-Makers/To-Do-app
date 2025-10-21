import { useState, useEffect } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import FilterBar from './components/FilterBar'

function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo) => {
    const newTodo = {
      id: Date.now(),
      text: todo.text,
      completed: false,
      priority: todo.priority || 'medium',
      dueDate: todo.dueDate || null,
      category: todo.category || 'general',
      createdAt: new Date().toISOString()
    }
    setTodos([newTodo, ...todos])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, ...updatedTodo } : todo
    ))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  // Filter todos based on status and search term
  const getFilteredTodos = () => {
    let filtered = todos

    // Apply status filter
    if (filter === 'active') {
      filtered = filtered.filter(todo => !todo.completed)
    } else if (filter === 'completed') {
      filtered = filtered.filter(todo => todo.completed)
    }

    // Apply category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(todo => (todo.category || 'general') === categoryFilter)
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(todo =>
        todo.text.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    return filtered
  }

  const filteredTodos = getFilteredTodos()
  const activeTodoCount = todos.filter(todo => !todo.completed).length
  const completedTodoCount = todos.filter(todo => todo.completed).length

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1 className="app-title">
            <span className="icon">✓</span>
            My Tasks
          </h1>
          <p className="app-subtitle">Stay organized and productive</p>
        </header>

        <div className="stats-bar">
          <div className="stat-card">
            <span className="stat-value">{todos.length}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat-card active">
            <span className="stat-value">{activeTodoCount}</span>
            <span className="stat-label">Active</span>
          </div>
          <div className="stat-card completed">
            <span className="stat-value">{completedTodoCount}</span>
            <span className="stat-label">Completed</span>
          </div>
        </div>

        <TodoForm onAdd={addTodo} />

        <FilterBar
          filter={filter}
          setFilter={setFilter}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          onClearCompleted={clearCompleted}
          hasCompleted={completedTodoCount > 0}
        />

        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />

        {filteredTodos.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">📝</div>
            <h3>No tasks found</h3>
            <p>
              {searchTerm
                ? 'Try a different search term'
                : filter === 'completed'
                ? 'No completed tasks yet'
                : filter === 'active'
                ? 'No active tasks. Great job!'
                : 'Add your first task to get started!'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
