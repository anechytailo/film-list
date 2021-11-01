import { FC } from 'react'
type Props = { todos: string[], changeTodos: (t: string[]) => void }

const Todos: FC<Props> = ({ todos, changeTodos }) => {
  return <ul>{todos.map((t,index) => <li key={index}>{t}</li>)}</ul>
};

export default Todos;