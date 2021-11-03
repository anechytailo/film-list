import { FC, useState } from 'react'
type Props = { addFilm: (t: string) => void }

const AddFilm: FC<Props> = ({ addFilm }) => {
  const [inputText, setInputText] = useState('');
  const handleAdd = () => {
    addFilm(inputText);
    setInputText('');
  }
  return <>
      <input type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
      <button title="Add a Film" onClick={handleAdd}>Add a Film</button>
    </>
};

export default AddFilm;