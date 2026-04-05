import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState} from "react";

type AddTodoProps = {
  onAddTodo: (title: string) => void;
};

const AddTodo = ({ onAddTodo }: AddTodoProps) => {
  const [text, setText] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleClick} className="flex gap-2">
      <Input
        placeholder="Add a new todo..."
        className="w-fit"
        value={text}
        onChange={handleOnChange}
      />
      <Button type="submit">Add Todo</Button>
    </form>
  );
};

export default AddTodo;
