import { selector } from 'recoil';
import { filmState } from '../atoms/filmsAtom';

export const filmsCountSelector = selector({
  key: 'filmsCountSelector', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const films = get(filmState);

    return films.length;
  },
});
