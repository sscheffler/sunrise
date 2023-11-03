import {useState, useEffect} from 'react';

import Logo from './components/Logo';
import Sunrise from './components/Sunrise';
import List from './components/List';
import {v4 as uuidv4} from 'uuid';

export type TodoItem = {  
  id: string;
  itemText: string;
};

const getArrayFromStorage = (id: string) => {
  let todoItems = localStorage.getItem(id);
  return todoItems ? JSON.parse(todoItems) : [];
}; 

const App = () => {
  const [newTodoItem, setNewTodoItem] = useState<string>('');
  const [todoItems, setTodoItems] = useState<TodoItem[]>(getArrayFromStorage("todoItems"));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault(); 
    const newItems = {
      id: uuidv4(),
      itemText: newTodoItem,
    }
    setTodoItems([newItems, ...todoItems]);
    setNewTodoItem('');
  }

  const deleteTodoItem = (id: string) => {
    setTodoItems(todoItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    console.log('useEffect called for todoItems'); 
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
  }, [todoItems]);

  return (
    <>
    <main>
      <Logo />
      <Sunrise />
        <form className='flex items-center justify-center mt-10 lg:mt-20' onSubmit={handleSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Enter your todo item' 
            className='py-2 px-5 rounded-lg bg-gray-700 text-white tracking-wide'
            autoComplete='off'
            value={newTodoItem}
            onChange={(e) => setNewTodoItem(e.target.value)}
            />
        </form>
        <List todoItems={todoItems} setTodoItems={setTodoItems} deleteTodoItem={deleteTodoItem}/>
    </main>
    </>
  );
}

export default App;
