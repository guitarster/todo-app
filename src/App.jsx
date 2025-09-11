import { useState } from "react";
import "./App.css";

function App() {
  const [newTodo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function addToDo() {
    setTodos([...todos, { id: Date.now(), text: newTodo, done: false }]);
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }
      })
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <h1>Meine ToDos</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="ToDo eingeben..."
      ></input>
      <button onClick={() => addToDo()}>Hinzufügen</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.done === true ? "done" : ""}>
            <input
              onChange={() => toggleTodo(todo.id)}
              checked={todo.done}
              type="checkbox"
            ></input>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Löschen</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
