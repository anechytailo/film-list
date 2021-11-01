import { FC, useState } from 'react'
type Props = { addTodo: (t: string) => void }

const AddTodo: FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('')
  return <>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
      <button title="Add Todo" onClick={()=>addTodo(text)}/>
    </>
};

export default AddTodo;