import React, { useState } from "react";
import "./App.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import useFetch from "./useFetch";

const initialTodos: Array<Todo> = [
  { title: "Go to sleep", completed: false },
  { title: "Push up", completed: false },
  { title: "Eating", completed: false },
  { title: "React", completed: true },
  { title: "Nodejs", completed: false },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { title: newTodo, completed: false }]);
  };

  return (
    <React.Fragment>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </React.Fragment>
  );
}

export default App;
