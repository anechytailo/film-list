import { FC } from 'react'
type Props = { films: string[], updateList: (item: string[]) => void }

const Films: FC<Props> = ({ films, updateList }) => {
  const delFilm = (i:number) => {
    updateList(films.filter((_,index) => i !== index));
  }
  return <ul>{films.map((item,index) => <li key={index} onClick={() => delFilm(index)}>{item}</li>)}</ul>
};

export default Films; // євген ковальчук