import { FC, useState } from 'react'
import { useTasks } from '../MyContext';
type Props = { }

const Films: FC<Props> = ({}) => {
  const { filmList: films, setFilms } = useTasks();
  const updateList = (filmsList:string[]) => {
    setFilms(filmsList);
  };
  const deleteFilm = (i:number) => {
    updateList(films.filter((_,index) => i !== index));
  };
  const [editText, setEditText] = useState({});
  const handleEdit = (e: any) => {
    setEditText({
      ...editText,
      [e.target.name]: e.target.value
    });
  };
  const editFilm = (i:number) => {
    const tempFilms = [...films];
    tempFilms[i] = editText[i];
    updateList(tempFilms);
  };

  const filmItems = films.map((item, index) => 
    <li key={index}>
      {item}
      <input type="text" placeholder="edit"
            name={`${index}`}
            // @ts-ignore
            value={editText.index}
            onChange={(e)=>handleEdit(e)}/>

      <span onClick={() => editFilm(index)}>{'\u2705'}</span>
      <span onClick={() => deleteFilm(index)}>{'\u274C'}</span>
    </li>
  );

  return <ul>{filmItems}</ul>
};

export default Films; // євген ковальчук