import React, { useState } from "react";

interface TodoFormProps {
  addTodo: AddTodo;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form>
      <input
        type="text"
        value={newTodo}
        onChange={handleChange}
        placeholder="Task Name"
      />
      <button type="submit" onClick={handleSubmit}>
        Add Task
      </button>
    </form>
  );
};
