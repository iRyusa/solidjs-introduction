import type { Component } from 'solid-js'

import Hero from './ui/Hero'

import MovieList from './components/MovieList'
import H1 from './ui/H1'
import MovieFavorites from './components/MovieFavorites'

const App: Component = () => {
  return (
    <main class="text-gray-600 body-font">
      <div class="container px-5 py-12 mx-auto">
        <Hero title="🍿 Movie List">
          Listez vos films favoris, cette App est juste un prétexte vraiment
          bidon pour montrer comment faire une application en SolidJS.
        </Hero>
        <H1>⭐️ Mes films favoris !</H1>
        <MovieFavorites />
        <H1>🔎 Rerchercher un film</H1>
        <MovieList />
      </div>
    </main>
  )
}

export default App
