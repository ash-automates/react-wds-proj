import { useState } from "react";
import "./index.css";

function App() {
  let [newItem, setNewItem] = useState("");
  let [todos, setTodos] = useState([]);

  let handleSubmit = (e) => {
    e.preventDefault();
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setNewItem("");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul>
        {todos.map((todo) => {
          return (
            <>
              <li id={todo.id}>
                <label>
                  <input type="checkbox" />
                  {todo.title}{" "}
                </label>
                <button className="btn btn-danger">Delete</button>
              </li>
              <br />
            </>
          );
        })}

        <li>
          <label>
            <input type="checkbox" />
            Item 2{" "}
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}

export default App;
