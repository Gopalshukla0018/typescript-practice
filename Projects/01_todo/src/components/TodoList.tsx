import { Button } from "@base-ui/react";
import { Card,  CardHeader } from "./ui/card";
import { Trash } from "lucide-react";
import type { Todo } from "@/types/todo";

type todoListProps = {
  todos: Todo[];
};

const TodoList: React.FC<todoListProps> = ({ todos }) => {
  return (
    <>
      <div className="my-8 gap-4 flex flex-col">
        {todos.map((todo) => (
          <Card key={todo.id} className="p-4 w-sm">
            <CardHeader className="flex justify-between items-center">
              <div>{todo.title}</div>
              <div className="flex items-center gap-2">
                <span>{todo.completed ? "✓" : "✗"}</span>
                <Button >
                  <Trash></Trash>
                </Button>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
};
export default TodoList;
