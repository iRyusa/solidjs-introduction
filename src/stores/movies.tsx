import { createStore } from "solid-js/store"
import { createEffect } from "solid-js"
import type { Movie } from "../types/movie"

const FAVORITES_KEY = "favorites"

const loadFavorites = (): Movie[] => {
	try {
		const stored = localStorage.getItem(FAVORITES_KEY)
		if (!stored) return []

		const parsed = JSON.parse(stored)

		if (!Array.isArray(parsed)) {
			console.warn("Invalid favorites data in localStorage, expected array")
			return []
		}

		return parsed.filter((item) => item && typeof item.imdbID === "string")
	} catch (error) {
		console.error("Failed to load favorites from localStorage:", error)
		return []
	}
}

const saveFavorites = (movies: Movie[]): void => {
	try {
		localStorage.setItem(FAVORITES_KEY, JSON.stringify(movies))
	} catch (error) {
		console.error("Failed to save favorites to localStorage:", error)
	}
}

const [favoritesMovies, setFavoritesMovies] = createStore<Movie[]>(
	loadFavorites(),
)

createEffect(() => {
	saveFavorites(favoritesMovies)
})

const isFavorite = (item: Movie): boolean =>
	!!favoritesMovies.find((m) => m.imdbID === item.imdbID)

const toggleFavorite = (item: Movie): void => {
	if (isFavorite(item)) {
		setFavoritesMovies(favoritesMovies.filter((m) => m.imdbID !== item.imdbID))
	} else {
		setFavoritesMovies([item, ...favoritesMovies])
	}
}

const setFavorites = (movies: Movie[]): void => {
	setFavoritesMovies(movies)
}

export { favoritesMovies, setFavorites, isFavorite, toggleFavorite }
