import type { NextPage } from 'next';
import Films from '../components/Films';
import AddFilm from '../components/AddFilm';

const Home: NextPage = () => {
  return (
    <>
      <Films />
      <AddFilm />
    </>
  );
};

export default Home;
