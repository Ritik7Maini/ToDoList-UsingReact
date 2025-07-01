import { useState } from 'react';

function ToDoItem({ todo, deleteTodo, toggleComplete, editingId, setEditingId, updateTodo }) {
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editingId === todo.id) {
      updateTodo(todo.id, editText);
    } else {
      setEditingId(todo.id);
    }
  };

  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {editingId === todo.id ? (
        <input value={editText} onChange={(e) => setEditText(e.target.value)} />
      ) : (
        <span>{todo.text}</span>
      )}
      <button onClick={() => toggleComplete(todo.id)}>✔</button>
      <button onClick={handleEdit}>{editingId === todo.id ? 'Save' : 'Edit'}</button>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </li>
  );
}

export default ToDoItem;
