import { useState, useContext } from 'react'
import type { NextPage } from 'next'
import Films from '../components/Films'
import AddFilm from '../components/AddFilm'
import FilmProvider from '../components/MyContext'

const Home: NextPage = () => {
  return <FilmProvider>
    <Films  />
    <AddFilm  />
  </FilmProvider>
}

export default Home
