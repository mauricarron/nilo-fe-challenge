"use client";

import { SearchBar } from "@/components/ui/search-bar";
import { PokemonCard } from "@/components/pokemon-list/pokemon-card";
import { usePokemon } from "@/hooks/pokemon-list";
import { useDebounceValue } from "@/hooks/use-debounce";

export function PokemonSearch() {
  const [search, setSearch] = useDebounceValue();
  const { pokemonList } = usePokemon(search);

  return (
    <div className="flex w-full flex-col items-center gap-5">
      <SearchBar
        placeholder="Search for Pokémon by name..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <p className="text-sm">Showing {pokemonList.length} Pokémon</p>

      <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.key} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
