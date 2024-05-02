import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (state.some((item) => item.id === action.data.id)) {
        return state;
      } else {
        return [...state, { ...action.data, complete: false }];
      }

    case "EDIT":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, title: action.title };
        } else {
          return item;
        }
      });

    case "DELETE":
      return state.filter((item) => item.id !== action.id);

    case "RESET":
      return [];

    default:
      return state;
  }
};

const Todos = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [state, dispatch] = useReducer(reducer, []);

  const handleAdd = () => {
    if (!id || !title) return;
    dispatch({ type: "ADD", data: { id, title } });
    setId("");
    setTitle("");
  };

  return (
    <div className="container todos-container">
      <h1>Todos</h1>
      <div className="input-container">
        <input
          type="text"
          className="form-control"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="button-container d-flex mt-5">
        <button className="btn btn-primary" onClick={handleAdd}>
          Add Todo
        </button>
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "EDIT", id, title })}
        >
          Edit Todo
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch({ type: "DELETE", id })}
        >
          Delete Todo
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </div>
      <div className="todos-list">
        <h2>Todo List</h2>
        <ul className="list-group">
          {state.map((todo) => (
            <li key={todo.id} className="list-group-item">
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
