import './FilterBar.css'
 
function FilterBar({ filter, setFilter, searchTerm, setSearchTerm, onClearCompleted, hasCompleted, categoryFilter, setCategoryFilter }) {
  return (
    <div className="filter-bar">
      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button
            className="clear-search"
            onClick={() => setSearchTerm('')}
          >
            ✕
          </button>
        )}
      </div>
 
      <div className="filter-section">
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
            onClick={() => setFilter('active')}
          >
            Active
          </button>
          <button
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>
 
        <div className="category-filter">
          <select
            className="category-select-filter"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">All Categories</option>
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
      </div>
 
      {hasCompleted && (
        <button className="clear-completed-btn" onClick={onClearCompleted}>
          Clear Completed
        </button>
      )}
    </div>
  )
}
 
export default FilterBar
 