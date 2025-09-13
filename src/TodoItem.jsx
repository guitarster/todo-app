function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li>
      <div className="todo-text">
        <input
          onChange={() => toggleTodo(todo.id)}
          checked={todo.done}
          type="checkbox"
        ></input>
        <span className={todo.done === true ? "done" : ""}>{todo.text}</span>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>Löschen</button>
    </li>
  );
}

export default TodoItem;
