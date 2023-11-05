import { useState, ChangeEvent, FormEvent } from "react";
import Row from "./Row";
import { Todo } from "../types";
import { AddTodo } from "./AddTodo";
import { v4 as uuidv4 } from 'uuid';


const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState<string>('');
  const todosLength = todos.length;
  const hasTodos = todosLength > 0;
  const remainingTodos = todos.filter(todo => !todo.completed).length;

  const onDeleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const onChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setTask(value);
  }

  const onAddTodo = (todo: Todo) => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    setTask('');
  }

  const onSubmitTodo = (e: FormEvent) => {
    e.preventDefault();
    const todo = {
      id: uuidv4(),
      task: task,
      completed: false
    }
    task && onAddTodo (todo);
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
    }));
  }

  return (
    <section className="w-10/12 sm:w-10/11 lg:w-1/2 max-w-2xl flex flex-col items-center">
      <AddTodo task={task} 
        onChange={onChange}
        onSubmitTodo={onSubmitTodo}
      />
      <div className="h-10"></div>
      {
        todos.map((todo: Todo) => (
          <Row 
          key={todo.id} 
          todo={todo} 
          deleteTodo={onDeleteTodo} 
          completeTodo={onCompleted} 
          />
        ))}
        {!hasTodos && <p className="mb-5 text-xl text-red-500 uppercase">No tasks, yay!</p>}
        {hasTodos && <p>{remainingTodos} remaining out of {todosLength} tasks</p>}
    </section>
)}

export default Todos;