import { TodoItem } from "../App"
import {IoClose} from 'react-icons/io5';

interface ListProps {
  todoItems:TodoItem[];
  setTodoItems: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  deleteTodoItem: (id: string) => void;
}


const List = ({ todoItems, setTodoItems, deleteTodoItem }: ListProps) => {
  return (
    <div>
      <article>
        <ul className="bg-gray-700 mx-5 rounded-lg mt-10">
          {todoItems.map(({id, itemText}) => (
              <li key={id} className="todo-list px-5 flex items-center justify-between border-b border-gray-600">
              <span className="text-white py-3 tracking-wider">
                {itemText}
              </span>
              <button className="text-xl" onClick={() => deleteTodoItem(id)}>
                <IoClose className="text-red-400"/>
              </button>
            </li>
          ))}
          <ul className="px-5 py-3 flex items-center justify-between">
                <li>
                  <p className="text-sm text-gray-400">{todoItems.length} items left</p>
                </li>
                <li>
                  <button className="text-sm text-gray-400" onClick={() => setTodoItems([])}>Clear List</button>
                </li>
              </ul>
        </ul>
      </article>
    </div>
  )
}

export default List