import { FC, useContext, useState } from 'react';
import {useTasks} from '../MyContext';
type Props = {}

const AddFilm: FC<Props> = ({}) => {
  const { filmList, setFilms } = useTasks();
  const [inputText, setInputText] = useState('');
  const handleAdd = () => {
    addFilm(inputText);
    setInputText('');
  };
  const addFilm = (film: string) => setFilms([...filmList, film]);
  return <>
      <input type="text" placeholder="New Film" value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
      <button title="Add a Film" onClick={handleAdd}>Add a Film</button>
    </>
};

export default AddFilm;