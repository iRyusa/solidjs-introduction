import { createSignal } from 'solid-js'
import { Movie } from '../types/movie'

let favortiesLocalstorage: Movie[] = []

try {
  favortiesLocalstorage = JSON.parse(localStorage['favorites'])
} catch {}

const [favoritesMovies, _setFavorites] = createSignal(favortiesLocalstorage)

const setFavorites = (args: Movie[]) => {
  localStorage['favorites'] = JSON.stringify(args)

  _setFavorites(args)
}

const isFavorite = (item: Movie) =>
  !!favoritesMovies().find((m) => m.imdbID === item.imdbID)

const toggleFavorite = (item: Movie) =>
  setFavorites(
    isFavorite(item)
      ? favoritesMovies().filter((m) => m.imdbID !== item.imdbID)
      : [item, ...favoritesMovies()]
  )

export { favoritesMovies, setFavorites, isFavorite, toggleFavorite }
