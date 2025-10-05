import { SearchBar } from "@/components/ui/search-bar";
import { PokemonCard } from "@/components/pokemon-search/pokemon-card";

export function PokemonList() {
  return (
    <div className="flex w-full flex-col items-center gap-5">
      <SearchBar placeholder="Search for Pokémon by name..." />
      <p className="text-sm">Showing 70 Pokémon</p>

      {/* pokemon grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"></div>
      <PokemonCard />
    </div>
  );
}
