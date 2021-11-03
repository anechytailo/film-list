import { FC } from 'react'
type Props = { films: string[], changeTodos: (item: string[]) => void }

const Films: FC<Props> = ({ films, changeTodos }) => {
  return <ul>{films.map((item,index) => <li key={index}>{item}</li>)}</ul>
};

export default Films;