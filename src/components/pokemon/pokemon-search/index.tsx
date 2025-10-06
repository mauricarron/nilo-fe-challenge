"use client";

import { SearchBar } from "@/components/ui/search-bar";
import { PokemonCard } from "@/components/pokemon/pokemon-card";
import { INITIAL_OFFSET, usePokemon } from "@/hooks/pokemon-list";
import { useDebounceValue } from "@/hooks/use-debounce";
import { useInfiniteScroll } from "@/hooks/use-infinite-scroll";
import { PokemonCardSkeleton } from "@/components/layout/pokemon-card-skeleton";

export function PokemonSearch() {
  const [search, setSearch] = useDebounceValue();
  const { pokemonList, isLoading, fetchMore } = usePokemon(search);

  const loaderRef = useInfiniteScroll(() => {
    if (isLoading) return;

    fetchMore({
      variables: {
        offset: INITIAL_OFFSET + pokemonList.length,
      },
    });
  });

  return (
    <div className="flex w-full flex-col items-center gap-5">
      <SearchBar
        placeholder="Search for Pokémon by name..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <p className="text-sm">Showing {pokemonList.length} Pokémon</p>

      <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {isLoading ? (
          new Array(15)
            .fill(0)
            .map((_, index) => <PokemonCardSkeleton key={index} />)
        ) : (
          <>
            {pokemonList.map((pokemon) => (
              <PokemonCard key={pokemon.key} pokemon={pokemon} />
            ))}
          </>
        )}
      </div>
      <div ref={loaderRef} className="bg-red h-10 w-full" />
    </div>
  );
}
