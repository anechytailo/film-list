import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { createUseStyles } from 'react-jss';
import { filmState } from '../../recoil/atoms/filmsAtom';
import styles from './AddFilm.module.scss';

const AddFilm = () => {
  const [films, setFilms] = useRecoilState(filmState);
  const [inputText, setInputText] = useState('');
  const handleAdd = () => {
    setFilms([...films, inputText]);
    setInputText('');
  };
  const stylesUse = createUseStyles({
    inputStyle: {
      margin: '0 15px',
      fontStyle: 'italic',
    },
  });
  const classes = stylesUse();

  return (
    <>
      <input
        type='text'
        placeholder='New Film'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className={classes.inputStyle}
      />
      <button title='Add a Film' onClick={handleAdd} className={styles.addCTA}>
        Add a Film
      </button>
    </>
  );
};

export default AddFilm;
