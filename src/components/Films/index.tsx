import { FC, useState } from 'react';
import styles from './FilmsList.module.scss';
import clsx from 'clsx'; // assign a class with condition `clsx(false && styles.li)`

type Props = { films: string[]; updateList: (item: string[]) => void };

const Films: FC<Props> = ({ films, updateList }) => {
  const deleteFilm = (i: number) => {
    updateList(films.filter((_, index) => i !== index));
  };
  const [editText, setEditText] = useState({});
  const handleEdit = (e: any) => {
    setEditText({
      ...editText,
      [e.target.name]: e.target.value,
    });
  };
  const editFilm = (i: number) => {
    const tempFilms = [...films];
    // @ts-ignore
    tempFilms[i] = editText[i];
    updateList(tempFilms);
  };

  const inputStyle = { marginLeft: '15px' };
  const inputStylePlus = { fontStyle: 'italic' };
  const testInlineStyle = { ...inputStyle, ...inputStylePlus };

  return (
    <>
      <h1 className={styles.h1}>Films to Watch</h1>
      <ul>
        {films.map((item, index) => (
          <li key={index} className={clsx(true && styles.li)}>
            {item}
            <input
              type='text'
              placeholder='edit'
              name={`${index}`}
              // @ts-ignore
              value={editText.index}
              onChange={(e) => handleEdit(e)}
              style={testInlineStyle}
            />
            <span onClick={() => editFilm(index)} className={styles.editCTA}>
              {'\u2705'}
            </span>
            <span onClick={() => deleteFilm(index)}>{'\u274C'}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Films;
