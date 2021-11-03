import { FC, useState } from 'react'
type Props = { addFilm: (t: string) => void }

const AddFilm: FC<Props> = ({ addFilm }) => {
  const [item, setItem] = useState('')
  return <>
      <input type="text" value={item} onChange={(e)=>setItem(e.target.value)}/>
      <button title="Add a Film" onClick={()=>addFilm(item)}>Add a Film</button>
    </>
};

export default AddFilm;