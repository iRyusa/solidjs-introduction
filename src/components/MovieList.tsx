import { createSignal, createResource, Show, For } from 'solid-js'

import { isFavorite, toggleFavorite } from '../stores/movies'

import Card from '../ui/Card'
import Search from '../ui/Search'

import { Movie } from '../types/movie'

const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=<API_KEY>'

const searchMovie = async (text: string): Promise<Movie[]> => {
  const response: { Error: string } | { Search: Movie[] } = await fetch(
    `${apiUrl}&s=${text}`
  ).then((r) => r.json())

  if ('Error' in response) return []

  return response.Search
}

export default function MovieList() {
  const [search, setSearch] = createSignal<string>(null)
  const [resource] = createResource(search, searchMovie)

  return (
    <>
      <Search onSearch={(searchText) => setSearch(searchText)} />
      <div class="flex flex-wrap">
        <Show when={search()}>
          <For
            each={resource()}
            fallback={
              <div>
                {resource.loading
                  ? 'Chargement...'
                  : `Aucune réponse pour "${search()}"`}
              </div>
            }
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
        </Show>
      </div>
    </>
  )
}
