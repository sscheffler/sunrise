import { Todo } from "../types";

type TodoProps = {
  todo: Todo
  deleteTodo: (id: string) => void
  completeTodo: (id: string) => void
}

const Row = ( {todo: {id, task, completed}, deleteTodo, completeTodo } : TodoProps) => (
  <div className={`
  flex w-full p-4 mb-2 justify-between items-center
  ${completed? 'bg-gray-400': 'bg-green-300'}
  `}>
    <p className={
      `ml-2 text-xl font-sans font-medium
      ${completed? 'text-white line-through': 'text-gray-700'}
      `}>
        {task}
    </p>
    <div className="w-1/6 flex justify-between items-center mr-2">
      <button className="h-7 w-7 flex justify-center items-center bg-red-500 text-white font-bold rounded" aria-label = "Delete todo item" onClick={() => deleteTodo(id)}>x</button>
      <input className="form-checkbox h-7 w-7" type="checkbox" checked={completed} onChange={() => completeTodo(id)}/>  
    </div>
    
  </div>

);

export default Row;