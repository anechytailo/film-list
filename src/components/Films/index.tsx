import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import clsx from 'clsx'; // assign a class with condition `clsx(false && styles.li)`
import { filmState } from '../../recoil/atoms/filmsAtom';
import { filmsCountSelector } from '../../recoil/selectors/filmsCountSelector';
import styles from './FilmsList.module.scss';

const Films = () => {
  // const filmListApi = useRecoilValueLoadable(getFilms).contents;
  // console.log(filmListApi);
  const [films, updateList] = useRecoilState(filmState);
  const count = useRecoilValue(filmsCountSelector);
  const fetchFilms = async () => {
    try {
      const response = await fetch('http://localhost:3000/films.json');
      const data = await response.json();
      updateList(data.films);
    } catch (e) {
      console.error('ERROR GET /events', e);
    }
  };
  useEffect(() => {
    fetchFilms();
  }, []);

  const deleteFilm = (i: number) => {
    updateList(films.filter((_, index: number) => i !== index));
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
      <h1 className={styles.h1}>Films to Watch {count}</h1>
      <ul>
        {films.map((item, index: number) => (
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
