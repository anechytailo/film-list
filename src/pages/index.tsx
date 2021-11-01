import { useState } from 'react'
import type { NextPage } from 'next'
import Todos from '../components/Todos'
import AddTodo from '../components/AddTodo';

const Home: NextPage = () => {
  const [todos, setTodos] = useState<string[]>(['film1', 'film2']);
  const addTodo = (todoItem: string) => setTodos([...todos, todoItem]);
  return <>
    <Todos todos={todos} changeTodos={(t: string[]) => setTodos(t)} />
  </>
}

export default Home
