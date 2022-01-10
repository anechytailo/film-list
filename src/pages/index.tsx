import { useState } from 'react';
import type { NextPage } from 'next';
import Films from '../components/Films';
import AddFilm from '../components/AddFilm';

const Home: NextPage = () => {
  const [filmList, setFilms] = useState<string[]>(['film1', 'film2']);
  const addFilm = (film: string) => setFilms([...filmList, film]);
  return (
    <>
      <Films films={filmList} updateList={(t: string[]) => setFilms(t)} />
      <AddFilm addFilm={addFilm} />
    </>
  );
};

export default Home;
