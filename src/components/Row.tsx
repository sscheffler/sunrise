import { Todo } from "../types";

type TodoProps = {
  todo: Todo,
  deleteTodo: (id: string) => void,
  completeTodo: (id: string) => void,
}

const Row = ( {todo: {id, task, completed}, deleteTodo, completeTodo } : TodoProps) => (
  <div>
    <p>{task}</p>
    <button aria-label = "Delete todo item" onClick={() => deleteTodo(id)}>x</button>
    <input type="checkbox" checked={completed} onChange={() => completeTodo(id)}/>  
  </div>

);

export default Row;