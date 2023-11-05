import { ChangeEvent, FormEvent } from 'react';
import {ReactComponent as PlusIcon} from '../assets/svg/plus.svg';

type AddTodoProps = {
  task: string
  onChange: (e: ChangeEvent) => void
  onSubmitTodo: (e: FormEvent) => void
}

export const AddTodo = ({task, onChange, onSubmitTodo}: AddTodoProps) => (
  <form className="flex justify-between w-full" onSubmit={onSubmitTodo}>
    <input 
      className='flex-1 rounded shadow p-2 text-gray-dark mr-2'
      type="text" 
      name="task" 
      value={task} 
      onChange={onChange}/>
    <button type="submit" aria-label="Add todo item">
      <PlusIcon />
    </button>
</form>
)