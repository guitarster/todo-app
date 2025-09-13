function NoteInput({ newTodo, setTodo, addToDo }) {
  return (
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
  );
}

export default NoteInput;
