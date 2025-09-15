import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

function App() {
  const [newTodo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (newTodo === "") {
      return;
    }
    setTodos([...todos, { id: Date.now(), text: newTodo, done: false }]);
    setTodo("");
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        todo.id === id ? { ...todo, done: !todo.done } : todo;
      })
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="app">
      <h1>Meine Todos</h1>
      <TodoInput newTodo={newTodo} setTodo={setTodo} addToDo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
