import { TodoItem } from "../App"
import {IoClose} from 'react-icons/io5';

interface ListProps {
  todoItems:TodoItem[];
}

const List = ({todoItems}: ListProps) => {
  return (
    <div>
      <article>
        <ul className="bg-gray-700 mx-5 rounded-lg mt-10">
          {todoItems.map(({id, itemText}) => (
            <ul className="todo-list px-5 flex items-center justify-between border-b border-gray-600">
              <li key={id} className=" text-white py-3 tracking-wider">
                {itemText}
              </li>
              <button className="text-xl">
                <IoClose className="text-red-400"/>
              </button>
            </ul>
            
          ))}
        </ul>
      </article>
    </div>
  )
}   

export default List