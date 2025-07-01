import { useState, useEffect } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './index.css';

function App() {
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem('my-todos');
    return stored ? JSON.parse(stored) : [];
  });

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem('my-todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (text.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const updateTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
    setEditingId(null);
  };

  return (
    <div className="app">
      <Header addTodo={addTodo} />
      <ToDoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editingId={editingId}
        setEditingId={setEditingId}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
