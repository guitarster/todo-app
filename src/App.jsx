import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import NoteInput from "./TodoInput";

function App() {
  const [newTodo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
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
      <NoteInput newTodo={newTodo} setTodo={setTodo} addToDo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
