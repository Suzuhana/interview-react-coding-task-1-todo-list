import { useState } from "react";
import "./styles.css";

interface ITodo {
  description: string;
  done?: boolean;
}

export default function App() {
  const [inputText, setInputText] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  return (
    <div className="App">
      <h1>To-do List</h1>
      <label htmlFor="to-do">To-do stuff: </label>
      <input
        id="to-do"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button
        disabled={inputText.length === 0}
        onClick={() => {
          if (inputText.length > 0) {
            setTodos([...todos, { description: inputText, done: false }]);
            setInputText("");
          }
        }}
      >
        Save
      </button>

      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <div style={{ display: "inline-block" }}>
                {todo.done ? (
                  <del>{todo.description}</del>
                ) : (
                  <div>{todo.description}</div>
                )}
              </div>
              <button
                onClick={() => {
                  const items = [...todos];
                  const item = { ...items[index] };
                  item.done = true;
                  items[index] = item;
                  setTodos(items);
                }}
              >
                mark as done
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
