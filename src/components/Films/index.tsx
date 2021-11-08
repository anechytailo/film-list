import { FC, useState } from 'react'
type Props = { films: string[], updateList: (item: string[]) => void }

const Films: FC<Props> = ({ films, updateList }) => {
  const deleteFilm = (i:number) => {
    updateList(films.filter((_,index) => i !== index));
  };
  const [editText, setEditText] = useState({});
  // @ts-ignore
  const handleEdit = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setEditText({
      ...editText,
      [e.target.name]: e.target.value
    });
    console.log(editText);
  };
  const editFilm = (i:number) => {
    // @ts-ignore
    films[i] = editText[i];
    updateList(films);
  };

  return <ul>{films.map((item,index) => 
    <li key={index}>
      {item}
      <input type="text" placeholder="edit"
            name={'' + index}
            // @ts-ignore
            value={editText.index} 
            onChange={(e)=>handleEdit(e)}/>

      <span onClick={() => editFilm(index)}>{'\u2705'}</span>
      <span onClick={() => deleteFilm(index)}>{'\u274C'}</span>
    </li>)
    }
    </ul>
};

export default Films; // євген ковальчук