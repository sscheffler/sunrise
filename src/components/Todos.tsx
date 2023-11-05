import { useState } from "react";
import Row from "./Row";
import { data } from "../todos";
import { Todo } from "../types";


const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>(data);

  const onDeleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const onCompleted = (id: string) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    }))
  }

  return (
    <section>
      {
        todos.map((todo: Todo) => (
          <Row key={todo.id} todo={todo} deleteTodo={onDeleteTodo} completeTodo={onCompleted} />
        ))}
    </section>
)}

export default Todos;