import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import type { Todo } from "./types/todo";
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (title: string) => {
      const id=Math.floor(Math.random() * 1000);
      setTodos([...todos, { id, title, completed: false }]);
  };

  return (
    <main className="max-w-5xl mx-auto p-8">
      <AddTodo onAddTodo={addTodoHandler} />
      <TodoList todos={todos} />
    </main>
  );
}

export default App;
