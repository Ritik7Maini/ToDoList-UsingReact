import { useState } from 'react';

function Header({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input.trim());
      setInput('');
    }
  };

  return (
    <header>
      <div className="header-title">
        <img src="./src/assets/header.png" alt="Header Icon" className="header-icon" />
        <h1>My To-Do List</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </header>
  );
}

export default Header;
