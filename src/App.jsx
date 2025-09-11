import { useState } from "react";
import "./App.css";

function App() {
  const [newTodo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function addToDo() {
    setTodos([...todos, { id: Date.now(), text: newTodo, done: false }]);
    setTodo("");
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      })
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="app">
      <h1>Meine Todos</h1>
      <div className="input">
        <input
          className="inputfield"
          type="text"
          value={newTodo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="ToDo eingeben..."
        ></input>
        <button onClick={() => addToDo()}>Hinzufügen</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className="todo-text">
              <input
                onChange={() => toggleTodo(todo.id)}
                checked={todo.done}
                type="checkbox"
              ></input>
              <span className={todo.done === true ? "done" : ""}>
                {todo.text}
              </span>
            </div>
            <button onClick={() => deleteTodo(todo.id)}>Löschen</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
