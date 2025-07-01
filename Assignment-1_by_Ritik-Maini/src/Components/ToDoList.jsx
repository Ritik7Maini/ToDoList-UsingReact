import ToDoItem from './ToDoItem';

function ToDoList({ todos, ...handlers }) {
  return (
    <ul>
      {todos.map(todo => (
        <ToDoItem key={todo.id} todo={todo} {...handlers} />
      ))}
    </ul>
  );
}

export default ToDoList;
