import { FC, useState } from 'react';
type Props = { addFilm: (t: string) => void };
import styles from './AddFilm.module.scss'
import { createUseStyles } from 'react-jss';

const AddFilm: FC<Props> = ({ addFilm }) => {
  const [inputText, setInputText] = useState('');
  const handleAdd = () => {
    addFilm(inputText);
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
