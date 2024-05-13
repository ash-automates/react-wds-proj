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

  let handleToggle = (id, completed_state) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: completed_state };
        }
        return todo;
      });
    });
  };

  let handleDelete = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => {
        return todo.id !== id;
      });
    });
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
                  <input
                    type="checkbox"
                    onChange={(e) => handleToggle(todo.id, e.target.checked)}
                    checked={todo.completed}
                  />
                  {todo.title}{" "}
                </label>
                <button
                  className="btn btn-danger"
                  onClick={(e) => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </li>
              <br />
            </>
          );
        })}
      </ul>
    </>
  );
}

export default App;
