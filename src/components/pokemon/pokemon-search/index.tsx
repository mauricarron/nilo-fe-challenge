"use client";

import { useState, useCallback } from "react";
import { PokemonSearchBar } from "@/components/pokemon/pokemon-search-bar";
import { INITIAL_OFFSET, usePokemon } from "@/hooks/use-pokemon";
import { useInfiniteScroll } from "@/hooks/use-infinite-scroll";
import { PokemonList } from "@/components/pokemon/pokemon-list";

export function PokemonSearch() {
  const [search, setSearch] = useState("");
  const { pokemonList, isLoading, fetchMore, hasError, refetch } =
    usePokemon(search);

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const handleFetchMore = useCallback(() => {
    if (isLoading || hasError) return;

    fetchMore({
      variables: {
        offset: INITIAL_OFFSET + pokemonList.length,
      },
    });
  }, [isLoading, hasError, fetchMore, pokemonList.length]);

  const loaderRef = useInfiniteScroll(handleFetchMore);

  return (
    <div className="flex w-full grow flex-col items-center gap-5">
      <PokemonSearchBar onSearchChange={handleSearch} />
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
