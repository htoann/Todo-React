type Todo = {
  title: string;
  completed: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;
