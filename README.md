
# 📋 To-Do App

A modern, feature-rich task management application built with React and Vite. Stay organized and productive with an intuitive interface and powerful features.

**🌐 Live Demo:** [https://menu-makers.github.io/To-Do-app/](https://menu-makers.github.io/To-Do-app/)

## ✨ Features

### 📝 **Task Management**
- ➕ Add new tasks with ease
- ✏️ Edit existing tasks inline
- ✅ Mark tasks as complete/incomplete
- 🗑️ Delete tasks with confirmation dialog
- 🔍 Search through your tasks

### 🏷️ **Organization**
- **8 Categories**: General, Work, Personal, Shopping, Health, Finance, Education, Home
- **3 Priority Levels**: Low, Medium, High (with color coding)
- **Due Dates**: Set and track task deadlines
- **Overdue Detection**: Automatic highlighting of overdue tasks

### 🎛️ **Filtering & Views**
- **Status Filters**: All, Active, Completed tasks
- **Category Filtering**: Filter by specific categories
- **Search Function**: Find tasks by text content
- **Clear Completed**: Bulk remove completed tasks

### 🎨 **User Experience**
- **Modern Design**: Beautiful gradient UI with smooth animations
- **Responsive Layout**: Works perfectly on all devices
- **Dark/Light Theme**: Automatic theme adaptation
- **Statistics Dashboard**: Track total, active, and completed tasks
- **Confirmation Dialogs**: Prevent accidental task deletion
- **Local Storage**: Your tasks persist between sessions

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Menu-Makers/To-Do-app.git
   cd To-Do-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 🛠️ Built With

- **React 19** - UI framework
- **Vite** - Build tool and development server
- **CSS3** - Modern styling with CSS Grid & Flexbox
- **JavaScript ES6+** - Modern JavaScript features
- **GitHub Pages** - Deployment platform

## 📁 Project Structure

```
src/
├── components/
│   ├── TodoForm.jsx          # Add new tasks
│   ├── TodoList.jsx          # Display task list
│   ├── TodoItem.jsx          # Individual task component
│   ├── FilterBar.jsx         # Search and filter controls
│   ├── ConfirmDialog.jsx     # Delete confirmation modal
│   └── *.css                 # Component-specific styles
├── App.jsx                   # Main application component
├── App.css                   # Global application styles
├── index.css                 # Base styles and CSS variables
└── main.jsx                  # Application entry point
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🎯 Key Features in Detail

### Smart Date Handling
- Fixed timezone issues for accurate date display
- Local timezone date parsing to prevent day shifts
- Proper overdue calculation with time normalization

### Enhanced Delete Confirmation
- Custom modal instead of browser alert
- Shows task name in confirmation message
- Smooth animations with theme-matched styling
- Click outside to cancel functionality

### Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions
- Optimized typography scaling

### Performance Optimizations
- Component-level state management
- Efficient re-rendering with proper key props
- Local storage for data persistence
- Fast development with Vite's HMR

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Authors

- **Menu-Makers** - *Initial work* - [GitHub Profile](https://github.com/Menu-Makers)

## 🙏 Acknowledgments

- Inspired by modern task management applications
- Built with React best practices and modern web standards
- Icons and emojis for enhanced visual experience

---

**📱 Try it now:** [https://menu-makers.github.io/To-Do-app/](https://menu-makers.github.io/To-Do-app/)
