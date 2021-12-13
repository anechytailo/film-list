import { useState, createContext, useContext } from 'react';
// import { v4 as uuidv4 } from 'uuid';

export const FilmContext = createContext<any>({
  filmList: [],
  setFilms: () => {console.log('test-test');},
});
export const useTasks = () => useContext(FilmContext);

export default function FilmProvider({ children }) {
  const [filmList, setFilms] = useState<string[]>(['film1', 'film2']);

  return <FilmContext.Provider value={{ filmList, setFilms }}>{children}</FilmContext.Provider>;
}
