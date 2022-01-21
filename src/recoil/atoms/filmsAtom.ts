import { atom } from 'recoil';

export const filmState = atom({
  key: 'filmState',
  default: ['film1', 'film2'],
});
