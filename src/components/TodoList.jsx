import TodoItem from './TodoItem'
import './TodoList.css'
 
function TodoList({ todos, onToggle, onDelete, onEdit }) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-icon">📝</p>
        <p className="empty-text">No tasks yet. Add one to get started!</p>
      </div>
    )
  }

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}
 
export default TodoList