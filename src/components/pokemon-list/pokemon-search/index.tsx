"use client";

import { SearchBar } from "@/components/ui/search-bar";
import { PokemonCard } from "@/components/pokemon-list/pokemon-card";
import { useGetAllPokemon } from "@/hooks/pokemon-list";

export function PokemonSearch() {
  const { allPokemon } = useGetAllPokemon();

  return (
    <div className="flex w-full flex-col items-center gap-5">
      <SearchBar placeholder="Search for Pokémon by name..." />
      <p className="text-sm">Showing {allPokemon.length} Pokémon</p>

      <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {allPokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.key}
            name={pokemon.key}
            num={pokemon.num}
            sprite={pokemon.sprite}
            types={pokemon.types}
            baseStats={pokemon.baseStats}
          />
        ))}
      </div>
    </div>
  );
}
