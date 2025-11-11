import { useState } from 'react'
import './TodoItem.css'
import ConfirmDialog from './ConfirmDialog'

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)
  const [editPriority, setEditPriority] = useState(todo.priority)
  const [editDueDate, setEditDueDate] = useState(todo.dueDate || '')
  const [editCategory, setEditCategory] = useState(todo.category || 'general')
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(todo.id, {
        text: editText,
        priority: editPriority,
        dueDate: editDueDate,
        category: editCategory
      })
      setIsEditing(false)
    }
  }

  const handleCancel = () => {
    setEditText(todo.text)
    setEditPriority(todo.priority)
    setEditDueDate(todo.dueDate || '')
    setEditCategory(todo.category || 'general')
    setIsEditing(false)
  }

  const handleDelete = () => {
    setShowDeleteDialog(true)
  }

  const confirmDelete = () => {
    onDelete(todo.id)
    setShowDeleteDialog(false)
  }

  const cancelDelete = () => {
    setShowDeleteDialog(false)
  }

  const formatDate = (dateString) => {
    if (!dateString) return null
    const [year, month, day] = dateString.split('-')
    const date = new Date(year, month - 1, day)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  const isOverdue = () => {
    if (!todo.dueDate || todo.completed) return false
    const [year, month, day] = todo.dueDate.split('-')
    const dueDate = new Date(year, month - 1, day)
    const today = new Date()
    today.setHours(0, 0, 0, 0) 
    return dueDate < today
  }

  const getCategoryIcon = (category) => {
    const icons = {
      general: '📋',
      work: '💼',
      personal: '👤',
      shopping: '🛒',
      health: '❤️',
      finance: '💰',
      education: '📚',
      home: '🏠'
    }
    return icons[category] || '📋'
  }

  const getCategoryLabel = (category) => {
    const labels = {
      general: 'General',
      work: 'Work',
      personal: 'Personal',
      shopping: 'Shopping',
      health: 'Health',
      finance: 'Finance',
      education: 'Education',
      home: 'Home'
    }
    return labels[category] || 'General'
  }

  if (isEditing) {
    return (
      <div className="todo-item editing">
        <input
          type="text"
          className="edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          autoFocus
        />
        <div className="edit-controls">
          <select
            className="edit-category"
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)}
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
          <select
            className="edit-priority"
            value={editPriority}
            onChange={(e) => setEditPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <input
            type="date"
            className="edit-date"
            value={editDueDate}
            onChange={(e) => setEditDueDate(e.target.value)}
          />
          <button className="save-btn" onClick={handleSave}>Save</button>
          <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    )
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''} priority-${todo.priority}`}>
      <div className="todo-checkbox">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          id={`todo-${todo.id}`}
        />
        <label htmlFor={`todo-${todo.id}`}></label>
      </div>

      <div className="todo-content">
        <div className="todo-text">{todo.text}</div>
        <div className="todo-meta">
          <span className={`category-badge ${todo.category || 'general'}`}>
            {getCategoryIcon(todo.category || 'general')}
            {getCategoryLabel(todo.category || 'general')}
          </span>
          <span className={`priority-badge ${todo.priority}`}>
            {todo.priority === 'high' ? '🔴' : todo.priority === 'medium' ? '🟡' : '🟢'}
            {todo.priority}
          </span>
          {todo.dueDate && (
            <span className={`due-date ${isOverdue() ? 'overdue' : ''}`}>
              📅 {formatDate(todo.dueDate)}
              {isOverdue() && ' (Overdue)'}
            </span>
          )}
        </div>
      </div>

      <div className="todo-actions">
        <button
          className="edit-btn"
          onClick={() => setIsEditing(true)}
          title="Edit task"
        >
          ✏️
        </button>
        <button
          className="delete-btn"
          onClick={handleDelete}
          title="Delete task"
        >
          🗑️
        </button>
      </div>

      <ConfirmDialog
        isOpen={showDeleteDialog}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        title="Delete Task"
        message={`Are you sure you want to delete "${todo.text}"? This action cannot be undone.`}
      />
    </div>
  )
}

export default TodoItem
