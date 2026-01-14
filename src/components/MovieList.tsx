import { createSignal, createResource, Show, For, Suspense } from "solid-js"

import { isFavorite, toggleFavorite } from "../stores/movies"

import Card from "../ui/Card"
import Search from "../ui/Search"

import type { Movie } from "../types/movie"
import EmptyBlock from "../ui/EmptyBlock"

const apiUrl = import.meta.env.VITE_BASE_API

const searchMovie = async (text: string): Promise<Movie[]> => {
	const response: { Error: string } | { Search: Movie[] } = await fetch(
		`${apiUrl}&s=${text}`,
	).then((r) => r.json())

	if ("Error" in response) return []

	return response.Search
}

export default function MovieList() {
	const [search, setSearch] = createSignal<string>(null)
	const [resource] = createResource(search, searchMovie)

	return (
		<>
			<Search onSearch={(searchText) => setSearch(searchText)} />
			<div class="flex flex-wrap">
				<Show
					when={search()}
					fallback={<EmptyBlock>Aucune recherche pour le moment !</EmptyBlock>}
				>
					<Suspense fallback={<div>Chargement...</div>}>
						<For
							each={resource()}
							fallback={<div>{`Aucune réponse pour "${search()}"`}</div>}
						>
							{(item) => (
								<Card
									title={item.Title}
									date={item.Year}
									img={item.Poster}
									isFavorite={isFavorite(item)}
									setFavorite={() => toggleFavorite(item)}
								/>
							)}
						</For>
					</Suspense>
				</Show>
			</div>
		</>
	)
}
