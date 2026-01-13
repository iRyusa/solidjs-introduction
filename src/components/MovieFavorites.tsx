import EmptyBlock from '../ui/EmptyBlock'
import { favoritesMovies, toggleFavorite } from '../stores/movies'
import Card from '../ui/Card'
import { For } from 'solid-js'

export default function MovieFavorites() {
  return (
    <div class="flex flex-wrap">
      <For
        each={favoritesMovies}
        fallback={
          <EmptyBlock>Aucun film en favoris pour l'instant !</EmptyBlock>
        }
      >
        {(item) => (
          <Card
            title={item.Title}
            date={item.Year}
            img={item.Poster}
            isFavorite={true}
            setFavorite={() => toggleFavorite(item)}
          />
        )}
      </For>
    </div>
  )
}
