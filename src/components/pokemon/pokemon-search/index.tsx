"use client";

import { SearchBar } from "@/components/ui/search-bar";
import { INITIAL_OFFSET, usePokemon } from "@/hooks/use-pokemon";
import { useDebounceValue } from "@/hooks/use-debounce";
import { useInfiniteScroll } from "@/hooks/use-infinite-scroll";
import { PokemonList } from "@/components/pokemon/pokemon-list";

export function PokemonSearch() {
  const [search, setSearch] = useDebounceValue();
  const { pokemonList, isLoading, fetchMore, hasError, refetch } =
    usePokemon(search);

  const loaderRef = useInfiniteScroll(() => {
    if (isLoading || hasError) return;

    fetchMore({
      variables: {
        offset: INITIAL_OFFSET + pokemonList.length,
      },
    });
  });

  return (
    <div className="flex w-full grow flex-col items-center gap-5">
      <SearchBar
        name="pokemon-search"
        id="pokemon-search"
        placeholder="Search for Pokémon by name..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <p className="text-sm">
        {isLoading
          ? "Searching for Pokémon..."
          : search.trim().length === 0
            ? `Showing ${pokemonList.length} Pokémon`
            : `Found ${pokemonList.length} Pokémon matching ¨${search}¨`}
      </p>

      <PokemonList
        pokemonList={pokemonList}
        isLoading={isLoading}
        hasError={hasError}
        refetch={refetch}
      />
      <div ref={loaderRef} className="bg-red h-10 w-full" />
    </div>
  );
}
