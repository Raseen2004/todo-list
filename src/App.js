import { useState } from "react";
import React from "react";
import AddTodo from "./component/AddTodo";
import TodoItem from "./component/TodoItem";

function App() {
  const [todo, setTodo] = useState([]);

  const getItem = (item) => {
    setTodo((prevState) => {
      return [...prevState, item]
    })
  }

  const getCompleted = (id) => {
    setTodo((prevState) => {
      return prevState.filter((item, index) => {
        return index !== id;
      }
    )})
  };

  return (
    <div className="flex flex-col my-24 mx-auto rounded-3xl max-w-[350px] min-h-[400px] p-5 bg-white text-[#28887b]">
      <AddTodo item={getItem} />
      {todo && todo.map((todo, index) => (
        <TodoItem id={index} item={todo} completed={getCompleted} />
      ))}
    </div>
  );
}

export default App;
